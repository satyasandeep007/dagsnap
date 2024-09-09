export const getDagTransactionsApi = async (address: string) => {
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/transactions`);
  const data = await response.json();
  return data?.data;
};
