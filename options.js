// Save options to localStorage.
function save_options() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    localStorage['username'] = username;
    localStorage['password'] = password;

    var msg = document.getElementById('message');
    msg.innerHTML = 'Saved!';
    msg.style.display = 'block';
}

// Load data into form.
function restore_options() {
    var username = localStorage['username'] || '';
    var password = localStorage['password'] || '';

    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
};

// Attach the form submit listener
var form = document.getElementById('form');
var formSubmit = function(event) {
    save_options();
    event.preventDefault();
}

if(form.addEventListener) {
    // Chrome, IE somewhat, Firefox etc.
    form.addEventListener('submit', formSubmit, false);
} else if(form.attachEvent) {
    // Old IE..
    form.attachEvent('onSubmit', formSubmit);
} 

// Add the document load event listener to restore the saved options
if(window.addEventListener) {
    window.addEventListener('load', restore_options, false);
} else if(document.attachEvent) {
    // Because IE support
    document.attachEvent('onreadystatechange', restore_options);
} else {
    // Fallback
    window.attachEvent('onload', restore_options);
}
