export const getDagTransactionsApi: any = async (address: string) => {
  console.log('getDagTransactionsApi', address);
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/transactions`);
  const data = await response.json();
  return data?.data;
};

export const getDagBalanceApi: any = async (address: string) => {
  console.log('getDagBalanceApi', address);
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/balance`);
  const data = await response.json();
  const balance = formatAmount(data?.data?.balance);
  return balance;
};

const formatAmount = (amount: number) => {
  return (amount / 100000000).toFixed(2);
};
