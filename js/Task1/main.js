//Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi oratsini tapan alqoritm
var numbers=[12,10,6,11,18];
var sum=0
var counter=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%3==0){
    counter++
    sum+=numbers[i]
} 
}
console.log(sum/counter)