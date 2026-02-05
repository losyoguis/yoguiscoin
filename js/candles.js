getCandles().then(rows => {
  const candles = rows.map(r => ({
    x: new Date(r.date),
    o: r.open,
    h: r.high,
    l: r.low,
    c: r.close
  }));

  new Chart(document.getElementById("candlesChart"), {
    type: 'candlestick',
    data: {
      datasets: [{
        label: 'Yoguiscoin (YGC)',
        data: candles
      }]
    }
  });
});
