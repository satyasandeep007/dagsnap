export const getDagTransactionsApi = async (address: string) => {
  try {
    const response = await fetch(
      `http://localhost:9090/api/dag?address=${address}`,
      { method: 'GET' },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'rpc');
    return data?.transactions;
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    throw error;
  }
};

export const getDagBalanceApi = async (address: string) => {
  try {
    const response = await fetch(
      `http://localhost:9090/api/dag?address=${address}`,
      { method: 'GET' },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'rpc');
    return data?.balance;
  } catch (error) {
    console.error('Failed to fetch balance:', error);
    throw error;
  }
};
