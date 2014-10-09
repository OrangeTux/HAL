// Get value from localStorage. 
function getValue(key, callback) {
    chrome.runtime.sendMessage({
        method: 'getLocalStorage', 
        key: key
    }, function(response) {
        callback(response.data);
    });
};

// Fill the login form.
function fillForm(callback) {
    if(document.getElementById('logonForm') != null) {

        getValue('username', function(value) {
            document.getElementById('username').value = value;
        });

        getValue('password', function(value) {
            document.getElementById('password').value = value;
        });
    }

    setTimeout(function() {
        callback()
    }, 1000);
}

// Submit the login form.
function submitForm() {
    document.getElementById('logonForm').submit();
}

// Check if error div contains input, if not fill and submit form.
var wrngElements = document.getElementsByClassName('wrng');
if(wrngElements.length > 0 && wrngElements[0].innerHTML == '') {
    fillForm(submitForm);
} else if(wrngElements.length == 0) {
    // Do nothing.
} else {
    var body = document.getElementsByTagName('body')[0];
    var warning = document.createElement('div');
    warning.innerHTML = '<div>Hanze Auto Login: Login failed. Please change login credentials on <a href="'  chrome.extension.getURL('options.html')  '" target="_blanc">options page</a>.</div>';
    body.insertBefore(warning, body.firstChild);
}