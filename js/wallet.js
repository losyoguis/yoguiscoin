document.getElementById("student").innerText = STUDENT_NAME;
document.getElementById("wallet").innerText = WALLET_ID;

function getLevel(balance){
  if(balance < 50) return "Rookie";
  if(balance < 150) return "Explorer";
  if(balance < 300) return "Thinker";
  return "Master";
}

getCandles().then(rows => {
  if(!rows.length) return;
  const last = rows[rows.length - 1];
  const balance = Number(last.close || 0);
  document.getElementById("balance").innerText = balance;
  document.getElementById("level").innerText = getLevel(balance);
});
