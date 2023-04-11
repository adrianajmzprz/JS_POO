let divEmployees = document.getElementById("divEmployees")

class Person { //clase superior //objeto persona
    name="";
    email= "";
    age=0;
    resume="";
    id=0;
    static total = 0;
    constructor(name, email, age, resume){
        this.name=name;
        this.email=email.toLowerCase(); //que este en minisculas//
        this.age=(age<18)?18:age; //validacion previa
        this.resume=resume;
        Person.total ++; // va incrementar una persona de una en una 
        this.id = Person.total;
     }// constructorPERSON
     static printTotal(){
        console.log(Person.total);
     }

    printInfo(div){ //,método
        div.insertAdjacentHTML("beforeend",
        `
        <div id="card_${this.id}" class="card text-bg-light mb-3" style="max-width: 18rem;">
         <div class="card-header">${this.name}</div>
          <div class="card-body">
         <h5 class="card-title">${this.email}</h5>
           <p class="card-text">${this.resume}</p>
          <p class="card-text"><strong>${ this.age}</strong></p>
         </div>
        </div>`); // estoy asignando un nombre email 
        //console.log(this.name, this.email, this.age, this.resume);
    } //printInfo
}// class Person las clases para identificarlo con la primera en mayuscula y objetos en minuscula

class Employee extends Person{ //clase superior person //
     department ="";
     salary ="";
     constructor(name, email, age, resume, department, salary){
        super(name, email, age, resume) //toma hagarra los de arriba y los asigna a la clasa superior y es el del empleado
        this.department=department;
        this.salary=salary
     } //constructor
     calculateSalary(){
        return ( (this.salary*30) *1.16).toFixed(2);
     }//calcular el salario calculateSalary

      printInfo(div){
        super.printInfo(div); // manda a llamar a la linea superior
        let cardBody= document.getElementById(`card_${this.id}`)
            .getElementsByClassName("card-body")[0];
        cardBody.insertAdjacentHTML("beforeend",`
          <p class="card-text">${this.department}</p>
          <p class="card-text"><strong>${this.calculateSalary()}</strong></p> 
        `);
       //console.log(this.department, this.salary, this.calculateSalary());
      } //printInfo
} //class Employee

/*let maritere = new Employee("Maritere","maritere@gmail.com", 21, //tipo empleado
"Java fullstack Developer", "IT", 1255.20 );
//let jane = new Person("Jane Doe", "jane.doe@gmail.com", 26, "Jane"); //tipo persona
let dora = new Employee("Dora Garcia", "dora.garcia@gmail.com", 21,
"FullStack Developer", "Developmet", 1115.20 );
let vale = new Employee("Valeria Arquieta", "valeria.arquieta@gmail.com", 21,
  "FullStack Developer", "Development", 1205.12);
//john.resume="Otra cosa"
//jane.printInfo();
//john.printInfo(); //metodo
maritere.printInfo(divEmployees);
dora.printInfo(divEmployees);
vale.printInfo(divEmployees);
//Person.printTotal(); */

let employees = [];
employees.push(
    new Employee("Maritere","maritere@gmail.com", 21, "Java fullstack Developer", "IT", 1255.20 ),
    new Employee("Dora Garcia", "dora.garcia@gmail.com", 21, "FullStack Developer", "Developmet", 1115.20 ),
    new Employee("Valeria", "valeria.arquieta@gmail.com", 21, "FullStack Developer", "Development", 1205.12),
    new Employee ("Carolina ", "CAROLINA@gmail.com", 21, "FullStack Developer", "Development", 1225.12)
);
employees.forEach(e => e.printInfo(divEmployees) );
Person.printTotal();