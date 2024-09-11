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

export const sendDagTransaction = async (
  toAddress: string,
  amount: number,
  account: any,
) => {
  try {
    const response = await fetch(`http://localhost:9090/api/dag/send`, {
      method: 'POST',
      body: JSON.stringify({ toAddress, amount, account }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'rpc');
    return data?.tx;
  } catch (error) {
    console.error('Failed to send DAG transaction:', error);
    throw error;
  }
};

export const getMetagraphBalanceApi = async (address: string) => {
  try {
    const response = await fetch(
      `http://localhost:9090/api/metagraph/balance`,
      {
        method: 'POST',
        body: JSON.stringify({ address }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, 'rpc');
    return data?.balance;
  } catch (error) {
    console.error('Failed to fetch Metagraph balance:', error);
    throw error;
  }
};
