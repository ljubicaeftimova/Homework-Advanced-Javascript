// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json


 
let url = `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`;

fetch (url)
.then (response => response.json())
.then (
    response => {

        // * All students with an average grade higher than 3
        let studentsAverageGrade3 = response
        .filter( student => student.averageGrade > 3 )
        .map(student => {
            return {
                firstName: student.firstName,
                lastName: student.lastName,
                averageGrade: student.averageGrade
            };
        })
        console.log(studentsAverageGrade3);
        

        // * All female student names with an average grade of 5
        let femaleAverageGrade5 = response
        .filter ( student => student.gender === "Female" )
        .filter ( student => student.averageGrade === 5 )
        .map(student => {
            return {
                firstName: student.firstName,
                lastName: student.lastName,
                averageGrade: student.averageGrade
            };
        })

        console.log(femaleAverageGrade5);


        // * All male student full names who live in Skopje and are over 18 years old
        let maleStudentsInSkopjeOver18 = response
        .filter ( student => student.age >= 18 )
        .filter ( student => student.city === "Skopje" )
        .filter ( student => student.gender === "Male" )
        .map(student => {
            return {
                maleStudent: student.gender,
                firstName: student.firstName,
                lastName: student.lastName,
                studentAge: student.age,
                studentCity: student.city

            };
        })

        console.log(maleStudentsInSkopjeOver18);



        // * The average grades of all female students over the age  of 24
        let femaleOver24= response
        .filter ( student => student.age > 24 )
        .filter ( student => student.gender == "Female" )
        .map(student => {
            return {
                femaleStudent: student.gender,
                firstName: student.firstName,
                lastName: student.lastName,
                studentAge: student.age,
                averageGrade: student.averageGrade
            };
        })

        console.log(femaleOver24);

        // * All male students with a name starting with B and average grade over 2
        let maleNameBGrade2 = response 
        .filter ( student => student.gender == "Male" )
        .filter ( student => student.averageGrade > 2 )
        .filter ( student => student.firstName.startsWith ("B") )
        .map(student => {
            return {
                femaleStudent: student.gender,
                firstName: student.firstName,
                lastName: student.lastName,
                averageGrade: student.averageGrade
            };
        })
        console.log(maleNameBGrade2)

    })

    .catch ((error) => {
        console.error('Error:', error);
    })