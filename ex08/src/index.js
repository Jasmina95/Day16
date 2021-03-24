class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getPerson() {
    let personInfo = "Name: " + this.name + ", email: " + this.email + ", age: " + this.age;
    return personInfo;
  }
}

//const personOne = new Person("Jasmina", "jasmina.zejnilovic995@gmail.com", 26);
//console.log(personOne.getPerson());

module.exports = Person;
