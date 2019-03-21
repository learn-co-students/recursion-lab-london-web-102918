// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString)
    } else {
        return true;
    }
}

function reverseString(revString) {
   
    if (revString.length > 0) {
        return (
            reverseString( revString.substring(1)) 
                + revString.charAt(0)
        );
    } else {
        return ""
    }

}

console.log(reverseString("hello"))