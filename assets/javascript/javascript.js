window.onload = function () {
    document.getElementById('event', pesan)
}
var pesan = prompt("Siapa namamu? ");
if (pesan === '') {
    alert("Yaudah kalo gakmau ngasih tau");
} else if (pesan) {
    alert("SELAMAT DATANG, " + pesan.toUpperCase());
} else {
}
function myname() {
    document.getElementById('namaku').style.color = "rgb(253, 6, 6)";
}
function samename() {
    document.getElementById('namaku').style.color = "#fdfbfb";
}