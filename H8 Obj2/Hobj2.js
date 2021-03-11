// ## Exercise 1
// Create a Person constructor function that has:
// * firstName
// * lastName
// * age
// * getFullName - method
// Create a Student constructor function that inherits from Person and has:
// * academyName
// * studentId
// * study - method that writes in the console: The student firstName is studying in the academyName

// Create two Student objects

function Person (firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function ()
    {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

function Student (firstName, lastName, age, academyName, studentId)
{
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function ()
    {
        console.log(`The student ${this.firstName} is studying in ${this.academyName}`)
    }
};

let firstStudent = new Student ("Ljubica", "Eftimova", 24, "SEDC", 01)
let secondStudent = new Student ("Monika", "Eftimova", 17, "Orce", 02)

console.log(firstStudent);
console.log(secondStudent);
firstStudent.study();
secondStudent.study();


// ## Exercise 2
// Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
// #### DesignStudent
// * isStudentOfTheMonth - boolean
// * attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// #### CodeStudent
// * hasIndividualProject - boolean
// * hasGroupProject - boolean
// * doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project

// #### NetworkStudent
// * academyPart - number
// * attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

// **Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students
// Check all students with the Student method for checking students academy



//// NE ZNAM KAKO DA GO ISKUCAM OVOJ DEL?? Create a method on the Student prototype that accepts a Student of any academy and returns the academy that that student is in.
// Student.prototype.academyName= function(academyName){
//     this.academyName=academyName;
//     console.log(`The student ${this.firstName} is studying in ${this.academyName}`);
// }   NE SFKAJAM KADE I KAKO SE KORISTI POTOA VO DOLNIOT KOD

function DesignStudent (firstName, lastName, age, academyName, studentId, isStudentOfTheMonth)
{
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    Object.setPrototypeOf (this, new Student(firstName, lastName, age, academyName, studentId))
    this.attendAdobeExam = () =>
    {
        console.log(`The student ${firstName} is doing an adobe exam!`)
    }
}

function CodeStudent (firstName, lastName, age, academyName, studentId, type)
{
    this.hasIndividualProject = type === "individual"
    this.hasGroupProject = type === "group"

    Object.setPrototypeOf (this, new Student (firstName, lastName, age, academyName, studentId))
    this.doProject = (type) =>
    {
        switch (type)
        {
            case "group":
                this.hasGroupProject = true;
                console.log(`The student ${firstName} is doing ${type} project !`)
                break;
            case "individual":
                this.hasIndividualProject = true;
                console.log(`The student ${firstName} is doing ${type} project !`)
                break;
            default:
                console.log(`The student ${firstName} is not doing a project !`)
                break;
        }
    }
}

function NetworkStudent (firstName, lastName, age, academyName, studentId, academyPart)
{
    this.academyPart = academyPart;
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.attendCiscoExam = () => console.log(`This student ${firstName} is doing a cisco exam!`)
}

let bubeDesignedStudent = new DesignStudent ("Ljubica", "Eftimova", 24, "SEDC", 01);
console.log(bubeDesignedStudent);
let bubeCodeStudent = new CodeStudent ("Ljubica", "Eftimova", 24, "SEDC", 01, "individual");
console.log(bubeCodeStudent);
let bubeNetworkStudent = new NetworkStudent ("Ljubica", "Eftimova", 24, "SEDC", 01, "first");
console.log(bubeNetworkStudent);
