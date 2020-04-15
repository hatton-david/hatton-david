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