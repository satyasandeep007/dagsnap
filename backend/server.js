import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 9090;

// Enable CORS for all routes
app.use(cors());

const getDagTransactionsApi = async (address) => {
  console.log('getDagTransactionsApi', address);
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/transactions`);
  const data = await response.json();
  return data?.data;
};

const getDagBalanceApi = async (address) => {
  console.log('getDagBalanceApi', address);
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/balance`);
  const data = await response.json();
  const balance = formatAmount(data?.data?.balance);
  return balance;
};

const formatAmount = (amount) => {
  return (amount / 100000000).toFixed(2);
};

app.get('/api/dag', async (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    const [transactions, balance] = await Promise.all([getDagTransactionsApi(address), getDagBalanceApi(address)]);

    res.json({
      transactions,
      balance,
    });
  } catch (error) {
    console.error('Error fetching DAG data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
