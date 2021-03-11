// ## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console
// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. 
// The number can't be smaller than 3.
// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = function () {
        console.log(this.subjects.length * 10);
    }

    this.printStudents = function () {
        console.log(this.students);
    };

    this.printSubjects = function () {
        console.log(this.subjects);
    };

};

let instnaceAcademy = new Academy(
    "SEDC",
    ["Ljubica", "Aleksandra", "Monika"],
    ["Math", "English", "Biology","Programming"],
    new Date(15 / 01 / 2021), new Date(15 / 03 / 2021)
);


function Subject(title, isBoolean, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isBoolean;
    this.academy = instnaceAcademy;
    this.students = students;

    this.overrideClasses = function (number) {
        this.NumberOfClasses === number >= 3? number:"The number can't be smaller than 3";
    };
};

let instanceSubject = new Subject("Math", true, ["tomaida", "marija", "angela"]);


function Student(firstName, lastName, age, completedSubjects) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function () {
        this.academy = instnaceAcademy;
    }

    this.startSubject = function (newSubject) {
        if (this.academy) {
            let checkSubject = this.academy.subjects.filter(subj => subj === newSubject.title).length>0;
            if (checkSubject) {
                newSubject.students.push(this.firstName);
                if (!this.currentSubject) {
                    this.currentSubject = newSubject;
                    return;
                }

                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = newSubject;
            }
        } else {
            throw new Error("Subject not found");
        }
    };
};

let bube = new Student(
    "Ljubica",
    "Eftimova",
    24,
    [new Subject("Math", false, ["Filip", "Olga"]), new Subject("Science", true, ["Petar", "Angel"])]
);
bube.startAcademy(instnaceAcademy);
let biology = new Subject("Biology", true, ["sara", "ana", "petar"]);
bube.startSubject(biology);
let art = new Subject("Art", true, ["moni", "ena", "viki"]);
bube.startSubject(art);


console.log(bube);
// current subject mi se setira biology, no ponatamu ne raboti za predmetot art, i ne odi biology vo completed, zosto?























