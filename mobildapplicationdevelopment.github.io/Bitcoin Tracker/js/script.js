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

var currentPriceETH = new XMLHttpRequest();

currentPriceETH.open('GET', 'https://api.pro.coinbase.com/products/ETH-USD/book', true);
currentPriceETH.onreadystatechange = function(){
  if(currentPriceETH.readyState == 4){
    var ticker = JSON.parse(currentPriceETH.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('eth').innerHTML = "Current Price: USD$" + price;
  };
};
currentPriceETH.send();

var currentPriceLTC = new XMLHttpRequest();

currentPriceLTC.open('GET', 'https://api.pro.coinbase.com/products/LTC-USD/book', true);
currentPriceLTC.onreadystatechange = function(){
  if(currentPriceLTC.readyState == 4){
    var ticker = JSON.parse(currentPriceLTC.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('bat').innerHTML = "Current Price: USD$" + price;
  };
};
currentPriceLTC.send();

var currentPriceXTZ = new XMLHttpRequest();

currentPriceXTZ.open('GET', 'https://api.pro.coinbase.com/products/XTZ-USD/book', true);
currentPriceXTZ.onreadystatechange = function(){
  if(currentPriceXTZ.readyState == 4){
    var ticker = JSON.parse(currentPriceXTZ.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('xtz').innerHTML = "Current Price: USD$" + price;
  };
};
currentPriceXTZ.send();