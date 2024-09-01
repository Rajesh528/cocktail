// src/services/donorService.js
import axios from 'axios';

const getDonors = async () => {
  try {
    const response = await axios.get('/api/donors');
    return response.data;
  } catch (error) {
    console.error('Error fetching donors:', error);
    throw error;
  }
};

export default getDonors;
