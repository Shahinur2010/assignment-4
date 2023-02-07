// mindGame function is like arithmetic operators which is used to perform mathematical calculations. 

function mindGame(number) {

    if(typeof number !== 'number')
    {return 'please enter a positive number';}

    const output = ((((number * 3) + 10) / 2) - 5);
    return output;
}
console.log(mindGame(33));

// This evenOdd function checks whether the number of characters stored in the input (string) variable is an even or an odd number using modulus operation.

function evenOdd(string) {
    
    if(typeof string !== 'string')
    {return 'please enter a string';}

    if(string.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
console.log(evenOdd('phero'));

// The isLGSeven function is used to checks  the difference between 7 and given input whether the result is less than seven it returned as same as it is. But when the result is more than 7, double of the input was returned.

function isLGSeven(number) {

    if(typeof number !== 'number')
    {return 'please enter a number';}

    let result = (number - 7);
    if(result <= 7){
        return result;
    }
    else{
        return (number * 2);
    }
}
console.log(isLGSeven(15));

// findingBadData this function is used to find out the total number of bad data or negative numbers containing in the input array. 

function findingBadData(array) {

    if(Array.isArray(array)){
    let numberOfBadData = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] < 0){
            numberOfBadData.push(array[i]);
        }
    }
    return numberOfBadData.length;
}
else{
    return false;
}
}
console.log(findingBadData([2,1, 5,]));

// gemsToDiamond function is used to summarize the conversion of three friends gems power to diamond. Here depending on the input value, total diamond was returned by subtracting 2000 from total value when it was more than 2000. Otherwise it was returned as same it is.



function gemsToDiamond(n1,n2,n3) {

    if(typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number')
    {return 'please enter all valid numbers';}

    let firstFriendGemsPower = 21;
    let secondFriendGemsPower = 32;
    let thirdFriendGemsPower = 43;

    let firstFriendTotalDiamond = (n1 * firstFriendGemsPower);
    let secondFriendTotalDiamond = (n2 * secondFriendGemsPower);
    let thirdFriendTotalDiamond = (n3 * thirdFriendGemsPower);
    
     totalDiamond = (firstFriendTotalDiamond +secondFriendTotalDiamond + thirdFriendTotalDiamond);

    if(totalDiamond >= (1000 * 2)){
        
       return (totalDiamond - 2000);
    }
else{
    return totalDiamond;
}
}
console.log(gemsToDiamond(100,5,1));