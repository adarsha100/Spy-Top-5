/*

ELEGANT SOLUTION (needs fixing)

var symbols = ["MMM","AOS","ABT","ABBV","ACN","ATVI","AYI","ADBE","AAP","AMD","AES","AET","AMG","AFL","A","APD","AKAM","ALK","ALB","ARE","ALXN","ALGN","ALLE","AGN","ADS","LNT","ALL","GOOGL","GOOG","MO","AMZN","AEE","AAL","AEP","AXP","AIG","AMT","AWK","AMP","ABC","AME","AMGN","APH","APC","ADI","ANDV","ANSS","ANTM","AON","APA","AIV","AAPL","AMAT","APTV","ADM","ARNC","AJG","AIZ","T","ADSK","ADP","AZO","AVB","AVY","BHGE","BLL","BAC","BAX","BBT","BDX","BRK.B","BBY","BIIB","BLK","HRB","BA","BKNG","BWA","BXP","BSX","BHF","BMY","AVGO","BF.B","CHRW","CA","COG","CDNS","CPB","COF","CAH","KMX","CCL","CAT","CBOE","CBRE","CBS","CELG","CNC","CNP","CTL","CERN","CF","SCHW","CHTR","CVX","CMG","CB","CHD","CI","XEC","CINF","CTAS","CSCO","C","CFG","CTXS","CME","CMS","KO","CTSH","CL","CMCSA","CMA","CAG","CXO","COP","ED","STZ","GLW","COST","COTY","CCI","CSRA","CSX","CMI","CVS","DHI","DHR","DRI","DVA","DE","DAL","XRAY","DVN","DLR","DFS","DISCA","DISCK","DISH","DG","DLTR","D","DOV","DWDP","DPS","DTE","DUK","DRE","DXC","ETFC","EMN","ETN","EBAY","ECL","EIX","EW","EA","EMR","ETR","EVHC","EOG","EQT","EFX","EQIX","EQR","ESS","EL","RE","ES","EXC","EXPE","EXPD","ESRX","EXR","XOM","FFIV","FB","FAST","FRT","FDX","FIS","FITB","FE","FISV","FLIR","FLS","FLR","FMC","FL","F","FTV","FBHS","BEN","FCX","GPS","GRMN","IT","GD","GE","GGP","GIS","GM","GPC","GILD","GPN","GS","GT","GWW","HAL","HBI","HOG","HRS","HIG","HAS","HCA","HCP","HP","HSIC","HES","HPE","HLT","HOLX","HD","HON","HRL","HST","HPQ","HUM","HBAN","HII","IDXX","INFO","ITW","ILMN","INCY","IR","INTC","ICE","IBM","IP","IPG","IFF","INTU","ISRG","IVZ","IPGP","IQV","IRM","JBHT","JEC","SJM","JNJ","JCI","JPM","JNPR","KSU","K","KEY","KMB","KIM","KMI","KLAC","KSS","KHC","KR","LB","LLL","LH","LRCX","LEG","LEN","LUK","LLY","LNC","LKQ","LMT","L","LOW","LYB","MTB","MAC","M","MRO","MPC","MAR","MMC","MLM","MAS","MA","MAT","MKC","MCD","MCK","MDT","MRK","MET","MTD","MGM","KORS","MCHP","MU","MSFT","MAA","MHK","TAP","MDLZ","MON","MNST","MCO","MS","MSI","MYL","NDAQ","NOV","NAVI","NKTR","NTAP","NFLX","NWL","NFX","NEM","NWSA","NWS","NEE","NLSN","NKE","NI","NBL","JWN","NSC","NTRS","NOC","NCLH","NRG","NUE","NVDA","ORLY","OXY","OMC","OKE","ORCL","PCAR","PKG","PH","PAYX","PYPL","PNR","PBCT","PEP","PKI","PRGO","PFE","PCG","PM","PSX","PNW","PXD","PNC","RL","PPG","PPL","PX","PFG","PG","PGR","PLD","PRU","PEG","PSA","PHM","PVH","QRVO","QCOM","PWR","DGX","RRC","RJF","RTN","O","RHT","REG","REGN","RF","RSG","RMD","RHI","ROK","COL","ROP","ROST","RCL","SPGI","CRM","SBAC","SCG","SLB","STX","SEE","SRE","SHW","SPG","SWKS","SLG","SNA","SO","LUV","SWK","SBUX","STT","SRCL","SYK","STI","SIVB","SYMC","SYF","SNPS","SYY","TROW","TTWO","TPR","TGT","TEL","FTI","TXN","TXT","BK","CLX","COO","HSY","MOS","TRV","DIS","TMO","TIF","TWX","TJX","TMK","TSS","TSCO","TDG","TRIP","FOXA","FOX","TSN","USB","UDR","ULTA","UAA","UA","UNP","UAL","UNH","UPS","URI","UTX","UHS","UNM","VFC","VLO","VAR","VTR","VRSN","VRSK","VZ","VRTX","VIAB","V","VNO","VMC","WMT","WBA","WM","WAT","WEC","WFC","WELL","WDC","WU","WRK","WY","WHR","WMB","WLTW","WYN","WYNN","XEL","XRX","XLNX","XL","XYL","YUM","ZBH","ZION","ZTS"];

var stocks = new Array(505);
var components;
var request;
var URL;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for(var k=0; k<5; k++) {
  components = symbols.slice(k*100,k*100+100)
  URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + components +"&types=quote"
  console.log(URL);
  request = new XMLHttpRequest();
  request.open('GET', URL, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var stockData = JSON.parse(this.response);
      for (var i = 0; i < components.length; i++) {
        var stockobj = {
          changePercent:  stockData[components[i]]["quote"]["changePercent"],
          price:          stockData[components[i]]["quote"]["latestPrice"],
          companyName:    stockData[components[i]]["quote"]["companyName"],
          symbol:         components[i]
        };
        stocks[i]=stockobj;
      }
    } else {
      console.log("bummer");
    }
  }
  request.send(null);
}
*/



































// shitty solution

var symbols = ["MMM","AOS","ABT","ABBV","ACN","ATVI","AYI","ADBE","AAP","AMD","AES","AET","AMG","AFL","A","APD","AKAM","ALK","ALB","ARE","ALXN","ALGN","ALLE","AGN","ADS","LNT","ALL","GOOGL","GOOG","MO","AMZN","AEE","AAL","AEP","AXP","AIG","AMT","AWK","AMP","ABC","AME","AMGN","APH","APC","ADI","ANDV","ANSS","ANTM","AON","APA","AIV","AAPL","AMAT","APTV","ADM","ARNC","AJG","AIZ","T","ADSK","ADP","AZO","AVB","AVY","BHGE","BLL","BAC","BAX","BBT","BDX","BRK.B","BBY","BIIB","BLK","HRB","BA","BKNG","BWA","BXP","BSX","BHF","BMY","AVGO","BF.B","CHRW","CA","COG","CDNS","CPB","COF","CAH","KMX","CCL","CAT","CBOE","CBRE","CBS","CELG","CNC","CNP","CTL","CERN","CF","SCHW","CHTR","CVX","CMG","CB","CHD","CI","XEC","CINF","CTAS","CSCO","C","CFG","CTXS","CME","CMS","KO","CTSH","CL","CMCSA","CMA","CAG","CXO","COP","ED","STZ","GLW","COST","COTY","CCI","CSRA","CSX","CMI","CVS","DHI","DHR","DRI","DVA","DE","DAL","XRAY","DVN","DLR","DFS","DISCA","DISCK","DISH","DG","DLTR","D","DOV","DWDP","DPS","DTE","DUK","DRE","DXC","ETFC","EMN","ETN","EBAY","ECL","EIX","EW","EA","EMR","ETR","EVHC","EOG","EQT","EFX","EQIX","EQR","ESS","EL","RE","ES","EXC","EXPE","EXPD","ESRX","EXR","XOM","FFIV","FB","FAST","FRT","FDX","FIS","FITB","FE","FISV","FLIR","FLS","FLR","FMC","FL","F","FTV","FBHS","BEN","FCX","GPS","GRMN","IT","GD","GE","GGP","GIS","GM","GPC","GILD","GPN","GS","GT","GWW","HAL","HBI","HOG","HRS","HIG","HAS","HCA","HCP","HP","HSIC","HES","HPE","HLT","HOLX","HD","HON","HRL","HST","HPQ","HUM","HBAN","HII","IDXX","INFO","ITW","ILMN","INCY","IR","INTC","ICE","IBM","IP","IPG","IFF","INTU","ISRG","IVZ","IPGP","IQV","IRM","JBHT","JEC","SJM","JNJ","JCI","JPM","JNPR","KSU","K","KEY","KMB","KIM","KMI","KLAC","KSS","KHC","KR","LB","LLL","LH","LRCX","LEG","LEN","LUK","LLY","LNC","LKQ","LMT","L","LOW","LYB","MTB","MAC","M","MRO","MPC","MAR","MMC","MLM","MAS","MA","MAT","MKC","MCD","MCK","MDT","MRK","MET","MTD","MGM","KORS","MCHP","MU","MSFT","MAA","MHK","TAP","MDLZ","MON","MNST","MCO","MS","MSI","MYL","NDAQ","NOV","NAVI","NKTR","NTAP","NFLX","NWL","NFX","NEM","NWSA","NWS","NEE","NLSN","NKE","NI","NBL","JWN","NSC","NTRS","NOC","NCLH","NRG","NUE","NVDA","ORLY","OXY","OMC","OKE","ORCL","PCAR","PKG","PH","PAYX","PYPL","PNR","PBCT","PEP","PKI","PRGO","PFE","PCG","PM","PSX","PNW","PXD","PNC","RL","PPG","PPL","PX","PFG","PG","PGR","PLD","PRU","PEG","PSA","PHM","PVH","QRVO","QCOM","PWR","DGX","RRC","RJF","RTN","O","RHT","REG","REGN","RF","RSG","RMD","RHI","ROK","COL","ROP","ROST","RCL","SPGI","CRM","SBAC","SCG","SLB","STX","SEE","SRE","SHW","SPG","SWKS","SLG","SNA","SO","LUV","SWK","SBUX","STT","SRCL","SYK","STI","SIVB","SYMC","SYF","SNPS","SYY","TROW","TTWO","TPR","TGT","TEL","FTI","TXN","TXT","BK","CLX","COO","HSY","MOS","TRV","DIS","TMO","TIF","TWX","TJX","TMK","TSS","TSCO","TDG","TRIP","FOXA","FOX","TSN","USB","UDR","ULTA","UAA","UA","UNP","UAL","UNH","UPS","URI","UTX","UHS","UNM","VFC","VLO","VAR","VTR","VRSN","VRSK","VZ","VRTX","VIAB","V","VNO","VMC","WMT","WBA","WM","WAT","WEC","WFC","WELL","WDC","WU","WRK","WY","WHR","WMB","WLTW","WYN","WYNN","XEL","XRX","XLNX","XL","XYL","YUM","ZBH","ZION","ZTS"];

var stocks = new Array(505);
var request = new XMLHttpRequest();
var URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=MMM,AOS,ABT,ABBV,ACN,ATVI,AYI,ADBE,AAP,AMD,AES,AET,AMG,AFL,A,APD,AKAM,ALK,ALB,ARE,ALXN,ALGN,ALLE,AGN,ADS,LNT,ALL,GOOGL,GOOG,MO,AMZN,AEE,AAL,AEP,AXP,AIG,AMT,AWK,AMP,ABC,AME,AMGN,APH,APC,ADI,ANDV,ANSS,ANTM,AON,APA,AIV,AAPL,AMAT,APTV,ADM,ARNC,AJG,AIZ,T,ADSK,ADP,AZO,AVB,AVY,BHGE,BLL,BAC,BAX,BBT,BDX,BRK.B,BBY,BIIB,BLK,HRB,BA,BKNG,BWA,BXP,BSX,BHF,BMY,AVGO,BF.B,CHRW,CA,COG,CDNS,CPB,COF,CAH,KMX,CCL,CAT,CBOE,CBRE,CBS,CELG,CNC,CNP&types=quote"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
request.open('GET', URL, true);
console.log("100");
request.onload = function() {

  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    console.log(stockData);
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
request = new XMLHttpRequest();
URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=CTL,CERN,CF,SCHW,CHTR,CVX,CMG,CB,CHD,CI,XEC,CINF,CTAS,CSCO,C,CFG,CTXS,CME,CMS,KO,CTSH,CL,CMCSA,CMA,CAG,CXO,COP,ED,STZ,GLW,COST,COTY,CCI,CSRA,CSX,CMI,CVS,DHI,DHR,DRI,DVA,DE,DAL,XRAY,DVN,DLR,DFS,DISCA,DISCK,DISH,DG,DLTR,D,DOV,DWDP,DPS,DTE,DUK,DRE,DXC,ETFC,EMN,ETN,EBAY,ECL,EIX,EW,EA,EMR,ETR,EVHC,EOG,EQT,EFX,EQIX,EQR,ESS,EL,RE,ES,EXC,EXPE,EXPD,ESRX,EXR,XOM,FFIV,FB,FAST,FRT,FDX,FIS,FITB,FE,FISV,FLIR,FLS,FLR,FMC,FL&types=quote"

request.open('GET', URL, true);
console.log("200");

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    console.log(stockData);
    for (var i = 100; i < 200; i++) {
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
setTimeout(doNothing, 80);
request.send();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
request = new XMLHttpRequest();
URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=F,FTV,FBHS,BEN,FCX,GPS,GRMN,IT,GD,GE,GGP,GIS,GM,GPC,GILD,GPN,GS,GT,GWW,HAL,HBI,HOG,HRS,HIG,HAS,HCA,HCP,HP,HSIC,HES,HPE,HLT,HOLX,HD,HON,HRL,HST,HPQ,HUM,HBAN,HII,IDXX,INFO,ITW,ILMN,INCY,IR,INTC,ICE,IBM,IP,IPG,IFF,INTU,ISRG,IVZ,IPGP,IQV,IRM,JBHT,JEC,SJM,JNJ,JCI,JPM,JNPR,KSU,K,KEY,KMB,KIM,KMI,KLAC,KSS,KHC,KR,LB,LLL,LH,LRCX,LEG,LEN,LUK,LLY,LNC,LKQ,LMT,L,LOW,LYB,MTB,MAC,M,MRO,MPC,MAR,MMC,MLM,MAS,MA&types=quote"

request.open('GET', URL, true);
console.log("300");

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    console.log(stockData);
    for (var i = 200; i < 300; i++) {
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
setTimeout(doNothing, 80);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

request = new XMLHttpRequest();
URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=MAT,MKC,MCD,MCK,MDT,MRK,MET,MTD,MGM,KORS,MCHP,MU,MSFT,MAA,MHK,TAP,MDLZ,MON,MNST,MCO,MS,MSI,MYL,NDAQ,NOV,NAVI,NKTR,NTAP,NFLX,NWL,NFX,NEM,NWSA,NWS,NEE,NLSN,NKE,NI,NBL,JWN,NSC,NTRS,NOC,NCLH,NRG,NUE,NVDA,ORLY,OXY,OMC,OKE,ORCL,PCAR,PKG,PH,PAYX,PYPL,PNR,PBCT,PEP,PKI,PRGO,PFE,PCG,PM,PSX,PNW,PXD,PNC,RL,PPG,PPL,PX,PFG,PG,PGR,PLD,PRU,PEG,PSA,PHM,PVH,QRVO,QCOM,PWR,DGX,RRC,RJF,RTN,O,RHT,REG,REGN,RF,RSG,RMD,RHI,ROK,COL,ROP&types=quote"

request.open('GET', URL, true);
console.log("400");

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    console.log(stockData);
    for (var i = 300; i < 400; i++) {
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
setTimeout(doNothing, 80);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
request = new XMLHttpRequest();
URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=ROST,RCL,SPGI,CRM,SBAC,SCG,SLB,STX,SEE,SRE,SHW,SPG,SWKS,SLG,SNA,SO,LUV,SWK,SBUX,STT,SRCL,SYK,STI,SIVB,SYMC,SYF,SNPS,SYY,TROW,TTWO,TPR,TGT,TEL,FTI,TXN,TXT,BK,CLX,COO,HSY,MOS,TRV,DIS,TMO,TIF,TWX,TJX,TMK,TSS,TSCO,TDG,TRIP,FOXA,FOX,TSN,USB,UDR,ULTA,UAA,UA,UNP,UAL,UNH,UPS,URI,UTX,UHS,UNM,VFC,VLO,VAR,VTR,VRSN,VRSK,VZ,VRTX,VIAB,V,VNO,VMC,WMT,WBA,WM,WAT,WEC,WFC,WELL,WDC,WU,WRK,WY,WHR,WMB,WLTW,WYN,WYNN,XEL,XRX,XLNX,XL&types=quote"

request.open('GET', URL, true);
console.log("500");

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var stockData = JSON.parse(this.response);
    console.log(stockData);
    for (var i = 400; i < 500; i++) {
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
  console.log(stocks[404].changePercent);

  request2 = new XMLHttpRequest();
  var NEWURL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=XYL,YUM,ZBH,ZION,ZTS&types=quote"

  request2.open('GET', NEWURL, true);
  console.log("500");

  request2.onload = function() {
    if (request2.status >= 200 && request2.status < 400) {
      var stockData = JSON.parse(this.response);
      console.log(stockData);
      for (var i = 500; i < 505; i++) {
        var stockobj = {
          changePercent: stockData[symbols[i]]["quote"]["changePercent"],
          price: stockData[symbols[i]]["quote"]["latestPrice"],
          companyName: stockData[symbols[i]]["quote"]["companyName"],
          symbol: symbols[i]
        };
        console.log(stockobj);
        stocks[i]=stockobj;
      }
    } else {
      console.log("bummer");
    }
    stocks.sort(function(a, b) {
      return b.changePercent - a.changePercent;
    });
    console.log(stocks);

// improve the below using a loop once you find a way to get the elegant solution to work
    document.getElementById("one").innerHTML = "Symbol: " + stocks[0].companyName + " change " + stocks[0].changePercent;
    document.getElementById("two").innerHTML = "Symbol: " + stocks[1].companyName + " change " + stocks[1].changePercent;
    document.getElementById("three").innerHTML = "Symbol: " + stocks[2].companyName + " change " + stocks[2].changePercent;
    document.getElementById("four").innerHTML = "Symbol: " + stocks[3].companyName + " change " + stocks[3].changePercent;
    document.getElementById("five").innerHTML = "Symbol: " + stocks[4].companyName + " change " + stocks[4].changePercent;
    document.getElementById("six").innerHTML = "Symbol: " + stocks[500].companyName + " change " + stocks[500].changePercent;
    document.getElementById("seven").innerHTML = "Symbol: " + stocks[501].companyName + " change " + stocks[501].changePercent;
    document.getElementById("eight").innerHTML = "Symbol: " + stocks[502].companyName + " change " + stocks[502].changePercent;
    document.getElementById("nine").innerHTML = "Symbol: " + stocks[503].companyName + " change " + stocks[503].changePercent;
    document.getElementById("ten").innerHTML = "Symbol: " + stocks[504].companyName + " change " + stocks[504].changePercent;

  }
  request2.send();
  function doNothing() {
  }
}
console.log(stocks[2]);
request.send();
setTimeout(doNothing, 100);
/////////////////////////////////////////////////////////////////////////////
// request = new XMLHttpRequest();
// URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=XYL,YUM,ZBH,ZION,ZTS&types=quote"
//
// request.open('GET', URL, true);
// console.log("500");
//
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     var stockData = JSON.parse(this.response);
//     console.log(stockData);
//     for (var i = 500; i < 505; i++) {
//       var stockobj = {
//         changePercent: stockData[symbols[i]]["quote"]["changePercent"],
//         price: stockData[symbols[i]]["quote"]["latestPrice"],
//         companyName: stockData[symbols[i]]["quote"]["companyName"]
//       };
//       console.log(stockobj);
//       stocks[i]=stockobj;
//     }
//   } else {
//     console.log("bummer");
//   }
//   stocks.sort(function(a, b) {
//     return b.changePercent - a.changePercent;
//   });
//   console.log(stocks);
//
// }
// request.send();
function doNothing() {
}

//////////////////////////////////////////////////////////////////////////
