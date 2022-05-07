window.onload = function(){
    //002----------スタートボタンをクリックして発火--------------------------------------
                var start = document.getElementById('start');
                start.addEventListener('click',count_start, false);
    //003----------ストップボタンをクリックして発火--------------------------------------
                var stop = document.getElementById("stop");
                stop.addEventListener("click",count_stop, false);
            }     
    //-----------------------------------------------------------------------------
    //変数の定義---------------------------------------------------------------------
        var count   = 10;     //カウントダウンの数字を格納する変数  3分なので180
        var sec     = 0;       //残り時間「秒」を格納する変数
        var start_f = false; 
        var interval;
    //-----------------------------------------------------------------------------
    
    //004----------スタート開始------------------------------------------------------
    function count_start(){
    //0041------------二度押しを防止する
            if (start_f === false) {
    //0042------------1秒毎にcont_down関数を呼び出す
              interval = setInterval(count_down,1000);
              start_f = true;
            }
        }
    //-----------------------------------------------------------------------------
    
    //005------------カウントダウンの開始---------------------------------------------
        function count_down(){
    //006--------------------------------------------------------------------------
            if(count === 1){
                var display = document.getElementById("default");
                display.style.color = 'red';
                display.innerHTML = "終了！";
                clearInterval(interval);
    //007-------------------------------------------------------------------------
            } else {
    //008-------------------------------------------------------------------------
                count--;
    //010------------60秒で割ったあまりが秒となる-------------------------------------
                sec = count % 60;
                var count_down = document.getElementById("default");
                count_down.innerHTML = ("0"+sec).slice(-2);
            }
        }
    
    //006-----------ストップボタンの押下---------------------------------------
        function count_stop(){
            clearInterval(interval);
            start_f = false;
        }
    
    //007-----------リセットボタンの押下---------------------------------------
        function count_reset(){
           clearInterval(interval);
            count = 180;
            start_f = false;
            var count_down = document.getElementById("default");
            count_down.style.color = 'black';
            count_down.innerHTML = "10";
        }    