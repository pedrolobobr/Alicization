window.onload = function(){ 
    document.getElementById("d20").onclick = function() {myFunction()};

    function myFunction() {
         
        var d20 = (Math.random() * 20 + 1);
        var d20convertido = parseInt(d20);
        alert(d20convertido)
        
    } 
};