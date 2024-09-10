export const getCoinData = async (coinid: any) => {
  const url = `http://localhost:9090/api/coin/${coinid}`;
  const response = await fetch(url);
  console.log(response, 'response');
  const data = await response.json();
  return data.market_data.current_price.usd;
};
