/*A property "name" which is a string passed in through the constructor
- A property "health" which is hardcoded to 100 initially
- A property "weapon" which is null initially
- A method equipWeapon(weapon), which will take a weapon object and attach it to the "weapon" property
- A method attack(person), which will deduct health from the target based on what weapon this person has equipped
*/

class Person {//defines a class ES6 style. Since we are typing into the top of this file now, it means Person will be defined globally.
    constructor(name) {//when a class is created it needs to go through a constructor. In your other file, whatever you put into the name parentheses will show up in the name parameter
        this.name = name || "Default name";//using the "or" operator to create a default name. Typically an OR will take two booleans and resolve them. 
        this.health = 100;//this makes it so that health is attached to every person that comes out
        this.weapon = null;//because at the beginning people won't have weapons
    }

    attack(person) {//this could have easily been named "opponent"
        //what if they forget to pass in "person"?
        if (!person) {
            console.log('you forgot to pass in a person');
            return;//return makes it so that nothing else happens after this line. We don't want anything to happen because person is undefined, so we don't want person.health to execute

        }
        //what if this person doesn't have a weapon?
        if (this.weapon == null) {
            console.log('you forgot to equip a weapon!');
            return;
        }
        person.health -= this.weapon.damage;//so whenever we pass in attack on a person, it's health will diminish. -= is just subtraction
        person.render();
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
    //^^these look like functions but they are not ES6 functions or old style functions. The only think allowed to be in a class like this are the method blocks

    render() {
        $(this.selector).html(`
            <img width="100" src="${this.imageURL}" />
            <span>${this.health}</span>
        `);
    }







}