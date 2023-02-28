//Verilmis ishciler siyahisinda (ischiler obyekt seklindedir ve firstName,lastName,salary deyerleri var) maashi 500-den yuxari olan ishcileri ekrana cap eden alqoritm
const person1={ firstName:"Deniz",lastName:"Alieva",salary:800};
const person2={firstName:"Leman",lastName:"Ibrahimova",salary:450};
const person3={firstName:"Etibar",lastName:"Nasibli",salary:1000};
const person4={firstName:"Resul",lastName:"Baxisli",salary:700};
var persons=[person1,person2,person3,person4];
for(let i=0;i<persons.length;i++){
    if(persons[i].salary>500){
        console.log(persons[i].firstName,persons[i].lastName)

    }
}
