import React, { useEffect, useRef } from 'react';
import { ZkMeWidget, verifyKycWithZkMeServices } from '@zkmelabs/widget';

const ZKME = () => {
  
  const buttonRef = useRef(null);

  // Fetch environment variables
  const appId = process.env.APP_ID; // Ensure you set APP_ID in your environment
  const apiKey = process.env.API_KEY; // Ensure you set API_KEY in your environment

  // Function to fetch a new access token
  const fetchNewToken = async () => {
    try {
      const response = await fetch('https://api.zk.me/your-token-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: apiKey, // Use environment variable
          appId: appId, // Use environment variable
          apiModePermission: 0,
          lv: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }

      const data = await response.json();
      return data.accessToken; // Return the access token
    } catch (error) {
      console.error('Error fetching access token:', error);
      return null;
    }
  };

  // Function to connect and return user’s wallet address
  async function connect() {
    // Your logic to connect and return the user's wallet address
    return '0x...'; // Replace with actual address or connection logic
  }

  // Provider object definition
  const provider = {
    async getAccessToken() {
      return await fetchNewToken(); // Fetch the new token
    },

    async getUserAccounts() {
      const userConnectedAddress = await connect();
      return [userConnectedAddress];
    },
  };

  // Handle KYC finished event
  async function handleFinished(results) {
    const { isGrant, associatedAccount } = results;

    const userConnectedAddress = await connect(); 

    if (isGrant && associatedAccount === userConnectedAddress.toLowerCase()) {
      console.log('KYC verification completed for the connected account.');
    } else {
      console.warn('KYC verification failed or account mismatch.');
    }
  }

  // Initialize the ZkMeWidget
  const zkMeWidget = new ZkMeWidget(
    appId,  // Use environment variable
    'plombdapp', // Your Dapp Name
    '0x80x251E537Feaf1730Ac54d0F5aF120541Ec4C042109', // Chain ID (Polygon, for example)
    provider, // The provider object defined above
    {
      lv: 'zkKYC', // Example option for ZKMe
    }
  );

  useEffect(() => {
    // Add event listener when the component mounts
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('click', () => {
        zkMeWidget.launch();
      });
    }

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      if (button) {
        button.removeEventListener('click', () => {
          zkMeWidget.launch();
        });
      }
    };
  }, [zkMeWidget]); // Dependency array includes zkMeWidget

  // Ensure to await the KYC verification (if needed)
  useEffect(() => {
       const load = async () => {
        const userAccounts = await provider.getUserAccounts();
        // const { isGrant } = await verifyKycWithZkMeServices(
        //   appId,
        //   userAccounts
        // );
    
        // Optionally handle the KYC result immediately
        // console.log('KYC grant status:', isGrant);
      }

      load();
  }, []);

  return (
    <div>
      
      <button ref={buttonRef}>Launch KYC</button>
    </div>
  );
};

export default ZKME;
