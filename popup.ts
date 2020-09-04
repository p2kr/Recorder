let recButton = document.getElementById('recButton');

// chrome.storage.sync.get('color', function (data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });

recButton.onclick = function (element) {
    // let color = element.target.value;
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         { code: 'document.body.style.backgroundColor = "' + color + '";' });
    // });

    chrome.storage.sync.get('color', function (data) {
        recButton.style.backgroundColor = data.color;
        recButton.setAttribute('value', data.color);
    });

};

