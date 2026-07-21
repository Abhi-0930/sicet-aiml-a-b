marks = prompt("Enter your marks: ");

if(marks >= 90 && marks <= 100){
    consol.log("O")
}
else if(marks >= 90 && marks < 90){
    console.log("A+")
}
else if(marks >= 70 && marks < 80){
    console.log("A")
}
else{
    console.log("Fail");
}