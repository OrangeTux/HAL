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

// Submit the login form.
function submitForm() {
    $('#logonForm').submit();
}

// Check if error div contains input, if not fill and submit form.
if($('.wrng').html() == '') {
    fillForm(submitForm);
} else {
    // TODO Create nice error message and refer to options page.
    console.log('Failed');
}
