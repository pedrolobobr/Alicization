

window.addEventListener('load', function () {
    document.getElementById("d03").onclick = function () {
        myFunction()
    };

    function myFunction() {

        var d03 = (Math.random() * 3 + 1);
        var d03convertido = parseInt(d03)
        document.getElementById('resultadoDados').value = d03convertido;
    }
});

window.addEventListener('load', function () {
    document.getElementById("d06").onclick = function () {
        myFunction()
    };

    function myFunction() {

        var d06 = (Math.random() * 6 + 1);
        var d06convertido = parseInt(d06);
        document.getElementById('resultadoDados').value = d06convertido;
    }
});

window.addEventListener('load', function () {
    document.getElementById("d09").onclick = function () {
        myFunction()
    };

    function myFunction() {

        var d09 = (Math.random() * 9 + 1);
        var d09convertido = parseInt(d09);
        document.getElementById('resultadoDados').value = d09convertido;
    }
});

window.addEventListener('load', function () {
    document.getElementById("d10").onclick = function () {
        myFunction()
    };

    function myFunction() {

        var d10 = (Math.random() * 10 + 1);
        var d10convertido = parseInt(d10);
        document.getElementById('resultadoDados').value = d10convertido;
    }
});

window.addEventListener('load', function () {
    document.getElementById("d12").onclick = function () {
        myFunction()
    };

    function myFunction() {

        var d12 = (Math.random() * 12 + 1);
        var d12convertido = parseInt(d12);
        document.getElementById('resultadoDados').value = d12convertido;
    }
});

window.addEventListener('load', function () {
    document.getElementById("d20").onclick = function () {
        myFunction()
    };

    function myFunction() {

        var d20 = (Math.random() * 20 + 1);
        var d20convertido = parseInt(d20);
        document.getElementById('resultadoDados').value = d20convertido;
    }
});
window.addEventListener('load', function () {
    document.getElementById("bookdropmenu").onclick = function () {
        myFunction()
    };

    function myFunction() {
        /* Textox*/
        var inputtextox = document.getElementById("textox").value;
         /* status01*/
        var inputstatusinput1 = document.getElementById("statusinput1").value;
        var inputvalueinput1 = document.getElementById("valueinput1").value;
          /* status02*/
        var inputstatusinput2 = document.getElementById("statusinput2").value;
        var inputvalueinput2 = document.getElementById("valueinput2").value;
            /* status03*/
        var inputstatusinput3 = document.getElementById("statusinput3").value;
        var inputvalueinput3 = document.getElementById("valueinput3").value;
          /* status04*/
        var inputstatusinput4 = document.getElementById("statusinput4").value;
        var inputvalueinput4 = document.getElementById("valueinput4").value;
            /* status05*/
        var inputstatusinput5 = document.getElementById("statusinput5").value;
        var inputvalueinput5 = document.getElementById("valueinput5").value;
          /* status06*/
        var inputstatusinput6 = document.getElementById("statusinput6").value;
        var inputvalueinput6 = document.getElementById("valueinput6").value;
            /* status07*/
        var inputstatusinput7 = document.getElementById("statusinput7").value;
        var inputvalueinput7 = document.getElementById("valueinput7").value;
          /* status08*/
        var inputstatusinput8 = document.getElementById("statusinput8").value;
        var inputvalueinput8 = document.getElementById("valueinput8").value;
            /* status09*/
        var inputstatusinput9 = document.getElementById("statusinput9").value;
        var inputvalueinput9 = document.getElementById("valueinput9").value;
          /* status10*/
        var inputstatusinput10 = document.getElementById("statusinput10").value;
        var inputvalueinput10 = document.getElementById("valueinput10").value;
            /* status11*/
        var inputstatusinput11 = document.getElementById("statusinput11").value;
        var inputvalueinput11 = document.getElementById("valueinput11").value;
          /* status12*/
        var inputstatusinput12 = document.getElementById("statusinput12").value;
        var inputvalueinput12 = document.getElementById("valueinput12").value;
            /* status13*/
        var inputstatusinput13 = document.getElementById("statusinput13").value;
        var inputvalueinput13 = document.getElementById("valueinput13").value;
          /* status14*/
        var inputstatusinput14 = document.getElementById("statusinput14").value;
        var inputvalueinput14 = document.getElementById("valueinput14").value;
        
        let blob = new Blob(['{ "status01": { "inputstatusinput1": "'+inputstatusinput1+'", "inputvalueinput1": "'+inputvalueinput1+'" }, "status02": { "inputstatusinput2": "'+inputstatusinput2+'", "inputvalueinput2": "'+inputvalueinput2+'" }, "status03": { "inputstatusinput3": "'+inputstatusinput3+'", "inputvalueinput3": "'+inputvalueinput3+'" }, "status04": { "inputstatusinput4": "'+inputstatusinput4+'", "inputvalueinput4": "'+inputvalueinput4+'" }, "status05": { "inputstatusinput5": "'+inputstatusinput5+'", "inputvalueinput5": "'+inputvalueinput5+'" }, "status06": { "inputstatusinput6": "'+inputstatusinput6+'", "inputvalueinput6": "'+inputvalueinput6+'" }, "status07": { "inputstatusinput7": "'+inputstatusinput7+'", "inputvalueinput7": "'+inputvalueinput7+'" }, "status08": { "inputstatusinput8": "'+inputstatusinput8+'", "inputvalueinput1": "'+inputvalueinput8+'" }, "status09": { "inputstatusinput9": "'+inputstatusinput9+'", "inputvalueinput9": "'+inputvalueinput9+'" }, "status10": { "inputstatusinput10": "'+inputstatusinput10+'", "inputvalueinput10": "'+inputvalueinput10+'" }, "status11": { "inputstatusinput11": "'+inputstatusinput11+'", "inputvalueinput11": "'+inputvalueinput11+'" }, "status12": { "inputstatusinput12": "'+inputstatusinput12+'", "inputvalueinput12": "'+inputvalueinput12+'" }, "status13": { "inputstatusinput13": "'+inputstatusinput13+'", "inputvalueinput13": "'+inputvalueinput13+'" }, "status14": { "inputstatusinput14": "'+inputstatusinput14+'", "inputvalueinput14": "'+inputvalueinput14+'" }, "textox": { "inputtextox": "'+inputtextox+'"}}'
    ],
        {
            type: "text/plain;charset=utf-8" 
        });
        saveAs(blob, "PLRPG" + ".json");
    }
});

