chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.method == 'getLocalStorage') {
        sendResponse({data: atob(localStorage[request.key])});
    } else if(request.method == 'setLocalStorage') {
        localStorage[request.key] = btoa(request.value);
    } else {
        sendResponse({});
    }
});
