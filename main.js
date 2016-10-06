// Average Price

var sum = 0;
items.forEach(function(item){
  sum += Number(item.price)
})
var avg = sum / items.length

avg.toFixed(2)

document.getElementById('answer1').innerHTML = avg.toFixed(2);


// Aray of Items


var newArray = items.filter(function(a) {
	if(a.price < 18 && a.price > 14) {
		return true
	} else { 
		return false
	}

})

newArray

var htmlStr = "<ul>";
newArray.forEach(function(item){
	htmlStr += "<li>" + item.title + "</li>"
})
htmlStr += "</ul>"

document.getElementById('answer2').innerHTML = htmlStr;

//3. Which item has a "GBP" currency code? Display it's name and price.

var gbp = items.filter(function(a) {
	if(a.currency_code === "GBP") {
		return true	
	} else {
		return false
	}

})

//gbp 

var gbplist = "<ul>";
gbp.forEach(function(item) {
	gbplist+= "<li>" + item.title + item.price + "</li>"
})

gbplist += "</ul>"

document.getElementById('answer3').innerHTML = gbplist;


//4.Display a list of items made of wood

var woodItems = items.filter(function(item) {
	if (item.materials.indexOf('wood') !== -1) {
		return true
	} else {
		return false
	}
})

var woodHTML = "<ul>";
woodItems.forEach(function(item) {
	woodHTML += "<li>" + item.title +"</li>"
})

woodHTML += "</ul>"


document.getElementById("answer4").innerHTML = woodHTML;


/* 5.
Which items are made of eight or more materials? Display the name, 
number of items and the items it is made of.*/

// materials.length
// items.title
// itemsMadeOfWood.length
// materials.forEach 

 var madeWithEight = []
 var eightMaterials = items.filter(function(item) {
	if(item.materials.length >= 8) {
		madeWithEight += item.title + " "	+ item.length + " " + item.materials	
	}
})

madeWithEight

/*var eightHTML = "<ul>";
eightMaterials.forEach(function(a) {
	eightHTML += "<li>" + items.title + "<li>"

})

eightHTML += "</ul>"*/

document.getElementById("answer5").innerHTML = madeWithEight;


//6 how many items were made by thier sellers

var madeBySeller = items.filter(function(items){
	if(items.who_made === "i_did") {
		return true
	}
		
})

madeBySeller

document.getElementById('answer6').innerHTML = madeBySeller.length











