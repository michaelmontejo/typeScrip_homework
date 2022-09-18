// first point
var my_name = "MICHAEL STEVEN MONTEJO CAMARGO";
console.log(my_name);
//second point
var my_favorite_number = 24;
console.log(my_favorite_number);
//third point
var animals = ["bird", "duck", "cat", "dog", "rabbit", "fish", "shark", "elephant", "bear", "kangaroo"];
console.log(animals);
var organization1 = {
    name: "Coca-cola",
    Slogan: "la chispa de la vida",
    schedule: "l-v 7am a 5pm",
    remoteWorked: true,
    CreatedDate: "29 de enero de 1892",
    WorkedSaturday: false
};
var organization2 = {
    name: "M&M",
    Slogan: "se derrite en tu boca no en tus manos",
    schedule: "l-v: 7am a 5pm Saturday: 8am a 12m",
    remoteWorked: false,
    CreatedDate: "1989",
    WorkedSaturday: true
};
console.log(organization1);
console.log(organization2);
var college = [
    { name: "Ana", age: 4, grade: 0, Address: "cll falsa 123" },
    { name: "David", age: 14, grade: 6 },
    { name: "Camilo", age: 10, grade: 5, Address: "conjunto pinar apt 156" },
    { name: "David", age: 17, grade: 11 },
];
console.log(college);
//sixth point
function area_circle(radio) {
    return (radio * radio) * 3.1416;
}
var area_my_circle = 0;
area_my_circle = area_circle(5);
console.log("The area of my circle is " + area_my_circle);
//seventh point
function bigger_number(a, b, c) {
    var number_list = [a, b, c];
    var result = -1000;
    for (var i = 0; i < 3; i++) {
        if (number_list[i] > result) {
            result = number_list[i];
        }
    }
    return (result);
}
var mybigger = 0;
mybigger = bigger_number(188, 24524, -356);
console.log("the number most bigger is:" + mybigger);
// eighth point
function yourName(name) {
    return (name);
}
var name_research = "your_name";
name_research = yourName("mickeimon");
console.log("My name is: " + name_research);
