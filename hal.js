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
    $('#SubmitCreds').click();
}

fillForm(submitForm)
