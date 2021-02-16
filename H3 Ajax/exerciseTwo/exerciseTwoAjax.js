
$(document).ready(function() {

    function starWarsFunction(responseStarWars) {
        let hElement = $(`<h1></h1>`).text(`${responseStarWars.name}`);
        let tableStarwars = $(` <table border = "1px">
                     <tr>
                         <td>Height</td>
                         <td>Weight</td>
                        <td>Eye Color</td>
                        <td>Hair color</td>
                    </tr>
        
                     <tr>
                         <td>${responseStarWars.height}</td>
                         <td>${responseStarWars.weight}</td>
                        <td>${responseStarWars.eye_color}</td>
                        <td>${responseStarWars.hair_color}</td>
                     </tr>
                    </table>`);

        $("#exerciseTwo").append(hElement,tableStarwars);

    }

    $("#buttonStarWars").click(function () {
        $.ajax ( {
            method:"GET",
            url:"https://swapi.dev/api/people/1/",

            success: function (response) {
                starWarsFunction(response);
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




