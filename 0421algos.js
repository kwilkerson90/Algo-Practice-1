/*
Diff Two Arrays
    -This algo is about to compare two arrays and return a new array with any items 
    only found in one of the two given arrays, but not both.
    -In other words, return the symmetric difference of the two arrays 
    -We can have a function that will take in the two arrays as arguments then return the difference
    -Example to explain:
        function diffArray(arr1, arr2) {
            // Code goes here
        }
    -Examples:
        diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
            -should return [4]

        diffArray([scorpio, leo, capricorn], [scorpio, leo, pluto, capricorn])
            -should return [pluto]

*/

/*

Need:
        -a function
        -parameters, as placeholders for the arrays we will pass in 
        -need to be able to iterate over both arrays and find 
        something that's not present in both arrays
        -need something that can compare the elements in both arrays
        -the incongruency needs to be added to a new array
        -need to print the incongruency to the terminal 
        -array filter()
            -the filter() method creates a new array with 
            array elements that passes a test

*/
/*
function sheDoesntEvenGoHere(arr1, arr2) {
    let arr1 = ["Kady", "Janice Ian", "Regina", "Karen"];
    let arr2 = ["Kady", "Janice Ian", "Regina", "Karen", "Gretchen"];
    for (i = 0; i < arr1.length; i++) {
        //setting up a for loop to iterate through the first array


        for (j = 0; j < arr2.length; j++) {
            //setting up a for loop to iterate through the second array
            

            if(arr1[i] === arr2[j]) {   //compare the elements of both arrays; in the code block you say what should happen if they're the same 
                console.log("LGTM");
            }

        }
    }
    //right here, put what you want to happen if 
    //all the elements in both arrays are the same 
    //need to use the filter method here to make a new array from the difference(s) in the first two arrays
}
*/



const arr2 = ["Michael", "Randy", "Tito", "Jermaine"];
const arr1 = ["Michael", "Randy", "Tito", "Marlon", "Janet", "Jermaine"];

const diff = arr1.filter(function(missing) {
    return !arr2.includes(missing); 
});

console.log(diff);




/*

//replace a given index in the array with Fluffy Pancakes

//array.splice(index, howmany, item1, ....., itemX)

const breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];

breakfasts.splice(4, 1, "Fluffy Pancakes");

console.log(breakfasts);


*/
