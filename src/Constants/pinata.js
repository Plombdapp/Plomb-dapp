import axios from 'axios';

const pinataApiKey = 'e9ade981a90fb6ccf2d9';
const pinataSecretApiKey = 'c4c9b41edb64ed8e45adddc16d85403c4b0f687308ddc8d0b74858109cf708b2';
const pinataGateway = 'rose-hidden-silverfish-585.mypinata.cloud';

export const uploadToPinata = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
  });
  data.append('pinataMetadata', metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 1,
  });
  data.append('pinataOptions', pinataOptions);

  try {
    const response = await axios.post(url, data, {
      maxContentLength: 'Infinity', // Necessary for large files
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    });

    const ipfsHash = response.data.IpfsHash;
    const fileUrl = `${pinataGateway}/${ipfsHash}`;
    return fileUrl;
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
};
