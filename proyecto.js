//
// BAC% = (A × 5.14/W × 0.69) - .015 × H
// Where:
//   A: Total alcohol consumed, in ounces (oz)
//   W: Body weight, in pounds (lbs)
//   H: Time passed since drinking, in hours
//     Ask your name
// Ask your gender
// Ask how many beers you had
// Ask how many hours has it been since your last beer
// It should give you your alcohol content
// Tell you if your able to drive or not
var argument = process.argv[2];
var colors = require('colors');
var prompt = require('prompt-sync')();
var clear = require('clear');
colors.setTheme({
    help: 'yellow',
    bac: 'green'
});

clear();
if (argument === "bac") {
    bac();
} else {
    help();
}

function bac() {
    var name = String(prompt('Name = '));
    var beers = Number(prompt('Medallas = ') * 10);
    var weight = Number(prompt('Weight = '));
    var gender = Number(prompt('Gender (0 = male || 1 = female) = '));
    var hoursSinceLastDrink = Number(prompt('Hours since last Medalla = '));

    var response = name + " your alchool % is:";
    if (gender === 0) {
        gender = 0.73
    } else {
        gender = 0.66;
    }
    var result = ((response), (beers * 5.14) / (weight * gender) - (0.015 * hoursSinceLastDrink));
    console.log(response.green, result);

    if (result < 0.8) {
        console.log("You can drive".green);
    }else{
      console.log("You cannot drive".red);
    }
}

function help() {

    console.log('This is the help menu: \noptions:\nhelp\nbac'.yellow);

}
