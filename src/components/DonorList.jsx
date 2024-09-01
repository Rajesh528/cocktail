// src/components/DonorList.jsx
import React, { useEffect, useState } from 'react';
import getDonors from '../services/donorService';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      const data = await getDonors();
      setDonors(data);
    };

    fetchDonors();
  }, []);

  return (
    <div>
      <h1>Donors List</h1>
      <ul>
        {donors.map((donor) => (
          <li key={donor._id}>{donor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
