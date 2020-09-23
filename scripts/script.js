// //when I click element with following ID
// document.getElementById("burger").addEventListener("click", myFunction);
// // this function is on
// function myFunction() {
//     var element = document.getElementById("burger");
//     element.classList.toggle("change");
//     var element2 = document.getElementById("headerNav");
//     element2.classList.toggle("header__nav--mobile");
// }
// jquery:
$( "#burger" ).click(function() {
    $( "#burger" ).toggleClass( "change" );
    $( "#headerNav" ).toggleClass( "header__nav--mobile" );
});

$( ".return-to-top-icon" ).click(function() {
    // $( ".return-to-top-icon" ).toggleClass( "buttonpressed" );

    $(".return-to-top-icon")
        .addClass('buttonpressed')
        .delay(1000)
        .queue(function(next){
            $(this).removeClass('buttonpressed');
            next();
        })
});

// $( "#burger" ).click(function() {
//     // $( ".return-to-top-icon" ).toggleClass( "buttonpressed" );
//
//     $(".header__nav")
//         .addClass('buttonpressed')
//         .delay(1000)
//         .queue(function(next){
//             $(this).removeClass('buttonpressed');
//             next();
//         })
// });