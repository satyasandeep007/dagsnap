export const getCoinData = async (coinid: any) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;

  return await fetch(url);
};
