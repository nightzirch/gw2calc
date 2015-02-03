$(document).ready(function() {
	// Activates knockout.js
	dungeoneer.vm = new DungeoneerModel();
	ko.applyBindings(dungeoneer.vm);
	
	// Activate listeners
	dungeoneer.listeners.all();
	
	// Hmmm... Where were we again?
	dungeoneer.storage.get();
});

var dungeoneer = {
	"vm": null,
	"newOrder": function(array, order) {
		var newItems = new Array();
		for(var i = 0; i < order.length; i++) {
			newItems.push(array[order[i]]);
		}

		return JSON.stringify(newItems);
	},
	"listeners": {
		"all": function() {
			dungeoneer.listeners.dailyPaths();
			dungeoneer.listeners.dungeonGear();
			dungeoneer.listeners.dungeonGearAll();
			dungeoneer.listeners.save();
			dungeoneer.listeners.delete();
			dungeoneer.listeners.copy();
		},
		"dailyPaths": function() {
			$(".dungeon-daily input[type=checkbox]").parent().on("click", function() {
				dungeoneer.dailyPaths.update();
			});
		},
		"dungeonGear": function() {
			$(".dungeon-gear:not(.collect-all)").on("click", function() {
				// Find the cost of the item clicked and the tokensCollected
				var shortname = $(this).attr("data-shortname");
				var cost = parseInt($(this).attr("data-cost"));
				var collected = parseInt(dungeoneer.vm.tokensCollected[shortname]());

				if(!$(this).hasClass("collected")) {
					// If this does not have .collected
					$(this).addClass("collected");
					
					// Check if everything is collected
					var notCollected = $("#dungeon-gear-container-" + shortname + " .dungeon-gear:not(.collected):not(.collect-all)");
					if(notCollected.length == 0) {
						// Everything is collected. Time to make sure "Collect all" button is aware
						$("#dungeon-gear-container-" + shortname + " .dungeon-gear.collect-all").addClass("selected");
					}

					// Add cost to total
					dungeoneer.vm.tokensCollected[shortname](collected+cost);
				}
				else {
					// If this have .collected
					$(this).removeClass("collected");
					
					// Check if the Collect All button has .selected
					$(".dungeon." + shortname + " .dungeon-gear.collect-all").removeClass("selected");

					// Remove cost from total
					dungeoneer.vm.tokensCollected[shortname](collected-cost);
				}
			});
		},
		"dungeonGearAll": function() {
			$(".dungeon-gear.collect-all").on("click", function() {
				// Find the cost of the item clicked and the tokensCollected
				var shortname = $(this).attr("data-shortname");
				
				if(!$(this).hasClass("selected")) {
					// If not everything is collected
					$(".dungeon." + shortname + " .dungeon-gear:not(.collect-all):not(.collected)").trigger("click");
					
					$(this).addClass("selected");
				}
				else {
					// If this is selected and everything is collected
					$(".dungeon." + shortname + " .dungeon-gear:not(.collect-all)").trigger("click");
					
					$(this).removeClass("selected");
				}
				
			});
		},
		"save": function() {
			$(".btn-save").on("click", function() {
				// Call operator for storage
				dungeoneer.storage.set();
				
				// Set loading state
				dungeoneer.buttonLoading($(this), "Saved");
				
			});
		},
		"delete": function() {
			$(".btn-delete").on("click", function() {
				// Call operator for deletion
				dungeoneer.storage.clear();
				
				// Reset the daily paths
				dungeoneer.dailyPaths.reset();
				
				// Reset all tokens...
				dungeoneer.vm.tokens["ac"](0);
				dungeoneer.vm.tokens["cm"](0);
				dungeoneer.vm.tokens["ta"](0);
				dungeoneer.vm.tokens["se"](0);
				dungeoneer.vm.tokens["cof"](0);
				dungeoneer.vm.tokens["hotw"](0);
				dungeoneer.vm.tokens["coe"](0);
				dungeoneer.vm.tokens["arah"](0);
				
				// ...and all collected items
				$(".dungeon-gear.collected").trigger("click");
				
				// Set loading state
				dungeoneer.buttonLoading($(this), "Done");
			});
		},
		"copy": function() {
			$(".btn-copy").on("click", function() {				
				// Set loading state
				dungeoneer.buttonLoading($(this), "Copied");
			});
		}
	},
	"dailyPaths": {
		"reset": function() {
			var checkboxes = $(".dungeon-daily input[type=checkbox]");
			for(var i = 0; i < checkboxes.length; i++) {
				$(checkboxes[i]).attr("checked", true);
				$(checkboxes[i]).parent().addClass("active");
			}
			
			dungeoneer.dailyPaths.update();
		},
		"update": function() {
			setTimeout(function() {
				// First, let's reset some numbers.
				var dungeons = ["ac","cm","ta","se","cof","hotw","coe","arah"];
				var dailyPaths = dungeoneer.vm.dailyPaths;

				for(var i = 0; i < dungeons.length; i++) {
					dailyPaths[dungeons[i]](0);
				}

				// Next, we need to go through the checkboxes and see what's clicked
				var checkboxes = $(".dungeon-daily input[type=checkbox]");
				for(var i = 0; i < checkboxes.length; i++) {
					if(checkboxes[i].checked) {
						var shortname = $(checkboxes[i]).attr("data-shortname");
						var value = dailyPaths[shortname]();
						value++;

						dailyPaths[shortname](value);
					}
				}
			}, 1);
		}
	},
	"storage": {
		"set": function() {
			// How many tokens do we have?
			var tokens = {
				"ac": dungeoneer.vm.tokens["ac"](),
				"cm": dungeoneer.vm.tokens["cm"](),
				"ta": dungeoneer.vm.tokens["ta"](),
				"se": dungeoneer.vm.tokens["se"](),
				"cof": dungeoneer.vm.tokens["cof"](),
				"hotw": dungeoneer.vm.tokens["hotw"](),
				"coe": dungeoneer.vm.tokens["coe"](),
				"arah": dungeoneer.vm.tokens["arah"]()
			}
			
			// Which paths do we do daily?
			var daily = {
				"ac": [],
				"cm": [],
				"ta": [],
				"se": [],
				"cof": [],
				"hotw": [],
				"coe": [],
				"arah": []
			}
			
			// Which items have we collected?
			var collected = {
				"ac": [],
				"cm": [],
				"ta": [],
				"se": [],
				"cof": [],
				"hotw": [],
				"coe": [],
				"arah": []
			}
			
			var dailyPaths = $(".dungeon-daily input[type=checkbox]");
			for (var i = 0; i < dailyPaths.length; i++) {
				var checkbox = $(dailyPaths)[i];
				var dungeon = $(checkbox).attr("data-shortname");
				var path = $(checkbox).attr("value");
				var checked = checkbox.checked;
				
				daily[dungeon][path-1] = checked;
			}
			
			var collectedItems = $(".dungeon-gear.collected");
			for (var i = 0; i < collectedItems.length; i++) {
				var item = $(collectedItems)[i];
				var dungeon = $(item).attr("data-shortname");
				var number = $(item).attr("data-gear-number");
				
				collected[dungeon].push(number);
			}
			
			// Stringify and save in localStorage
			localStorage.setItem("tokens", JSON.stringify(tokens));
			localStorage.setItem("daily", JSON.stringify(daily));
			localStorage.setItem("collected", JSON.stringify(collected));
		},
		"get": function() {
			// First check if the data exists for the tokens
			if(localStorage.getItem("tokens") != null){
				// Get the values from localStorage
				var tokens = JSON.parse(localStorage.getItem("tokens"));

				// So, remind me again how many tokens we have?
				dungeoneer.vm.tokens["ac"](tokens["ac"]);
				dungeoneer.vm.tokens["cm"](tokens["cm"]);
				dungeoneer.vm.tokens["ta"](tokens["ta"]);
				dungeoneer.vm.tokens["se"](tokens["se"]);
				dungeoneer.vm.tokens["cof"](tokens["cof"]);
				dungeoneer.vm.tokens["hotw"](tokens["hotw"]);
				dungeoneer.vm.tokens["coe"](tokens["coe"]);
				dungeoneer.vm.tokens["arah"](tokens["arah"]);
			}
			
			// Then, let's do the same for daily paths
			if(localStorage.getItem("daily") != null){
				// Get the values from localStorage
				var daily = JSON.parse(localStorage.getItem("daily"));
				
				// What do we do with them exactly?
				var dungeons = ["ac","cm","ta","se","cof","hotw","coe","arah"];
				for (var i = 0; i < dungeons.length; i++) {
					for (var y = 0; y < daily[dungeons[i]].length; y++) {
						var dungeon = dungeons[i];
						var checked = daily[dungeon][y];
						var path = y+1;
						
						// Lets check that sucker
						if(checked) {
							$(".dungeon-daily #daily-" + dungeon + "-" + path).attr("checked", true).parent().addClass("active");
						}
					}
				}
				
				dungeoneer.dailyPaths.update();
			} else {
				dungeoneer.dailyPaths.reset();
			}
			
			// And lastly, collected items
			if(localStorage.getItem("collected") != null){
				// Get the values from localStorage
				var collected = JSON.parse(localStorage.getItem("collected"));
				
				// Nice! What about the items?
				var dungeons = ["ac","cm","ta","se","cof","hotw","coe","arah"];
				for (var i = 0; i < dungeons.length; i++) {
					for (var y = 0; y < collected[dungeons[i]].length; y++) {
						$(".dungeon-gear-" + dungeons[i] + "[data-gear-number=" + collected[dungeons[i]][y] + "]").trigger("click");
					}
					
					// Check if everything is collected
					var notCollected = $(".dungeon-gear-"  + dungeons[i] + ":not(.collected)");
					if (notCollected.length == 0) {
						// If you have collected everything, let's hide the container
						$("#dungeon-gear-container-" + dungeons[i]).removeClass("in");
					}
				}
			}
		},
		"clear": function() {
			localStorage.removeItem("tokens");
			localStorage.removeItem("collected");
		}
	},
	"buttonLoading": function(btn, textFinished) {
		// Set loading state
		$(btn).button('loading');

		setTimeout(function() {
			btn[0].innerHTML = textFinished;
		},1);

		setTimeout(function() {
			$(btn).button('reset');
		},1000);
	}
}

var user = {
	"tokens": {
		"ac": null,
		"cm": null,
		"ta": null,
		"se": null,
		"cof": null,
		"hotw": null,
		"coe": null,
		"arah": null
	},
	"daily": {
		"ac": [],
		"cm": [],
		"ta": [],
		"se": [],
		"cof": [],
		"hotw": [],
		"coe": [],
		"arah": []
	},
	"collected": {
		"ac": [],
		"cm": [],
		"ta": [],
		"se": [],
		"cof": [],
		"hotw": [],
		"coe": [],
		"arah": []
	}
}













