export const getDagTransactionsApi = async (address: string) => {
  try {
    const response = await fetch(
      `https://be-testnet.constellationnetwork.io/addresses/${address}/transactions`,
      { method: 'GET' },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'rpc');
    return data?.data;
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    throw error;
  }
};

export const getDagBalanceApi = async (address: string) => {
  try {
    const response = await fetch(
      `https://be-testnet.constellationnetwork.io/addresses/${address}/balance`,
      { method: 'GET' },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'rpc');
    return data?.data?.balance;
  } catch (error) {
    console.error('Failed to fetch balance:', error);
    throw error;
  }
};
