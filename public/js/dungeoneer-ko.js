function DungeoneerModel() {
	var self = this;
	var maxTokens = 10290;
	
	// Dungeon Tokens collected
	self.tokens = new Array();
	self.tokens["ac"] = ko.observable(0);
    self.tokens["cm"] = ko.observable(0);
    self.tokens["ta"] = ko.observable(0);
    self.tokens["se"] = ko.observable(0);
    self.tokens["cof"] = ko.observable(0);
    self.tokens["hotw"] = ko.observable(0);
    self.tokens["coe"] = ko.observable(0);
    self.tokens["arah"] = ko.observable(0);
	
	// Dungeon Tokens worth of equipment
	self.tokensCollected = new Array();
	self.tokensCollected["ac"] = ko.observable(0);
    self.tokensCollected["cm"] = ko.observable(0);
    self.tokensCollected["ta"] = ko.observable(0);
    self.tokensCollected["se"] = ko.observable(0);
    self.tokensCollected["cof"] = ko.observable(0);
    self.tokensCollected["hotw"] = ko.observable(0);
    self.tokensCollected["coe"] = ko.observable(0);
    self.tokensCollected["arah"] = ko.observable(0);
	
	// Dungeon Tokens left
	self.tokensLeft = new Array();
	self.tokensLeft["ac"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["ac"]()) + parseInt(self.tokensCollected["ac"]()));
	});
    self.tokensLeft["cm"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["cm"]()) + parseInt(self.tokensCollected["cm"]()));
	});
    self.tokensLeft["ta"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["ta"]()) + parseInt(self.tokensCollected["ta"]()));
	});
    self.tokensLeft["se"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["se"]()) + parseInt(self.tokensCollected["se"]()));
	});
    self.tokensLeft["cof"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["cof"]()) + parseInt(self.tokensCollected["cof"]()));
	});
    self.tokensLeft["hotw"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["hotw"]()) + parseInt(self.tokensCollected["hotw"]()));
	});
    self.tokensLeft["coe"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["coe"]()) + parseInt(self.tokensCollected["coe"]()));
	});
    self.tokensLeft["arah"] = ko.computed(function() {
		return maxTokens - (parseInt(self.tokens["arah"]()) + parseInt(self.tokensCollected["arah"]()));
	});
}