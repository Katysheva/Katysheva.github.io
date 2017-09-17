let responseField = document.querySelector('#response');

let searchStr = window.location.search;
let regExp = new RegExp('(\\?test=\\w{3,}@(gmail\\.com|yandex\\.ru)$)');

responseField.innerText = (searchStr.search(regExp) !== -1) ? 'Yes' : 'No';