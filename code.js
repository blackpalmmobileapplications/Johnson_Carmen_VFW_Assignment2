/* Carmen Johnson
   Deliverable 2
   VFW Online
   6/7/2012
*/
 var itemsArray = [];						// GLOBAL VARIABLE
var items = 0;								// GLOBAL VARIABLE
var el = function(arg) { 					// METHOD FUNCTION
	return document.getElementById(arg); 	// RETURN OBJECT
};

window.onload = function() {
	el('button').setAttribute('onclick', 'validate();');
	el('clearButton').setAttribute('onclick', 'clearlist();');
};

// GLOBAL VARIABLE
var shelter = [ "tent", "ground cloth", "ground tarp", "extra stakes", "shade", "shade poles", "shade rope", "shade stakes", "axe",
				"hammer", "mat", "dust pan", "Dust brush" ];

// GLOBAL VARIABLE
var bedding = [ "sleeping bag", "sheets", "blankets", "pillow", "air mattress", "sleeping pad", "cot", "tarp", "air pump", "repair kit for air mattress",
				"utility bags for storage" ];

// GLOBAL VARIABLE
var cooking = [ "large water jug", "water bucket", "coolers", "ice", "thermos", "stove", "stove with fuel", "stove with propane", "matches",
				"lighter", "charcoal", "firewood", "buddy burner", "oven", "tin can", "box oven", "campfire grill", "barbeque grill",
				"fire starters", "newspapers", "tablecloth", "thumb tacks", "clips", "plates", "bowls", "paper plates", "paper bowls", "silverware",
				"plastic silverware", "measuring cups", "aluminium foil", "paper towels", "trash bags", "dish soap", "cloth pins", "cooking oil",
				"pam spray", "containers", "pot holders", "oven mitts", "pots", "frying pans", "pan lids", "soap", "tongs", "skewers", "grill forks",
				"can opener", "bottle opener", "folding table", "dutch oven", "pie irons", "mugs", "paper cups", "mixing bowls", "cutting board",
				"ziplock bags", "napkins", "dish pan", "dish rag", "towels", "scrub pad", "brillo", "seasonings", "sugar", "condiments", "potato peeler"];

// GLOBAL VARIABLE
var clothing = ["shoes", "boots", "jeans", "pants", "shirts", "belts", "t-shirts", "socks", "hat", "bandana", "sweatshirt", "underwear", "raincoat"];

// GLOBAL VARIABLE
var firstaid = ["medicine", "bandages", "adhesive tape", "antiseptic" ,"cotton", "tweezers", "scissors", "tissues", "sunscreen"];

// GLOBAL VARIABLE
var miscellaneous = ["funds", "games", "mp3 player", "gps", "books", "radio"];

function para(field, val) {																			// METHOD FUNCTION
	return "<p>" + "<strong>" + field + ": </strong>" + val + "</p>";								// RETURN STRING
}
  