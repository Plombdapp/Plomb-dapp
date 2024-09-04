const checkMetamaskInstallation = () => {
    if (window.ethereum == undefined) {
        alert("Metamask wallet is not installed");
        return;
    }
};
const [account, setAccount] = useState(null);
const [provider, setProvider] = useState(null);

const initiateWalletConnection = async () => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        setProvider(provider);
        setAccount(account);
    } catch (error) {
        console.log(error);
    }
};
const addPolygonMumbaiTestnet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("wallet_addEthereumChain", [
        {
            chainId: "0x13881",
            chainName: "Mumbai Testnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
            },
            rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        },
    ]);
};
const switchToMumbaiTestnet = async () => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("wallet_switchEthereumChain", [
            { chainId: "0x13881" },
        ]);
    } catch (error) {
        if (error.code === 4902) {
            await addPolygonMumbaiTestnet();
        } else {
            console.log(error);
        }
    }
};