var currentPriceBTC = new XMLHttpRequest();

currentPriceBTC.open('GET', 'https://api.pro.coinbase.com/products/BTC-USD/book', true);
currentPriceBTC.onreadystatechange = function(){
  if(currentPriceBTC.readyState == 4){
    var ticker = JSON.parse(currentPriceBTC.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('btc').innerHTML = "Current Price: USD$" + price;
  };
};
currentPriceBTC.send();