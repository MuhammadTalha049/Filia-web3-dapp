import React, { useState } from 'react';

const WalletAddressForm = ({ onSubmit }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(walletAddress);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="Enter your wallet address"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WalletAddressForm;
