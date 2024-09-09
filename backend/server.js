import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { dag4 } from '@stardust-collective/dag4';

const app = express();
const port = 9090;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

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

const sendDagTransaction = async (toAddress, amount, account) => {
  dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
  });
  const newAccount = account.replace('0x', '');
  console.log(newAccount, 'newAccount');
  dag4.account.loginPrivateKey(newAccount);

  const tx = await dag4.account.transferDag(toAddress, amount, 0);
  return tx;
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

app.post('/api/dag/send', async (req, res) => {
  console.log('send', req.body);
  const { toAddress, amount, account } = req.body;

  if (!toAddress || !amount) {
    return res.status(400).json({ error: 'To address and amount are required' });
  }
  try {
    const tx = await sendDagTransaction(toAddress, amount, account);
    res.json({ tx });
  } catch (error) {
    console.error('Error sending DAG transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
