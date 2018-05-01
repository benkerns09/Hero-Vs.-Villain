function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
  Person.prototype.greet = function(other) {//greet makes use of THIS and OTHER
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');//other is just the parameter. THIS will point to the original object called
  };

  var sonny = new Person("sonny", "a@a.com", "444.444.4444");
  var jordan = new Person("jordan", "b@b.com", "555.444.4444");

  sonny.greet(jordan);
  jordan.greet(sonny);

  console.log(jordan.name + jordan.email + jordan.phone);