var symbols = ["MMM", "AOS", "ABT", "ABBV", "ACN", "ATVI", "AYI", "ADBE", "AAP", "AMD", "AES", "AET", "AMG", "AFL", "A", "APD", "AKAM", "ALK", "ALB", "ARE", "ALXN", "ALGN", "ALLE", "AGN", "ADS", "LNT", "ALL", "GOOGL", "GOOG", "MO", "AMZN", "AEE", "AAL", "AEP", "AXP", "AIG", "AMT", "AWK", "AMP", "ABC", "AME", "AMGN", "APH", "APC", "ADI", "ANDV", "ANSS", "ANTM", "AON", "APA", "AIV", "AAPL", "AMAT", "APTV", "ADM", "ARNC", "AJG", "AIZ", "T", "ADSK", "ADP", "AZO", "AVB", "AVY", "BHGE", "BLL", "BAC", "BAX", "BBT", "BDX", "BRK.B", "BBY", "BIIB", "BLK", "HRB", "BA", "BKNG", "BWA", "BXP", "BSX", "BHF", "BMY", "AVGO", "BF.B", "CHRW", "CA", "COG", "CDNS", "CPB", "COF", "CAH", "KMX", "CCL", "CAT", "CBOE", "CBRE", "CBS", "CELG", "CNC", "CNP"];

var stocks = new Array(506);

var request = new XMLHttpRequest();
var URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=MMM,AOS,ABT,ABBV,ACN,ATVI,AYI,ADBE,AAP,AMD,AES,AET,AMG,AFL,A,APD,AKAM,ALK,ALB,ARE,ALXN,ALGN,ALLE,AGN,ADS,LNT,ALL,GOOGL,GOOG,MO,AMZN,AEE,AAL,AEP,AXP,AIG,AMT,AWK,AMP,ABC,AME,AMGN,APH,APC,ADI,ANDV,ANSS,ANTM,AON,APA,AIV,AAPL,AMAT,APTV,ADM,ARNC,AJG,AIZ,T,ADSK,ADP,AZO,AVB,AVY,BHGE,BLL,BAC,BAX,BBT,BDX,BRK.B,BBY,BIIB,BLK,HRB,BA,BKNG,BWA,BXP,BSX,BHF,BMY,AVGO,BF.B,CHRW,CA,COG,CDNS,CPB,COF,CAH,KMX,CCL,CAT,CBOE,CBRE,CBS,CELG,CNC,CNP&types=quote"

request.open('GET', URL, true);
console.log("test");

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    //console.log(stockData);
    for (var i = 0; i < 100; i++) {
      var stockobj = {
        changePercent: stockData[symbols[i]]["quote"]["changePercent"],
        price: stockData[symbols[i]]["quote"]["latestPrice"],
        companyName: stockData[symbols[i]]["quote"]["companyName"]
      };

      stocks[i]=stockobj;
    }
  } else {
    console.log("bummer");
  }



  console.log(stocks);
}

request.send();


//

symbols = ["CTL","CERN","CF","SCHW","CHTR","CVX","CMG","CB","CHD","CI","XEC","CINF","CTAS","CSCO","C","CFG","CTXS","CME","CMS","KO","CTSH","CL","CMCSA","CMA","CAG","CXO","COP","ED","STZ","GLW","COST","COTY","CCI","CSRA","CSX","CMI","CVS","DHI","DHR","DRI","DVA","DE","DAL","XRAY","DVN","DLR","DFS","DISCA","DISCK","DISH","DG","DLTR","D","DOV","DWDP","DPS","DTE","DUK","DRE","DXC","ETFC","EMN","ETN","EBAY","ECL","EIX","EW","EA","EMR","ETR","EVHC","EOG","EQT","EFX","EQIX","EQR","ESS","EL","RE","ES","EXC","EXPE","EXPD","ESRX","EXR","XOM","FFIV","FB","FAST","FRT","FDX","FIS","FITB","FE","FISV","FLIR","FLS","FLR","FMC","FL"]

request = new XMLHttpRequest();
URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=CTL,CERN,CF,SCHW,CHTR,CVX,CMG,CB,CHD,CI,XEC,CINF,CTAS,CSCO,C,CFG,CTXS,CME,CMS,KO,CTSH,CL,CMCSA,CMA,CAG,CXO,COP,ED,STZ,GLW,COST,COTY,CCI,CSRA,CSX,CMI,CVS,DHI,DHR,DRI,DVA,DE,DAL,XRAY,DVN,DLR,DFS,DISCA,DISCK,DISH,DG,DLTR,D,DOV,DWDP,DPS,DTE,DUK,DRE,DXC,ETFC,EMN,ETN,EBAY,ECL,EIX,EW,EA,EMR,ETR,EVHC,EOG,EQT,EFX,EQIX,EQR,ESS,EL,RE,ES,EXC,EXPE,EXPD,ESRX,EXR,XOM,FFIV,FB,FAST,FRT,FDX,FIS,FITB,FE,FISV,FLIR,FLS,FLR,FMC,FL&types=quote"

request.open('GET', URL, true);
console.log("test");

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    //console.log(stockData);
    for (var i = 100; i <= 200; i++) {
      var stockobj = {
        changePercent: stockData[symbols[i]]["quote"]["changePercent"],
        price: stockData[symbols[i]]["quote"]["latestPrice"],
        companyName: stockData[symbols[i]]["quote"]["companyName"]
      };

      stocks[i]=stockobj;
    }
  } else {
    console.log("bummer");
  }

  stocks.sort(function(a, b) {
    return b.changePercent - a.changePercent;
  });

  console.log(stocks);
}

stocks.sort(function(a, b) {
  return b.changePercent - a.changePercent;
});

request.send();
