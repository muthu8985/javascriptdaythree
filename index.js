// 5.objects


const person = {
  firstName : "muthu",
  lastName  : "kumar",
  age     : 20,
  education: 'B.E'
};

document.getElementById("demoobj").innerHTML =

person.firstName + " is " + person.age + " years old.";

// Functions
function calculations(p1,p2){
    return p1+p2;
}
let result=calculations(5,9)
document .write(result)