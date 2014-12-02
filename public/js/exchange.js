//var exchangeURL = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("USDEUR", "USDJPY", "USDBGN", "USDCZK", "USDDKK", "USDGBP", "USDHUF", "USDLTL", "USDLVL", "USDPLN", "USDRON", "USDSEK", "USDCHF", "USDNOK", "USDHRK", "USDRUB", "USDTRY", "USDAUD", "USDBRL", "USDCAD", "USDCNY", "USDHKD", "USDIDR", "USDILS", "USDINR", "USDKRW", "USDMXN", "USDMYR", "USDNZD", "USDPHP", "USDSGD", "USDTHB", "USDZAR", "USDISK")&format=json&env=store://datatables.org/alltableswithkeys';

var rates = {};
var exchangeURL = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("USDAED", "USDAFN", "USDALL", "USDAMD", "USDANG", "USDAOA", "USDARS", "USDAUD", "USDAWG", "USDAZN", "USDBAM", "USDBBD", "USDBDT", "USDBGN", "USDBHD", "USDBIF", "USDBMD", "USDBND", "USDBOB", "USDBRL", "USDBSD", "USDBTC", "USDBTN", "USDBWP", "USDBYR", "USDBZD", "USDCAD", "USDCDF", "USDCHF", "USDCLF", "USDCLP", "USDCNY", "USDCOP", "USDCRC", "USDCUP", "USDCVE", "USDCZK", "USDDJF", "USDDKK", "USDDOP", "USDDZD", "USDEEK", "USDEGP", "USDERN", "USDETB", "USDEUR", "USDFJD", "USDFKP", "USDGBP", "USDGEL", "USDGGP", "USDGHS", "USDGIP", "USDGMD", "USDGNF", "USDGTQ", "USDGYD", "USDHKD", "USDHNL", "USDHRK", "USDHTG", "USDHUF", "USDIDR", "USDILS", "USDIMP", "USDINR", "USDIQD", "USDIRR", "USDISK", "USDJEP", "USDJMD", "USDJOD", "USDJPY", "USDKES", "USDKGS", "USDKHR", "USDKMF", "USDKPW", "USDKRW", "USDKWD", "USDKYD", "USDKZT", "USDLAK", "USDLBP", "USDLKR", "USDLRD", "USDLSL", "USDLTL", "USDLVL", "USDLYD", "USDMAD", "USDMDL", "USDMGA", "USDMKD", "USDMMK", "USDMNT", "USDMOP", "USDMRO", "USDMTL", "USDMUR", "USDMVR", "USDMWK", "USDMXN", "USDMYR", "USDMZN", "USDNAD", "USDNGN", "USDNIO", "USDNOK", "USDNPR", "USDNZD", "USDOMR", "USDPAB", "USDPEN", "USDPGK", "USDPHP", "USDPKR", "USDPLN", "USDPYG", "USDQAR", "USDRON", "USDRSD", "USDRUB", "USDRWF", "USDSAR", "USDSBD", "USDSCR", "USDSDG", "USDSEK", "USDSGD", "USDSHP", "USDSLL", "USDSOS", "USDSRD", "USDSTD", "USDSVC", "USDSYP", "USDSZL", "USDTHB", "USDTJS", "USDTMT", "USDTND", "USDTOP", "USDTRY", "USDTTD", "USDTWD", "USDTZS", "USDUAH", "USDUGX", "USDUSD", "USDUYU", "USDUZS", "USDVEF", "USDVND", "USDVUV", "USDWST", "USDXAF", "USDXAG", "USDXAU", "USDXCD", "USDXDR", "USDXOF", "USDXPF", "USDYER", "USDZAR", "USDZMK", "USDZMW", "USDZWL")&format=json&env=store://datatables.org/alltableswithkeys';

var currencyNames = {};
var currencyNamesURL = "http://openexchangerates.org/api/currencies.json";


$(document).ready(function() {
	$.getJSON(
        exchangeURL,
        function(data) {
            parseCurrencies(data);
        }
    );
	
	$.getJSON(
        currencyNamesURL,
        function(data) {
            currencyNames = data;
			console.log("Currency names loaded");
			populateCurrency();
        }
    );
});

function parseCurrencies(data) {
	var ratesRaw = data.query.results.rate;
	
	for (var i = 0; i < ratesRaw.length; i++) {
		rates[ratesRaw[i].id.substr(3)] = ratesRaw[i].Rate;
	}
	
	// Check money.js has finished loading:
	if (typeof fx !== "undefined" && fx.rates) {
		fx.base = "USD";
		fx.rates = rates;
	} else {
		// If not, apply to fxSetup global:
		var fxSetup = {
			base: "USD",
			rates: rates
		}
	}
	
	console.log("Currencies loaded");
}

function populateCurrency() {
	// Lets find our friend
	var select = $("#currency");
	
	// Enable it
	$(select).removeAttr("disabled");
	
	// Remove the loading text
	$(select).find("option").first().remove();
	
	// Sort names alphabetically
	// But first we need to make a new array
	var currencies = new Array();
	for (var key in currencyNames) {
		currencies.push({id: key, name: currencyNames[key]});
	}
	console.log(currencies);
	
	// Now sort them
	currencies.sort(function(a,b) {
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
		return 0;
	});
	
	// Fill it up with goodness
	for (var i in currencies) {
		$(select).append('<option value="' + currencies[i].id + '">' + currencies[i].name + '</option>');
	}
	
	// Move USD, EUR and GBP to the top
	var USD = $(select).find("option[value=USD]");
	var EUR = $(select).find("option[value=EUR]");
	var GBP = $(select).find("option[value=GBP]");
	$(select).prepend(GBP);
	$(select).prepend(EUR);
	$(select).prepend(USD);
}
















