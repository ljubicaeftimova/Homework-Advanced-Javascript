$(document).ready(function() {

    function studentFunction(responseForStudents) {
        let hElement = $(`<h1></h1>`).text(`${responseForStudents.academy}`);
        let studentList = $(`<ul></ul>`);
        $("#exerciseOne").append(hElement,studentList);

        for (i = 0; i < responseForStudents.students.length; i++) {
            studentList.append(`<li> ${responseForStudents.students[i]}</li>`);
        }
    }

    $("button").click(function () {
        $.ajax ( {
            method:"GET",
            url:"https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",

            success: function (response) {
                let responseStudents = JSON.parse(response);
                studentFunction(responseStudents);

            },
            error:function (response) {
                console.log("The request is not successful");
            } 
        }
        )
    }
    )
}
)