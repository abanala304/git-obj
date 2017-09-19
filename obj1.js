var numbers = {
    primenumbers: "1 2 3 5 7etc",
    evennumbers: " 2 4 6 8 10etc",
    oddnumbers: "1 3 5 7 9etc",
}
numbers.evennumbers;
" 2 4 6 8 10etc"
numbers.primenumbers;
"1 2 3 5 7etc"
numbers.oddnumbers;
"1 3 5 7 9etc"
numbers["primenumbers"]
"1 2 3 5 7etc"
numbers["evennumbers"]
" 2 4 6 8 10etc"
numbers["oddnumbers"]
"1 3 5 7 9etc"
console.log(numbers.primenumbers)
 1 2 3 5 7etc

console.log(numbers.evennumbers)
 2 4 6 8 10etc

console.log(numbers.oddnumbers)
 1 3 5 7 9etc
