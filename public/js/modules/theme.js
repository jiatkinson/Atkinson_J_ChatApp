function changeRed() {
    document.getElementById("app").classList.remove('blue','black');
    document.getElementById("app").classList.add('red');
}
function changeBlue() {
    document.getElementById("app").classList.remove('black','red');
    document.getElementById("app").classList.add('blue');
}
function changeBlack() {
    document.getElementById("app").classList.remove('blue','red');
    document.getElementById("app").classList.add('black');
}

function changeConcert() {
    document.getElementById("app").classList.remove('arial','indie');
    document.getElementById("app").classList.add('concert');
}
function changeIndie() {
    document.getElementById("app").classList.remove('concert','arial');
    document.getElementById("app").classList.add('indie');
}
function changeArial() {
    document.getElementById("app").classList.remove('concert','indie');
    document.getElementById("app").classList.add('arial');
}

