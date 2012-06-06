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

function clearForm() {																				// METHOD FUNCTION
	el('name').value = "";																			// MATH
	el('quantity').value = "1";																		// MATH
	el('comments').value = "";																		// MATH
	el('date').value = "";
	el('important').checked = false;
}

function display() {																						// METHOD FUNCTION
	var text = "";																							// LOCAL VARIABLE
	var len = itemsArray.length;																			// LOCAL VARIABLE & MATH
	
	for (i=0; i<len; i++) {																					// FOR LOOP
		text += "<div class='listitem'>" + 																	// MATH - (multi line statement)
				para("Category", itemsArray[i]['category']) + 
				para("Name", itemsArray[i]['name']) + 
				para("Quantity", itemsArray[i]['quantity']) + 
				para("Purchase By", itemsArray[i]['date']) +
				para("Important", itemsArray[i]['important']) +
				para("Comments", itemsArray[i]['comments']) + 
				"<a class='button' onclick='deleteItem("+ itemsArray[i]['idno'] +");'>Delete Item</a>" +
				"<a class='button' onclick='editItem("+ itemsArray[i]['idno'] +");'>Edit Item</a>" + 
				"</div>";
	}
	el('listbox').innerHTML = text;																			// MATH
}

var update = function() {																					// METHOD FUNCTION
	// LOCAL VARIABLE
	var obj = { category:el('category').value, name:el('name').value, 
				quantity:el('quantity').value, comments:el('comments').value, 
				idno:items, date:el('date').value, important:el('important').checked };
	var len = itemsArray.length;																			// LOCAL VAR
	var notAlreadyThere = true;																				// LOCAL VAR
	for (i=0; i<len; i++) {																											// FOR LOOP
		if (obj['name'].toLowerCase() == itemsArray[i]['name'].toLowerCase() && obj['category'] == itemsArray[i]['category']) {		// CONDITIONAL
			itemsArray[i]['quantity'] = obj['quantity'];																			// MATH
			itemsArray[i]['date'] = obj['date'];
			itemsArray[i]['important'] = obj['important'];
			itemsArray[i]['comments'] = obj['comments'];																			// MATH
			notAlreadyThere = false;																								// MATH
		}
	}
	if (notAlreadyThere) {																					// CONDITIONAL
		itemsArray.push(obj);																				// MATH
		clearForm();																						// METHOD - FUNCTION CALL
		items++;																							// MATH
	}
	display();																								// METHOD FUNCTION CALL
};

function validate() {																						// METHOD FUNCTION 
	var targetArray;																						// LOCAL VARIABLE
	var option;																								// LOCAL VAR
	var cat = el('category').value;																			// LOCAL VAR
	if (cat == "Shelter")																					// CONDITIONAL
		targetArray = shelter;																					// MATH
	else if (cat == "Bedding")																				// CONDITIONAL
		targetArray = bedding;																					// MATH
	else if (cat == "Cooking")																				// CONDITIONAL
		targetArray = cooking;																					// MATH
	else if (cat == "Clothing")																				// CONDITIONAL
		targetArray = clothing;																					// MATH
	else if (cat == "First Aid")																			// CONDITIONAL
		targetArray = firstaid;																					// MATH
	else if (cat == "Miscellaneous")																		// CONDITIONAL
		targetArray = miscellaneous;
		
		
	if ( el('name').value == "" || el('quantity').value == "" || el('comments').value == "" || el('date').value == "" )			// CONDITIONAL
		alert('All fields are required!');																						// OUTPUT
	else if ( targetArray.indexOf(el('name').value.toLowerCase()) == -1 ) {														// CONDITIONAL
		option = confirm("Err..the item you entered doesn't seem like one required for a camping trip. Add it anyway?");		// MATH
		if (option == true)																										// CONDITIONAL
			update();																											// METHOD FUNC CALL
	}
	else update();																												// METHOD FUNC CALL
};

function clearlist() {																						// METHOD FUNCTION
	var option = confirm("Are you sure you want to clear the entire list?");								// MATH
	if (option) {																							// CONDITIONAL
		var len = itemsArray.length;																		// LOCAL VARIABLE
		for (i=0; i<len; i++) {																				// FOR LOOP
			var temp = itemsArray.pop();																		// LOCAL VAR & MATH
		}
		display();																							// METHOD FUNC CALL
	}
}

function resetIndexes() {																					// METHOD FUNCTION
	var len = itemsArray.length;																			// LOCAL VARIABLE
	for (i=0; i<len; i++) {																					// FOR LOOP
		itemsArray[i]['idno'] = i;																			// MATH
	}
}

function deleteItem(idno) {																					// METHOD FUNCTION
	var option = confirm("Delete Item?");																	// MATH
	if (option) {																							// CONDITIONAL
		itemsArray.splice(idno, 1);																			// MATH
		resetIndexes();																						// METHOD FUNC CALL
		display();																							// METHOD FUNC CALL
	}
}

function editItem(idno) {																					// METHOD FUNC 
	el('category').value = itemsArray[idno]['category'];													// MATH
	el('name').value = itemsArray[idno]['name'];															// MATH
	el('quantity').value = itemsArray[idno]['quantity'];													// MATH
	el('comments').value = itemsArray[idno]['comments'];													// MATH
	el('date').value = itemsArray[idno]['date'];															// MATH
	el('important').value = itemsArray[idno]['important'];													// MATH
}	  