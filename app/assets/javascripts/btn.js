window.addEventListener("load", function(){
    var target = document.getElementById("btn");

target.addEventListener('click', function(){
    window.setTimeout(function(){
        alert('もう一度やる場合リロードしてください');
    },12000);
});
});