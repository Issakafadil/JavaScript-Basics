	
	var num1 = document.getElementById("numOne");
	var num2 = document.getElementById("numTwo");
	var result = document.getElementById("results");

    //you can also call the oniput click event on the input field in the html
    //and pass the add function to it.
    num1.addEventListener("input", add); 
    num2.addEventListener("input", add);



    function add(){
    	var one = parseFloat(num1.value)|| 0;
    	var two = parseFloat(num2.value)|| 0;
        var re = one + two
        result.innerHTML ="Your answer is: "+ re

    }

