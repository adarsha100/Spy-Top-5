var symbols = ["MMM","AOS","ABT","ABBV","ACN","ATVI","AYI","ADBE","AAP","AMD","AES","AET","AMG","AFL","A","APD","AKAM","ALK","ALB","ARE","ALXN","ALGN","ALLE","AGN","ADS","LNT","ALL","GOOGL","GOOG","MO","AMZN","AEE","AAL","AEP","AXP","AIG","AMT","AWK","AMP","ABC","AME","AMGN","APH","APC","ADI","ANDV","ANSS","ANTM","AON","APA","AIV","AAPL","AMAT","APTV","ADM","ARNC","AJG","AIZ","T","ADSK","ADP","AZO","AVB","AVY","BHGE","BLL","BAC","BAX","BBT","BDX","BRK.B","BBY","BIIB","BLK","HRB","BA","BKNG","BWA","BXP","BSX","BHF","BMY","AVGO","BF.B","CHRW","CA","COG","CDNS","CPB","COF","CAH","KMX","CCL","CAT","CBOE","CBRE","CBS","CELG","CNC","CNP","CTL","CERN","CF","SCHW","CHTR","CVX","CMG","CB","CHD","CI","XEC","CINF","CTAS","CSCO","C","CFG","CTXS","CME","CMS","KO","CTSH","CL","CMCSA","CMA","CAG","CXO","COP","ED","STZ","GLW","COST","COTY","CCI","CSRA","CSX","CMI","CVS","DHI","DHR","DRI","DVA","DE","DAL","XRAY","DVN","DLR","DFS","DISCA","DISCK","DISH","DG","DLTR","D","DOV","DWDP","DPS","DTE","DUK","DRE","DXC","ETFC","EMN","ETN","EBAY","ECL","EIX","EW","EA","EMR","ETR","EVHC","EOG","EQT","EFX","EQIX","EQR","ESS","EL","RE","ES","EXC","EXPE","EXPD","ESRX","EXR","XOM","FFIV","FB","FAST","FRT","FDX","FIS","FITB","FE","FISV","FLIR","FLS","FLR","FMC","FL","F","FTV","FBHS","BEN","FCX","GPS","GRMN","IT","GD","GE","GGP","GIS","GM","GPC","GILD","GPN","GS","GT","GWW","HAL","HBI","HOG","HRS","HIG","HAS","HCA","HCP","HP","HSIC","HES","HPE","HLT","HOLX","HD","HON","HRL","HST","HPQ","HUM","HBAN","HII","IDXX","INFO","ITW","ILMN","INCY","IR","INTC","ICE","IBM","IP","IPG","IFF","INTU","ISRG","IVZ","IPGP","IQV","IRM","JBHT","JEC","SJM","JNJ","JCI","JPM","JNPR","KSU","K","KEY","KMB","KIM","KMI","KLAC","KSS","KHC","KR","LB","LLL","LH","LRCX","LEG","LEN","LUK","LLY","LNC","LKQ","LMT","L","LOW","LYB","MTB","MAC","M","MRO","MPC","MAR","MMC","MLM","MAS","MA","MAT","MKC","MCD","MCK","MDT","MRK","MET","MTD","MGM","KORS","MCHP","MU","MSFT","MAA","MHK","TAP","MDLZ","MON","MNST","MCO","MS","MSI","MYL","NDAQ","NOV","NAVI","NKTR","NTAP","NFLX","NWL","NFX","NEM","NWSA","NWS","NEE","NLSN","NKE","NI","NBL","JWN","NSC","NTRS","NOC","NCLH","NRG","NUE","NVDA","ORLY","OXY","OMC","OKE","ORCL","PCAR","PKG","PH","PAYX","PYPL","PNR","PBCT","PEP","PKI","PRGO","PFE","PCG","PM","PSX","PNW","PXD","PNC","RL","PPG","PPL","PX","PFG","PG","PGR","PLD","PRU","PEG","PSA","PHM","PVH","QRVO","QCOM","PWR","DGX","RRC","RJF","RTN","O","RHT","REG","REGN","RF","RSG","RMD","RHI","ROK","COL","ROP","ROST","RCL","SPGI","CRM","SBAC","SCG","SLB","STX","SEE","SRE","SHW","SPG","SWKS","SLG","SNA","SO","LUV","SWK","SBUX","STT","SRCL","SYK","STI","SIVB","SYMC","SYF","SNPS","SYY","TROW","TTWO","TPR","TGT","TEL","FTI","TXN","TXT","BK","CLX","COO","HSY","MOS","TRV","DIS","TMO","TIF","TWX","TJX","TMK","TSS","TSCO","TDG","TRIP","FOXA","FOX","TSN","USB","UDR","ULTA","UAA","UA","UNP","UAL","UNH","UPS","URI","UTX","UHS","UNM","VFC","VLO","VAR","VTR","VRSN","VRSK","VZ","VRTX","VIAB","V","VNO","VMC","WMT","WBA","WM","WAT","WEC","WFC","WELL","WDC","WU","WRK","WY","WHR","WMB","WLTW","WYN","WYNN","XEL","XRX","XLNX","XL","XYL","YUM","ZBH","ZION","ZTS"];

var stocks = new Array(505);
var components;
var request;
var URL;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for(int k=0; k<5; k++) {
  components = symbols.slice(k*100,k*100+100)
  URL = "https://api.iextrading.com/1.0/stock/market/batch?symbols=" + components +"&types=quote"
  request = new XMLHttpRequest();
  request.open('GET', URL, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var stockData = JSON.parse(this.response);
      console.log(stockData);
      for (var i = 0; i < 505; i++) {
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
}

















// request.open('GET', URL, true);
// console.log("100");
// request.onload = function() {
//
//   if (request.status >= 200 && request.status < 400) {
//     var stockData = JSON.parse(this.response);
//     console.log(stockData);
//     for (var i = 0; i < 100; i++) {
//       var stockobj = {
//         changePercent: stockData[symbols[i]]["quote"]["changePercent"],
//         price: stockData[symbols[i]]["quote"]["latestPrice"],
//         companyName: stockData[symbols[i]]["quote"]["companyName"]
//       };
//       stocks[i]=stockobj;
//     }
//   } else {
//     console.log("bummer");
//   }
//   console.log(stocks);
// }
