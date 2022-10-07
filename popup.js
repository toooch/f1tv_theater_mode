// uur 1
document.getElementById('1').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[0].classList.add('cancelled')` });
    });
});

// uur 2
document.getElementById('2').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[1].classList.add('cancelled')` });
    });
});

// uur 3
document.getElementById('3').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[2].classList.add('cancelled')` });
    });
});

// uur 4
document.getElementById('4').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[3].classList.add('cancelled')` });
    });
});

// uur 5
document.getElementById('5').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[4].classList.add('cancelled')` });
    });
});

// uur 6
document.getElementById('6').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[5].classList.add('cancelled')` });
    });
});

// uur 7
document.getElementById('7').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[6].classList.add('cancelled')` });
    });
});

// uur 8
document.getElementById('8').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, { code: `document.getElementsByClassName("appointmentlist")[1].children[7].classList.add('cancelled')` });
    });
});

