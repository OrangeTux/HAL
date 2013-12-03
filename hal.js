// Get value from localStorage. 
function getValue(key, callback) {
    chrome.runtime.sendMessage({method: 'getLocalStorage', key: key}, function(response) {
        callback(response.data)
    });
};

// Fill and submit login form.
function fillForm() {
    if($('#logonForm').length == 1) {

        getValue('username', function(value) {
            console.log('Username ' + value)
            $('input#username').val(value);
        });

        getValue('password', function(value) {
            console.log('Password ' + value)
            $('input#password').val(value);
        });
    }

    //window.setTimeout(1000);
    //$('#SubmitCreds').click();
}

fillForm()
