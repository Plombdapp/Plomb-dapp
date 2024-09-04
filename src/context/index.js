import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN = 421614;
export const VITE_RPC = "https://sepolia-rollup.arbitrum.io/rpc";

const arbitrum = {
  chainId: SUPPORTED_CHAIN,
  name: "Arbitrum",
  currency: "ETH",
  explorerUrl: "https://sepolia.arbiscan.io/",
  rpcUrl: VITE_RPC,
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

export const configureWeb3Modal = () =>
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [arbitrum],
    projectId: import.meta.env.VITE_PROJECT_ID,
    enableAnalytics: false, // Optional - defaults to your Cloud configuration
  });