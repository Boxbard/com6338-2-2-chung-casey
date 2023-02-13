/*
Create a "roll" button in the HTML that will call
the function you write in this file (It should say "roll").

Create a function that will be called
when the roll button is clicked.

When clicked, the button should prompt
the user for how many sides the dice
to be rolled should have.

Then, it should alert with a random number
between 1 and the number of sides of the dice.
Ex: a 6-sided die should result in numbers between 1 and 6.
Ex: a 100-sided die should result in numbers between 1 and 100.

If the user gives a non-number or clicks cancel,
end the function.

BONUS: Ask the user to roll again with a confirm.
If the user clicks OK, call your function again.

NOTE: Extra alerts, confirms, and prompts
will cause the tests to fail!
*/

function roll() {
    var sidesString = prompt('How many sides does the dice have?') //summons a prompt for the user to insert an integer string
    var sidesNumber = parseInt(sidesString) //parses the string the user inputted into a number JavaScript recognizes
    if (!sidesNumber) return //if it's an integer JavaScript recognizes, return a value.

    var rollResults = Math.floor(Math.random() * sidesNumber) + 1 //The +1 prevents the results from returning a 0

    alert('You rolled a ' + rollResults)

    var rollAdvantage = confirm('roll again') //asks the user a yes or no question
    if (rollAdvantage) {
        return roll()
    }
}