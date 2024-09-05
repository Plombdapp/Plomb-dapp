// Replace this with your client ID string
const clientId = process.env.REACT_APP_CLIENT_ID || "YOUR_CLIENT_ID";  // Placeholder

const createThirdwebClient = require("thirdweb").createThirdwebClient; // Assuming thirdweb is installed

export const client = createThirdwebClient({
  clientId,
});