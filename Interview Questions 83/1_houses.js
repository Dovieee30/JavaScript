
//  1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", "Fred", "George"];

let houses = []

for (const i of students) {

    if (i.length < 6) {
        houses.push("Gryffindor")
    }
    else if (i.length < 8) {
        houses.push("Hufflepuff")
    }
    else if (i.length < 12) {
        houses.push("Ravenclaw")
    }
    else {
        houses.push("Slytherin")
    }
}

console.log(houses)