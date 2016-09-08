import {    RadioGroup,    RadioGroupBehavior,
    Button,    ButtonBehavior} from 'buttons';

import {    FieldScrollerBehavior,    FieldLabelBehavior} from 'field';import {    SystemKeyboard} from 'keyboard';

import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';

let whiteSkin = new Skin({    fill: "white",    borders: { left: 2, right: 2, top: 2, bottom: 2 },    stroke: "#df4747"});
var hugeRedText = new Style({ font: "bold 18px", color: "red" });
var blackText = new Style({font: "bold 16px", color:"black"})

var StringTemplate = Label.template($ => ({    left: 0, right: 0, top: 0, bottom: 0,    style: $.style,    string: $.string}));

let darkGraySkin = new Skin({ fill: "#202020" });
let titleStyle = new Style({ font: "20px", color: "white" });

var foodConverted = ""
var listOfFoods= {}
listOfFoods["Plate of Spaghetti"] = 600;
listOfFoods["Banana"] = 105;
listOfFoods["Pop Tart"] = 200;
listOfFoods["Big Mac"] = 563;
listOfFoods["Medium Fries"] = 365;
listOfFoods["Taco"] = 189;
listOfFoods["Slice of Bread"] = 79;
listOfFoods["Chocolate Cake"] = 350;
listOfFoods["Plate of Pad Thai"] = 889;
listOfFoods["IHOP Chorizo Fiesta Omelette"]=1990;
listOfFoods["Harmless Coconut Water (1 bottle)"]=120;
listOfFoods["Boba milk tea with grass jelly 50% sugar"]=316;
listOfFoods["Cup of black coffee"] = 5;
listOfFoods["Grande Caramel Frappuccino"] =420;


let MyRadioGroup = RadioGroup.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,    Behavior: class extends RadioGroupBehavior {        onRadioButtonSelected(buttonName) {            trace("Radio button with name " + buttonName + " was selected.\n");
            foodConverted = buttonName;
            trace("food Converted="+ foodConverted + "\n");        }    }}));


let bigText = new Style({ font: "bold 25px", color: "#333333" });let AgainButtonTemplate = Button.template($ => ({    top: 0, bottom: 0, left: 0, right: 0,height:25,    contents: [        Label($, {left: 0, right: 0, height: 25, string: $.textForLabel, style: bigText})    ],    Behavior: class extends ButtonBehavior {        onTap(button){          mainCon={};          mainCon = generateHomePage();          // mainCon = new MainContainer({contentToScrollVertically})          application.remove(secondCon);        	application.add(mainCon);        }    }}));var secondCon;var totalCalories= 0;var quantity = 2;let GoButtonTemplate = Button.template($ => ({    top: 200, bottom: 0, left: 0, right: 0, height:25,    contents: [        Label($, {left: 0, right: 0, height: 25, string: $.textForLabel, style: bigText})    ],    Behavior: class extends ButtonBehavior {        onTap(button){          application.remove(mainCon);

          totalCalories=quantity*listOfFoods[foodConverted];
          var convString = countCalories(totalCalories);

          trace("quantity="+quantity+"\n")
          trace("totalCalories="+totalCalories+"\n")
          trace("output="+convString+"\n");
          trace("foodCalorie="+listOfFoods[foodConverted]+"\n")
          trace("food Converted="+ foodConverted + "\n");

          secondCon = new Column({			          left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,			          contents: [                        new Column({                          left:0,right:0,top:0,bottom:0,skin:whiteSkin,                          contents:[new StringTemplate({style: hugeRedText, string: "You consumed: "+totalCalories+" calories" }),                                    new StringTemplate({style: hugeRedText, string: "The equivalent of:" }),                          ]                        }),                           new Line({left:0, right:0, top:0, bottom:0, skin:whiteSkin, height:125,                             contents:[ new Column({left:0,right:0,top:0,bottom:0,skin:whiteSkin,                                                  contents:[new StringTemplate({ style: blackText, string: convertedFoods["Plate of Spaghetti"]+" Plate of Spaghetti"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Banana"]+" Banana"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Pop Tart"]+" Pop Tart"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Big Mac"]+" Big Mac"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Medium Fries"]+" Medium Fries"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Taco"]+" Taco"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Slice of Bread"]+" Slice of Bread"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Chocolate Cake"]+" Chocolate Cake"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Plate of Pad Thai"]+" Plate of Pad Thai"}),                                                  ]                                                }),                                        new Column({left:0,right:0,top:0,bottom:0,skin:whiteSkin,                                                  contents:[                                                  new StringTemplate({ style: blackText, string: convertedFoods["IHOP Chorizo Fiesta Omelette"]+" IHOP Chorizo"}),                                                  new StringTemplate({ style: blackText, string: "Fiesta Omelette"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Harmless Coconut Water (1 bottle)"]+" Harmless Coconut"}),                                                  new StringTemplate({ style: blackText, string: "Water (1 bottle)"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Boba milk tea with grass jelly 50% sugar"]+" Boba milk tea with"}),                                                  new StringTemplate({ style: blackText, string: "grass jelly 50% sugar"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Cup of black coffee"]+" Cup of black"}),                                                  new StringTemplate({ style: blackText, string: "coffee"}),                                                  new StringTemplate({ style: blackText, string: convertedFoods["Grande Caramel Frappuccino"]+" Grande Caramel"}),                                                  new StringTemplate({ style: blackText, string: "Frappuccino"}),                                                  ]                                                    })                             ],                           }),                          new AgainButtonTemplate({textForLabel: "Again!"}),			    ]			});        	application.add(secondCon);        }    }}));

var convertedFoods= {}
convertedFoods["Plate of Spaghetti"] = 0;
convertedFoods["Banana"] = 0;
convertedFoods["Pop Tart"] = 0;
convertedFoods["Big Mac"] = 0;
convertedFoods["Medium Fries"] = 0;
convertedFoods["Taco"] = 0;
convertedFoods["Slice of Bread"] = 0;
convertedFoods["Chocolate Cake"] = 0;
convertedFoods["Plate of Pad Thai"] = 0;
convertedFoods["IHOP Chorizo Fiesta Omelette"]=0;
convertedFoods["Harmless Coconut Water (1 bottle)"]=0;
convertedFoods["Boba milk tea with grass jelly 50% sugar"]=0;
convertedFoods["Cup of black coffee"] = 0;
convertedFoods["Grande Caramel Frappuccino"] =0;

function countCalories(calories){
	var output = ""
	for (var food in listOfFoods){
		if(listOfFoods.hasOwnProperty(food)){
      var foodConverted = Math.round(calories/listOfFoods[food] * 100) / 100
			output += ""+ foodConverted +" "+food + " "
      convertedFoods[food]=foodConverted
		}
	}
	return output
}

let nameInputSkin = new Skin({borders: {left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray'});let fieldStyle = new Style({color: 'black', font: 'bold 20px', horizontal: 'left', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5});let fieldHintStyle = new Style({color: '#aaa', font: '20px', horizontal: 'left', vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5});let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });let MyField = Container.template($ => ({    width: 200, height: 35, skin: nameInputSkin, contents: [        Scroller($, {            left: 4, right: 4, top: 4, bottom: 4, active: true,            Behavior: FieldScrollerBehavior, clip: true,            contents: [                Label($, {                    left: 0, top: 0, bottom: 0, skin: fieldLabelSkin,                    style: fieldStyle, anchor: 'NAME',                    editable: true, string: $.name,                    Behavior: class extends FieldLabelBehavior {                        onEdited(label) {                            let data = this.data;                            data.name = label.string;                            label.container.hint.visible = (data.name.length == 0);                            quantity = parseInt(data.name)                            trace(data.name+"\n");                        }                    },                }),                Label($, {                    left: 4, right: 4, top: 4, bottom: 4, style: fieldHintStyle,                    string: "Tap to add quantity", name: "hint"                }),            ]        })    ]}));

// function generateHomePage1(){
//   return new Column({
//       left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
//       contents: [
//       	new Line({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
//       		contents: [
//   	    		    new StringTemplate({ style: hugeRedText, string: "Quantity?" }),
//   	            new MyField({name: ""}),
//   	            ]
//       	}),
//           new MyRadioGroup({buttonNames: "Plate of Spaghetti,Banana,Big Mac,Slice of Bread,Plate of Pad Thai,Boba milk tea with grass jelly 50% sugar,Grande Caramel Frappuccino"}),
//           new GoButtonTemplate({ textForLabel: "Go!" }),
//       ]
//   });
// }


let MainContainer = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [



        VerticalScroller($, {
            active: true, top: 50, bottom: 50,
            contents: [
                $.contentToScrollVertically,
                VerticalScrollbar(),
                TopScrollerShadow(),
                BottomScrollerShadow(),
            ]
        }),
        new Container({
            top: 0, height: 50, left: 0, right: 0, skin: darkGraySkin,
            style: titleStyle,
            contents: [
              new Line({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, height:50,
                contents: [
                      new StringTemplate({ style: hugeRedText, string: "Quantity?" }),
                      new MyField({name: ""}),
                      ]
              }),
            ]
        }),

        new GoButtonTemplate({ textForLabel: "Go!" }),



    ]
}));

// var contentToScrollVertically = new Column({
//     top: 0, left: 0, right: 0,
//     contents: [
//         new MyRadioGroup({buttonNames: "Plate of Spaghetti,Banana,Pop Tart,Big Mac,Medium Fries,Taco,Slice of Bread,Chocolate Cake,Plate of Pad Thai,IHOP Chorizo Fiesta Omelette,Harmless Coconut Water (1 bottle),Boba milk tea with grass jelly 50% sugar,Cup of black coffee,Grande Caramel Frappuccino"}),
//     ]
// });
function generateHomePage(){
  var contentToScrollVertically = new Column({
      top: 0, left: 0, right: 0,
      contents: [
          new MyRadioGroup({buttonNames: "Plate of Spaghetti,Banana,Pop Tart,Big Mac,Medium Fries,Taco,Slice of Bread,Chocolate Cake,Plate of Pad Thai,IHOP Chorizo Fiesta Omelette,Harmless Coconut Water (1 bottle),Boba milk tea with grass jelly 50% sugar,Cup of black coffee,Grande Caramel Frappuccino"}),
      ]
  });
  return new MainContainer({contentToScrollVertically})
}

// var mainCon = new MainContainer({contentToScrollVertically})
var mainCon = generateHomePage()

application.add(mainCon)
