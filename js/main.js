

class Person {
    name ="";
    email="";
    age="";
    resumen="";

    printInfo(){
        console.log(this.name, this.email, this.age, this.resumen);
    }//printInfo

}// class Person

let john = new  Person ();
john.name="John Doe"
john.age=40;
john.email="jdoe@gmail.com";

john.printInfo();