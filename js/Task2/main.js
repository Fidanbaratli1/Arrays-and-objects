//Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm yazin
var nums=[31,15,123,2345,9,187,16];
var sum=0;
for(i=0;i<nums.length;i++){
    if(nums[i]>99)
    sum+=nums[i];
}
console.log(sum);