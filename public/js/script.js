$(document).ready(function(){
    $('#regForm').submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();

        // Get form data
        var formData = {
            'firstName': $('input[name=fname]').val(),
            'lastName': $('input[name=lname]').val(),
            'email': $('input[name=email]').val()
        };

        // Send the POST request using AJAX
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/users',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            // Handle success response here
            console.log(data);
        })
        .fail(function(xhr, status, error) {
            // Handle error response here
            console.error(xhr.responseText);
        });
    });
});
// let $regForm = $('#regForm');
// function handleSubmit(event) {
//     event.preventDefault();

//     // Get form data
//     var formData = {
//         'firstName': $('input[name=fname]').val(),
//         'lastName': $('input[name=lname]').val(),
//         'email': $('input[name=email]').val()
//     };

//     // Send the POST request using AJAX
//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/users',
//         data: formData,
//         dataType: 'json',
//         encode: true
//     })
//     .done(function(data) {
//         // Handle success response here
//         console.log(data);
//     })
//     .fail(function(xhr, status, error) {
//         // Handle error response here
//         console.error(xhr.responseText);
//     });
// }
// $regForm.on('submit', handleSubmit);