const ID1 = "student";
const PASSWORD1 = 12345;
const ID2 = "canteen";
const PASSWORD2 = 12345;
const ID3 = "store";
const PASSWORD3 = 12345;
const ID4 = "photocopy";
const PASSWORD4 = 12345;

let login = document.querySelector('#login-btn');
login.addEventListener('click', function(e) {
    e.preventDefault();
    let loginBox = document.querySelector('#login');
    let passBox = document.querySelector('#pass');
    if (loginBox.value == ID1 && passBox.value == PASSWORD1) {
        window.location.href = '../canteen/Student Portal/Home/Home.html';
    }
    if (loginBox.value == ID2 && passBox.value == PASSWORD2) {
        window.location.href = '../canteen/Canteen/canteen.html';
    }
    if (loginBox.value == ID3 && passBox.value == PASSWORD3) {
        window.location.href = '../canteen/Store/strhome.html';
    }
    if (loginBox.value == ID4 && passBox.value == PASSWORD4) {
        window.location.href = '../canteen/New Folder/phohome.html';
    }

    passBox.value = "";
})