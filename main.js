document.getElementById('bars').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('open');
});

document.addEventListener('onmouseup', function (e) {
    var bars = document.getElementById("bars");
    if(!bars.is(e.target) && bars.has(e.target).length === 0 && window.innerWidth < 933){
        document.getElementById("navbar").classList.remove('open');
    }
});