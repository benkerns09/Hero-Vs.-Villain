/*- A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() in the constructor)
- A method render() which will output HTML that represents the Hero
   - You can render a simple <img> tag if you'd like! Find any old "hero" image on google
   - Make sure to show the "health" of the hero too*/

class Hero extends Person {
    constructor(name) {
        super(name);
        this.imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQEMPn6GoLhClwtP5dvS-pY6v2o-_oW6gmfhTzuLa7jezePfM";
        this.selector = ".hero";
    }
//^^extra step for hero to have a name. Because hero's are people, and peoples need constructors

}