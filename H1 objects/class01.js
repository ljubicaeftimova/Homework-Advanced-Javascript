// function Student(firstName, lastName, birthYear, academy, grades){
//     this.fName = firstName;
//     this.lName = lastName;
//     this.birthYear = birthYear;
//     this.academy = academy;
//     this.grades = grades;

//     this.getAge = function(){
//         let todayYear = new Date().getFullYear();
//         return `The student ${this.fName} ${this.lName} is ${todayYear - this.birthYear} years old.`;
//     }

//     this.getInfo = function(){
//         return `This is student ${this.fName} ${this.lName} from the academy ${this.academy}!`;
//     }

//     this.getGradesAverage = function(){
//         return `The average grade of the student is ${(this.grades[0] + this.grades[1] + this.grades[2] + this.grades[3] +this.grades[4]) / 5}.`
//     }
//     this.arrayInfo = function(){
//         return ` ${this.fName} ${this.lName}`;
// }
// }

// let studentArray = [];

// let studentOne = new Student("Ljubica", "Eftimova", 1996, "SEDC", [7, 10, 10,8,10]);
// console.log(studentOne.getAge(), studentOne.getInfo(), studentOne.getGradesAverage());

// let studentTwo = new Student("Monika", "Nikolova", 2003, "SEDC", [9, 9, 8,10,10]);
// console.log(studentTwo.getAge(), studentTwo.getInfo(), studentTwo.getGradesAverage());

// let studentThree = new Student("Aleksandra", "Jovik", 1995, "SEDC", [8, 10, 9,10,6]);
// console.log(studentThree.getAge(), studentThree.getInfo(), studentThree.getGradesAverage());

// studentArray.push(studentOne.arrayInfo());
// studentArray.push(studentTwo.arrayInfo());
// studentArray.push(studentThree.arrayInfo());

// console.log(studentArray);


function SignUp (fName, lName, bYear, studentAcademy){
    this. firstName = fName;
    this. lastName = lName;
    this. birthYear = bYear;
    this. academy = studentAcademy;
}



let signupArray = [];
let fNameInput = document.getElementById("firstName");
let lNameInput = document.getElementById("lastName");
let birthYearInput = document.getElementById("birthYear");
let academyInput = document.getElementById("academy")
let signBtn = document.getElementById("btn");

function clearForm(){
    fNameInput.value="";
    lNameInput.value="";
    birthYearInput.value="";
    academyInput.value="";

}
signBtn.addEventListener("click", function(){
    let firstName = fNameInput.value;
    let lastName = lNameInput.value;
    let birthYear = birthYearInput.value;
    let academy = academyInput.value;

    if(!firstName || !lastName || !birthYear || !academy){
                console.log("Please enter valid values");
            } else {
                let student = new SignUp(firstName, lastName, birthYear, academy);
                signupArray.push(student);
                console.log(student);}
    clearForm();
})

