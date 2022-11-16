const cars = [" BMW ", " Speed 200km/h ", " color: blue",]

document.getElementById("inner").innerHTML = cars[0,1,2];

const person = {
    FirstName: "Jeff",
    lastName: "Bezos",
    age: 58,
    hear: "no hear",
    eye: "brown"
};
document.querySelector(".demo").innerHTML = person.FirstName + " is " + person.age + " years old."

let text = "";
for (let i = 4; i < 36; i++) {
  text += i + " ";
  document.getElementById("loop").innerHTML = text;
}
