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
  //todo: pass signature instead of private key
  dag4.account.loginPrivateKey(account.replace('0x', ''));
  const tx = await dag4.account.transferDag(toAddress, amount, 0);
  return tx;
};

const getMetagraphBalanceViaAccount = async (account) => {
  dag4.account.connect({
    networkVersion: '2.0',
    testnet: true,
  });
  //todo: pass signature instead of private key
  dag4.account.loginPrivateKey(account.replace('0x', ''));
  console.log(account, 'account');
  const metagraphClient = dag4.account.createMetagraphTokenClient({
    l0Url: 'https://l0-lb-testnet.constellationnetwork.io/',
    l1Url: 'https://l1-lb-testnet.constellationnetwork.io/',
  });
  const balance = await metagraphClient.getBalance();
  console.log(balance, 'balance');
  return balance;
};

const getMetagraphBalance = async (address) => {
  const response = await fetch(`https://dyzt5u1o3ld0z.cloudfront.net/testnet/addresses/${address}/metagraphs`);
  const data = await response.json();
  console.log(data, 'data');
  return data.data;
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

app.post('/api/metagraph/balance', async (req, res) => {
  const { address } = req.body;
  console.log(address, 'address');
  if (!address) {
    return res.status(400).json({ error: 'address is required' });
  }

  try {
    const balance = await getMetagraphBalance(address);
    console.log(balance, 'balance');
    res.json({ balance });
  } catch (error) {
    console.error('Error fetching Metagraph data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/dag/send', async (req, res) => {
  console.log('send', req.body);
  const { toAddress, amount, account } = req.body;

  // if (!toAddress || !amount) {
  //   return res.status(400).json({ error: 'To address and amount are required' });
  // }
  try {
    const tx = await sendDagTransaction(toAddress, amount, account);
    res.json({ tx });
  } catch (error) {
    console.error('Error sending DAG transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/coin/:coinid', async (req, res) => {
  console.log('getCoinData', req.params.coinid);
  const coinid = req.params.coinid;
  const coinData = await getCoinData(coinid);
  res.json(coinData);
});

const getCoinData = async (coinid) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
