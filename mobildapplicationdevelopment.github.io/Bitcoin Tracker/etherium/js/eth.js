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