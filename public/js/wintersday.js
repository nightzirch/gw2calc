$(document).ready(function() {
	listeners()
	updateItems();
});

var items = {
	"sock": {
		"name":"Ugly Wool Sock","description":"Ugly wool socks can be exchanged for other rewards at one of the Lionguard's gift-exchange representatives.","type":"Trophy","level":0,"rarity":"Basic","vendor_value":3,"game_types":["Activity","Dungeon","Pve","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38448,"icon":"https://render.guildwars2.com/file/A314E6A94A6AF4A8EB245F4E5C9DD6CEF62F5958/526314.png"
	},
	"hat": {
		"name":"Ugly Wool Hat","description":"Ugly wool hats can be exchanged for other rewards at one of the Lionguard's gift-exchange representatives.","type":"Trophy","level":0,"rarity":"Basic","vendor_value":14,"game_types":["Activity","Dungeon","Pve","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38449,"icon":"https://render.guildwars2.com/file/C53C16E4280A177204D8B1CC0E77107493ACD402/526315.png"
	},
	"sweater": {
		"name":"Ugly Wool Sweater","description":"Ugly wool sweaters can be exchanged for other rewards at one of the Lionguard's gift-exchange representatives.","type":"Trophy","level":0,"rarity":"Basic","vendor_value":26,"game_types":["Activity","Dungeon","Pve","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38450,"icon":"https://render.guildwars2.com/file/742AE9D5A062D4AE0E559C6993BAA5C4CC59DC2C/526316.png"
	},
	"glue": {
		"name":"Drop of Magic Glue","type":"Trophy","level":0,"rarity":"Masterwork","vendor_value":1,"game_types":["Activity","Dungeon","Pve","Wvw"],"flags":[],"restrictions":[],"id":38302,"icon":"https://render.guildwars2.com/file/250601FE36D69F0B3A3DA6BA06803BB0BC725806/526291.png"
	},
	"wad": {
		"name":"Wad of Enchanted Stuffing","type":"Trophy","level":0,"rarity":"Masterwork","vendor_value":1,"game_types":["Activity","Dungeon","Pve","Wvw"],"flags":[],"restrictions":[],"id":38301,"icon":"https://render.guildwars2.com/file/2802D4663E9A265B06214F5D2C345C7A77C725FD/526290.png"
	},
	"small": {
		"name":"Small Wintersday Gift","description":"Double-click to open.","type":"Container","level":0,"rarity":"Basic","vendor_value":11,"game_types":["Activity","Dungeon","Pve","PvpLobby","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38136,"icon":"https://render.guildwars2.com/file/420CE6DF804B1429750A115F9B6CEDA504A036F4/526220.png","details":{"type":"Default"}
	},
	"medium": {
		"name":"Medium Wintersday Gift","description":"Double-click to open.","type":"Container","level":0,"rarity":"Basic","vendor_value":18,"game_types":["Activity","Dungeon","Pve","PvpLobby","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38289,"icon":"https://render.guildwars2.com/file/420CE6DF804B1429750A115F9B6CEDA504A036F4/526220.png","details":{"type":"Default"}
	},
	"large": {
		"name":"Large Wintersday Gift","description":"Double-click to open.","type":"Container","level":0,"rarity":"Basic","vendor_value":25,"game_types":["Activity","Dungeon","Pve","PvpLobby","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38290,"icon":"https://render.guildwars2.com/file/420CE6DF804B1429750A115F9B6CEDA504A036F4/526220.png","details":{"type":"Default"}
	},
	"giant": {
		"name":"Giant Wintersday Gift","description":"Double-click to open.","type":"Container","level":0,"rarity":"Basic","vendor_value":32,"game_types":["Activity","Dungeon","Pve","PvpLobby","Wvw"],"flags":["NoSell"],"restrictions":[],"id":38291,"icon":"https://render.guildwars2.com/file/420CE6DF804B1429750A115F9B6CEDA504A036F4/526220.png","details":{"type":"Default"}
	}
}

function listeners() {
	$("#refresh").on("click", function(e) {
		// Set loading state
		$(this).button('loading');
		
		// Update items
		updateItems(true);
	});
}

function priceURL(id) {
	var baseURL = "https://api.guildwars2.com/v2/commerce/prices/";
	return baseURL + id;
}

function objectLength(obj) {
	var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

function updateItems(called) {
	// Create a new container for the new items
	var newItems = {
		"sock": null,
		"hat": null,
		"sweater": null,
		"glue": null,
		"wad": null,
		"small": null,
		"medium": null,
		"large": null,
		"giant": null
	};
	
	$.when(
        $.ajax({
            url: priceURL(items.sock.id),
            success: function(data) {
                $.extend(items.sock, data);
            }
        }),
        $.ajax({
            url: priceURL(items.hat.id),
            success: function(data) {
                $.extend(items.hat, data);
            }
        }),
        $.ajax({
            url: priceURL(items.sweater.id),
            success: function(data) {
                $.extend(items.sweater, data);
            }
        }),
		$.ajax({
            url: priceURL(items.glue.id),
            success: function(data) {
                $.extend(items.glue, data);
            }
        }),
		$.ajax({
            url: priceURL(items.wad.id),
            success: function(data) {
                $.extend(items.wad, data);
            }
        }),
        $.ajax({
            url: priceURL(items.small.id),
            success: function(data) {
                $.extend(items.small, data);
            }
        }),
        $.ajax({
            url: priceURL(items.medium.id),
            success: function(data) {
                $.extend(items.medium, data);
            }
        }),
        $.ajax({
            url: priceURL(items.large.id),
            success: function(data) {
                $.extend(items.large, data);
            }
        }),
		$.ajax({
            url: priceURL(items.giant.id),
            success: function(data) {
                $.extend(items.giant, data);
            }
        })
    ).then( function(){
        // All complete
		// Remove loading indication
		$("h1#text-loading").remove();
		
		// Show reload button
		$("a.btn").removeClass("hidden");
		
		// Lets present the data
		generateTable(called);
    });
}

function formatPrice(price) {
	var fullPrice = "";
	price = price.toString();
	
	if(price.length < 3) {
		fullPrice = price + "c";
	}
	else if (price.length > 2 && price.length < 5) {
		var mid = 2 - (price.length % 2);
		fullPrice = price.substr(-4, mid) + "s " + price.substr(-2) + "c";
	}
	else if (price.length > 4) {
		fullPrice = price.substr(0, price.length-4) + "g " + price.substr(-4, 2) + "s " + price.substr(-2) + "c";
	}
	
	return fullPrice;
}

function generateTable(called) {
	var sock = items.sock.sells.unit_price,
		smallSock = sock * 8,
		mediumSock = sock * 10,
		largeSock = sock * 12,
		giantSock = sock * 30,
		hat = items.hat.sells.unit_price,
		smallHat = hat * 5,
		mediumHat = hat * 8,
		largeHat = hat * 10,
		giantHat = hat * 15,
		sweater = items.sweater.sells.unit_price,
		smallSweater = sweater * 3,
		mediumSweater = sweater * 6,
		largeSweater = sweater * 8,
		giantSweater = sweater * 2,
		glue = items.glue.sells.unit_price,
		giantGlue = glue * 10,
		wad = items.wad.sells.unit_price,
		giantWad = wad * 10,
		small = items.small.sells.unit_price,
		medium = items.medium.sells.unit_price,
		large = items.large.sells.unit_price,
		giant = items.giant.sells.unit_price;
	
	var table =	'<tr><td></td><td class="hidden"><img class="icon" src="' + items.small.icon + '" /> <strong>Small Wintersday Gift</strong> (' + formatPrice(small)+ ')</td>'+
				'<td class="hidden"><img class="icon" src="' + items.medium.icon + '" /> <strong>Medium Wintersday Gift</strong> (' + formatPrice(medium)+ ')</td>' +
				'<td class="hidden"><img class="icon" src="' + items.large.icon + '" /> <strong>Large Wintersday Gift</strong> (' + formatPrice(large) + ')</td>' +
				'<td><img class="icon" src="' + items.giant.icon + '" /> <strong>Giant Wintersday Gift</strong> (' + formatPrice(giant) + ')</td></tr>' +
			
				'<tr><td><img class="icon" src="' + items.sock.icon + '" /> <strong>Ugly Socks</strong> (' + formatPrice(sock)+ ')</td><td class="hidden">' +
				formatPrice(smallSock) + ' (' + formatPrice(small - smallSock) + ' / ' + Math.round(((small - smallSock)/smallSock) * 100 ) + '% profit)</td><td class="hidden">' + 
				formatPrice(mediumSock) + ' (' + formatPrice(medium - mediumSock) + ' / ' + Math.round(((medium - mediumSock)/mediumSock) * 100 ) + '% profit)</td><td class="hidden">' + 
				formatPrice(largeSock) + ' (' + formatPrice(large - largeSock) + ' / ' + Math.round(((large - largeSock)/largeSock) * 100 ) + '% profit)</td><td>'+
				formatPrice(giantSock) + ' (' + formatPrice(giant - giantSock) + ' / ' + Math.round(((giant - giantSock)/giantSock) * 100 ) + '% profit)</td></tr>' +
				
				'<tr><td><img class="icon" src="' + items.hat.icon + '" /> <strong>Ugly Hats</strong> (' + formatPrice(hat)+ ')</td><td class="hidden">' + 
				formatPrice(smallHat) + ' (' + formatPrice(small - smallHat) + ' / ' + Math.round(((small - smallHat)/smallHat) * 100 ) + '% profit)</td><td class="hidden">' + 
				formatPrice(mediumHat) + ' (' + formatPrice(medium - mediumHat) + ' / ' + Math.round(((medium - mediumHat)/mediumHat) * 100 ) + '% profit)</td><td class="hidden">' + 
				formatPrice(largeHat) + ' (' + formatPrice(large - largeHat) + ' / ' + Math.round(((large - largeHat)/largeHat) * 100 ) + '% profit)</td><td>' +
				formatPrice(giantHat) + ' (' + formatPrice(giant - giantHat) + ' / ' + Math.round(((giant - giantHat)/giantHat) * 100 ) + '% profit)</td></tr>' +
			
				'<tr><td><img class="icon" src="' + items.sweater.icon + '" /> <strong>Ugly Sweaters</strong> (' + formatPrice(sweater) + ')</td><td class="hidden">' + 
				formatPrice(smallSweater) + ' (' + formatPrice(small - smallSweater) + ' / ' + Math.round(((small - smallSweater)/smallSweater) * 100 ) + '% profit)</td><td class="hidden">' + 
				formatPrice(mediumSweater) + ' (' + formatPrice(medium - mediumSweater) + ' / ' + Math.round(((medium - mediumSweater)/mediumSweater) * 100 ) + '% profit)</td><td class="hidden">' + 
				formatPrice(largeSweater) + ' (' + formatPrice(large - largeSweater) + ' / ' + Math.round(((large - largeSweater)/largeSweater) * 100 ) + '% profit)</td><td>' +
				formatPrice(giantSweater) + ' (' + formatPrice(giant - giantSweater) + ' / ' + Math.round(((giant - giantSweater)/giantSweater) * 100 ) + '% profit)</td></tr>' +
		
				'<tr><td><img class="icon" src="' + items.glue.icon + '" /> <strong>Drop of Magic Glue</strong> (' + formatPrice(glue) + ')</td><td class="hidden">' +
				'</td><td class="hidden">' + 
				'</td><td class="hidden">' + 
				'</td><td>' + 
				formatPrice(giantGlue) + ' (' + formatPrice(giant - giantGlue) + ' / ' + Math.round(((giant - giantGlue)/giantGlue) * 100 ) + '% profit)</td></tr class="hidden">' +
		
				'<tr><td><img class="icon" src="' + items.wad.icon + '" /> <strong>Wad of Enchanted Stuffing</strong> (' + formatPrice(wad) + ')</td><td class="hidden">' +
				'</td><td class="hidden">' + 
				'</td><td class="hidden">' + 
				'</td><td>' + 
				formatPrice(giantWad) + ' (' + formatPrice(giant - giantWad) + ' / ' + Math.round(((giant - giantWad)/giantWad) * 100 ) + '% profit)</td></tr>';
	
	$("#table")[0].innerHTML = table;
	
	// If this function was called
	if(called) {
		// Reset state of refresh button
		var btn = $("#refresh");
		
		setTimeout(function() {
			btn[0].innerHTML = "Done refreshing";
		},1);
		
		setTimeout(function() {
			$(btn).button('reset');
		},1000);
	}
}