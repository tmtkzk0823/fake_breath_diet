window.addEventListener("load", function(){
    const target = document.getElementById("btn");

target.addEventListener('click', () => {
    window.setTimeout(function(){
        alert('もう一度やる場合リロードしてください');
    },12000);
});
});