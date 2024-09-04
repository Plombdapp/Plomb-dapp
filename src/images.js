import { create } from 'ipfs-http-client';

const client = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

const uploadImage = async (file) => {
  try {
    const result = await client.add(file);
    return result.path; // This is the IPFS hash
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export default uploadImage;
