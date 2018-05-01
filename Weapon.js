class Weapon {
    constructor(name) {
        this.name = name;
        this.damage = Math.floor(Math.random()*10 + 10);//gets random number from 10-20. Random by itself gets number from 0 to 1. * 10 + 10 gets it from 10-20(which is what the assignment says to do). Math.floor gets it so that it will round down to whole number
    }
}