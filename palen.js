
// Reverse the number by creating a reverse() function.
// Check if the number after reversing is palindrome or not. 

let num = 454;
reverse(num);
function reverse(num){
let rev = 0;
let temp = num;
while(num!=0){
    let rem = num%10;
    rev = rev*10+rem;
    num = Math.floor(num/10);
}

if(temp == rev){
    console.log("yes it's a palindrome");
}else{
    console.log("It's not a Palindrome");
}
}
