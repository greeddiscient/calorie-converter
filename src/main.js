import {
    Button,

import {

let whiteSkin = new Skin({
var hugeRedText = new Style({ font: "bold 20px", color: "red" });

var StringTemplate = Label.template($ => ({

var foodConverted = ""
var listOfFoods= {}
listOfFoods["Plate of Spaghetti"] = 600;
listOfFoods["Banana"] = 105;
listOfFoods["Pop Tart"] = 200;
listOfFoods["Big Mac"] = 563;
listOfFoods["Medium Fries"] = 365;
listOfFoods["Taco"] = 189;
listOfFoods["Slice of bread"] = 79;
listOfFoods["Chocolate Cake"] = 350;
listOfFoods["Plate of Pad Thai"] = 889;
listOfFoods["IHOP Chorizo Fiesta Omelette"]=1990;
listOfFoods["Harmless Coconut Water (1 bottle)"]=120;
listOfFoods["Boba milk tea with grass jelly 50% sugar"]=316;
listOfFoods["Cup of black coffee"] = 5;
listOfFoods["Grande Caramel Frappuccino"] =420;


let MyRadioGroup = RadioGroup.template($ => ({
            foodConverted = buttonName;
            trace("food Converted="+ foodConverted + "\n");

var totalCalories= 0;
var quantity = 2;


            totalCalories=quantity*listOfFoods[foodConverted];
            var convString = countCalories(totalCalories);

            trace("output="+convString);
            trace("food Converted="+ foodConverted + "\n");

            var secondCon = new Column({
			    	new StringTemplate({style: hugeRedText, string: "You consumed: "+totalCalories+" calories" }),


function countCalories(calories){
	var output = ""
	for (var food in listOfFoods){
		if(listOfFoods.hasOwnProperty(food)){
			output += ""+ Math.round(calories/listOfFoods[food] * 100) / 100 +" "+food + " "
		}
	}
	return output
}

let nameInputSkin = new Skin({borders: {left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray'});

var mainCon = new Column({
    	new Line({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    		contents: [
	    		new StringTemplate({ style: hugeRedText,
	            new MyField({name: ""}),
	            ]
    	}),
        new MyRadioGroup({buttonNames: "Plate of Spaghetti,Banana,Big Mac,Slice of Bread,Plate of Pad Thai"}),



application.add(mainCon)