// Save options to localStorage.
function save_options() {
    var username = $('#username').val();
    var password = $('#password').val();
    
    localStorage['username'] = username;
    localStorage['password'] = password;

    $('#message').html('Saved!').show();
}

// Load data into form.
function restore_options() {
    var username = localStorage['username'] || '';
    var password = localStorage['password'] || '';

    $('#username').val(username);
    $('#password').val(password);
};

$('#form').submit(function(event) {
    save_options();
    event.preventDefault();
});

$().ready(restore_options);
