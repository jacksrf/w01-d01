var num = parseInt(process.argv[2]);

if (num % 15 == 0) {
    console.log("FizzBuzz");
}
else if (num % 3 == 0) {
    console.log("Fizz");
}
else if (num % 5 == 0) {
    console.log("Buzz");
  }
console.log(num);
