// (1) Sum of 2 Number//

function sum(num1,num2){
    var ans = num1 + num2;
    return ans;
}
var sum  = sum(4,6)
console.log(sum)

// (2) Check if a number is even or odd //

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10)); 

// (3) largest of three //

function LargestOfThree(a,b,c){
    if(a>=b && a>=c){
        return a;
    } else if (b>=a && b>=c){
        return b;
    } 
    else
      {
        return c;
    }
}
    console.log(LargestOfThree(10,12,13))

// (4) Reverse The String //

function ReverseString(str){
      var reversed = ""
      for (var i =  str.length - 1; i>=0 ; i--){
        reversed = reversed + str[i]
      }
      return reversed
}
console.log(ReverseString("Rohit"))

// (5) Count the Vowels // 

function CountVowel(str) {
    var count = 0;
    for (var i = 0; i < str.length ; i++){
        if
        (
               str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'
            || str[i] ==='A' || str[i] === 'E'  || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'       
        )
        {
            count++;
        }
    }
    return count;
}
console.log(CountVowel("Rohit"))