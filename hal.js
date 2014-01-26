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
    if($('#logonForm').length == 1) {

        getValue('username', function(value) {
            $('input#username').val(value);
        });

        getValue('password', function(value) {
            $('input#password').val(value);
        });
    }

    setTimeout(function() {
        callback()
    }, 1000);
}

// Check if user filled in the correct password, if not, user is returned to same page.
function checkCorrectPassword(prevLink) {
    if(document.URL!=prevLink) {
        return true;
    }
    return false;
}

// Submit the login form.
function submitForm() {
    $('#logonForm').submit();
}

// Check if error div contains input, if not fill and submit form.
if(document.contains('.wrng') && $('.wrng').html() == '') {
    fillForm(submitForm);
} else if($('.wrng') == null) {
    // Do nothing.
} else {
    $('body').prepend('<div>Hanze Auto Login: Login failed. Please change login credentials on <a href="' + chrome.extension.getURL("options.html") + '" target="_blanc">options page</a>.</div>');
}
