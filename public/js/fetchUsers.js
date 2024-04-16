$(function() {

    function fetchUsers() {
        $('#mypara').val("Fetching users");
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/users',
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
    }
    fetchUsers();

});