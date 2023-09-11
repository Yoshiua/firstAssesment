///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0



for (let i = 0; i < fujiAcres.length; i++) {
totalAcres = totalAcres + fujiAcres[i]
  }
  for (let i = 0; i < galaAcres.length; i++) {
    totalAcres = totalAcres + galaAcres[i]
      }
      for (let i = 0; i < pinkAcres.length; i++) {
        totalAcres = totalAcres + pinkAcres[i]
          }
  console.log(totalAcres)

// After reading through the problem twice i started my code off looking like this

//let totalAcres = 0
//for (let i = 0; i < fujiAcres.length; i++) {
 // }
 // console.log(totalAcres)

 // i then added the line to make total acres = itself + the index for fuji apples to make sure it retains the previous numbers between each loop
 // once i tested that and it worked i just copied the code and pasted it twice changed the index from the fuji array to gala then pink.

// then to tested it i editid each arrays last index to make sure it changed for all 3. once i saw that worked i changed them back to the original numbers.


/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / fujiAcres.length
console.log(averageDailyAcres)


// I started this one off by making the varible, then making it = to the total acres / the lenght of the array. 
// i was just going to have it devide by 7 since the array represents each day of the week but chose to do length.


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
days = days +1;
acresLeft = acresLeft - averageDailyAcres
}
console.log(days)

// after reading this one a few times i started the code off with a while loop set to run while acres left is greater than 0
// i then added the line to add +1 to the days varable each rotation. then added the line to - daily avg from acres left

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

let fujiTemp = fujiAcres.slice()
for (let i = 0; i < fujiTemp.length; i++){
    fujiTons.push(fujiTemp[i]*6.5)
}

console.log(fujiTons)

let galaTemp = galaAcres.slice()
for (let i = 0; i < galaTemp.length; i++){
    galaTons.push(galaTemp[i]*6.5)
}

console.log(galaTons)

let pinkTemp = pinkAcres.slice()
for (let i = 0; i < pinkTemp.length; i++){
    pinkTons.push(pinkTemp[i]*6.5)
}

console.log(pinkTons)

// first i read this a few times and tried to somplify what i was being asked for. this is how i understood it
// make a copy of the array for each kind of apples timesing the value that represents acres by 6.5 to show tons

// i did this by first making the fujiTons variable an array, then i made a temp copy of fujiAcres array to run a loop on it that
//takes the currect index value and timesing it by 6.5 to show tons, then pushing that new value to the fujiTons array.
// i then just repeaded the process for the other two kinds of apples.


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < fujiAcres.length; i++) {
    fujiPounds = fujiPounds + fujiAcres[i] *6.5 *2000
      }
console.log(fujiPounds)

for (let i = 0; i < galaAcres.length; i++) {
    galaPounds = galaPounds + galaAcres[i] *6.5 *2000
      }
console.log(galaPounds)

for (let i = 0; i < pinkAcres.length; i++) {
    pinkPounds = pinkPounds + pinkAcres[i] *6.5 *2000
      }
console.log(pinkPounds)


// for this problem i basically copyed what i did for problem 1. I set the value of each applePund to 0 then i ran a for loop that adds 
//the currect index value which was in acres, timesing it by 6.5 to make it tons then timesing it again by 2000 to show pounds, then making 
//fujiPounds = its current value + this new index value. i the just repeated the process for each kind of apple.



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice 
console.log(fujiProfit)

let galaProfit = galaPounds * galaPrice 
console.log(galaProfit)

let pinkProfit = pinkPounds * pinkPrice 
console.log(pinkProfit)


// for this one i just took the pounds of each apple timesed it by the price
// we could also divided the number by 100 to show dollar amounts instead of cents



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)
