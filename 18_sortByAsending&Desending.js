const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45];

console.log("-------Reverse the array------");
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log("--------Use the sort() method as it is without any custom sorting logic--------");
array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log("----------Sort the array in ascending order-----");
array_roll_numbers.sort((first,second)=>{
    return (first > second ? 1 : -1)
});
console.log(array_roll_numbers);

console.log("-------Sort the array in descending order without using reverse() method only use sort()------");
array_roll_numbers.sort((first,second)=>{
    return (first > second ? -1 : 1)
});
console.log(array_roll_numbers);

console.log("----Sort the array in descending order with using reverse() method----");
array_roll_numbers.sort((first,second)=>{
    return (first > second ? 1 : -1)
});
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log("--------- Find the Greatest number from the array--------");
var largest= 0;
for (i=0; i<=largest;i++){
    if (array_roll_numbers>largest) {
        var largest=array_roll_numbers[i];
    }
}
console.log(largest);