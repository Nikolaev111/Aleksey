

function func_1(){
	// покупка
	var sel_2 = document.getElementById('mySelect2')
	var sel_3 = document.getElementById('mySelect3')
	var sel_4 = document.getElementById('mySelect4')
	var sel_5 = document.getElementById('mySelect5')
	var sel = document.getElementById('mySelect').selectedIndex;
	var options = document.getElementById('mySelect').options;

	if (options[sel].value == 2){
		sel_2.style.display = "block";
	}
	else if(options[sel].value != 2){
		sel_2.style.display = "none";
	}
	

	if (options[sel].value == 3){
		sel_3.style.display = "block";
	}
	else if(options[sel].value != 3){
		sel_3.style.display = "none";
	}

	if (options[sel].value == 4){
		sel_4.style.display = "block";
	}
	else if(options[sel].value != 4){
		sel_4.style.display = "none";
	}


	if (options[sel].value == 5){
		sel_5.style.display = "block";
	}
	else if(options[sel].value != 5){
		sel_5.style.display = "none";
	}

}


var slideIndex = 1;
showSlides(slideIndex);

function plusSliders(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySliders");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length){
		slideIndex = 1
	}
	if (n < 1){
		slideIndex=slides.length
	}
	for ( i = 0; i < slides.length; i++){
		slides[i].style.display="none";
	}
	slides[slideIndex-1].style.display = "block";

}




function validate_form ( )
{
	valid = true;

        if ( document.contact_form.username.value == "" || 
         document.contact_form.username.value == " " &&
        	document.contact_form.password.value == "" || 
         document.contact_form.password.value == " ")
        {
                document.contact_form.username.style.border = "1px solid red";
                document.contact_form.password.style.border = "1px solid red";
                valid = false;
        }
        else{
        	 document.contact_form.username.style.border = "none";
        	 document.contact_form.password.style.border = "none";
        }
        return valid;
}


function fun_pokypka(){
	valids = true;

        if ( document.pokypka.name.value == "" || 
         document.pokypka.name.value == " ")
        {
                document.pokypka.name.style.border = "1px solid red";
                valids = false;
        }
        else{
        	 document.pokypka.name.style.border = "1px solid black";
        	
        }

        if ( document.pokypka.names.value == "" || 
         document.pokypka.name.value == " ")
        {
                document.pokypka.names.style.border = "1px solid red";
                valids = false;
        }
        else{
        	 document.pokypka.names.style.border = "1px solid black";
        	
        }

          if ( document.pokypka.phone.value == "" || 
         document.pokypka.phone.value == " ")
        {
                document.pokypka.phone.style.border = "1px solid red";
                valids = false;
        }
        else{
        	 document.pokypka.phone.style.border = "1px solid black";
        	
        }


        if ( document.pokypka.email.value == "" || 
         document.pokypka.email.value == " ")
        {
                document.pokypka.email.style.border = "1px solid red";
                valids = false;
        }
        else{
        	 document.pokypka.email.style.border = "1px solid black";
        	
        }

           if ( document.pokypka.tema.value == "" || 
         document.pokypka.tema.value == " ")
        {
                document.pokypka.tema.style.border = "1px solid red";
                valids = false;
        }
        else{
        	 document.pokypka.tema.style.border = "1px solid black";
        	
        }

        
        return valids;
}