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