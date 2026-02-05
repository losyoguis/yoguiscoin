async function getCandles(){
  const res = await fetch(SHEETS_API + "?action=candles");
  const data = await res.json();
  return data.rows || [];
}
