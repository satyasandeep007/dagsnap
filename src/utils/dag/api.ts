export const getDagTransactionsApi: any = async (address: string) => {
  console.log('getDagTransactionsApi', address);
  // const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/transactions`);
  // const data = await response.json();
  // return data?.data;
  return [];
};

export const getDagBalanceApi: any = async (address: string) => {
  console.log('getDagBalanceApi', address);
  // const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/balance`);
  // const data = await response.json();
  // const balance = formatAmount(data?.data?.balance);
  // return balance;
  return 90;
};

const formatAmount = (amount: number) => {
  return (amount / 100000000).toFixed(2);
};

export const getCoinData = async (coinid: any) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;

  return await fetch(url);
};
