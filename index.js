window.onload = function(){ 
    document.getElementById("d20").onclick = function() {myFunction()};

    function myFunction() {
         
        console.log(Math.random() * 10 + 1);
        
    } 
};