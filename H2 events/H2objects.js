$(document).ready(function () {
   
    let buttonUser = $("#submitBtn");
    
    let textSize = $("#fontSize");
    let colorUser = $("#colorInput");
    let textUser = $("#textInput");

    function clearForm(){//ne mi raboti clearform
        textSize.value="";
        colorUser.value="";
        textUser.value="";
    }
   
    buttonUser.click(function () {

        if ((!textUser.val()) && (!colorUser.val()) && (!textSize.val())) {

            buttonUser.text('Please enter text, color and font size!')

        } 
        
        else {
            buttonUser.after(`<h2>${textUser.val()}</h2>`)
            let paragraph = $("h2")
            paragraph.css("color", `${colorUser.val()}`);
            paragraph.css("fontSize", `${textSize.val()}px`);
            
        }
        clearForm();
    })

});

// $(document).ready(function () {

// $("#listBtn").click (function (){
//     let userColorInput = $("#colorList").val();
//     let userTextInput = $("#textList").val();
//     let userFontSizeInput = $("#fontSizeList");
//     let validateText = (userTextInput.length > 0)

// if ( (validateText === true)){
//     $("#formList").append (`<ul id="newUl"></ul>`);
//     let words = userTextInput.split(",");
//    for (let i=0; i<words.length;i++)
// {
//     $("#newUl").append (`<li> ${words[i]} </li>`);
//     let haha = $("li");
//     haha.css ("color",userColorInput); 
//     haha.css ("fontSize", `${ userFontSizeInput.val()}px`); 
    
// }

// }


// })
// })