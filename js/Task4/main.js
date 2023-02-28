//Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm

const names= [];
names[0] = "Alim";
names[1] = "Deniz";
names[2] = "Nuray";
names[3] = "Arzu";
names[4] = "Almaz";
names[5] = "Fidan";
var counter = 0;
for (let i = 0; i < names.length; i++){
    if (names[i].startsWith("A")){   //StartsWith- setir numunesinin baslangicini gosterilen setirle uygun olub olmadigini mueyyen edir.
      counter++
    }
}
console.log(counter)