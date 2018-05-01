//where all of the new keys go. WHere you pull out the "widgets" from the "widget factory"
//this is where we will be instantiating. All of the "new" keywords will go here. New just means that we are asking for another widget from the factory

$(function(){


    let hero = new Hero("adam");
    let villain = new Villain("joker");
    hero.render();
    villain.render();

    let herosWeapon = new Weapon("Sythe");
    let villainsWeapon = new Weapon("Gun");

    hero.equipWeapon(herosWeapon);
    villain.equipWeapon(villainsWeapon);

    function checkForGameOver() {
        if (villain.health < 1) {
            alert('Victory!')
        } else if(hero.health < 1) {
            alert('Game over!')
        }
    }

    $('#heroAttack').click(()=>{
        hero.attack(villain);
        checkForGameOver();
    });

    $('#villainAttack').click(()=>{
        villain.attack(hero);
        checkForGameOver();
    });



})

/*var person1 = new Person("one");
var person2 = new Person("two");

var hero = new Hero();*/