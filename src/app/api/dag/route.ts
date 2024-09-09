import { NextRequest, NextResponse } from 'next/server';

export const getDagTransactionsApi = async (address: string) => {
  console.log('getDagTransactionsApi', address);
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/transactions`);
  const data = await response.json();
  return data?.data;
};

export const getDagBalanceApi = async (address: string) => {
  console.log('getDagBalanceApi', address);
  const response = await fetch(`https://be-testnet.constellationnetwork.io/addresses/${address}/balance`);
  const data = await response.json();
  const balance = formatAmount(data?.data?.balance);
  return balance;
};

const formatAmount = (amount: number) => {
  return (amount / 100000000).toFixed(2);
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 });
  }

  try {
    const [transactions, balance] = await Promise.all([getDagTransactionsApi(address), getDagBalanceApi(address)]);

    return NextResponse.json(
      {
        transactions,
        balance,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error fetching DAG data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
