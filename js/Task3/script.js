//Vermilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm
var nums=[23,7,27,13,65];
var sum=0;
var max=nums[0];
var min=nums[1];
;
for(let i=0;i<nums.length;i++){
    if(max>nums[i]){
        max=nums[i];
    }
    if(min<nums[i]);
    min=nums[i];
}
sum=max+min;
console.log(sum/2);