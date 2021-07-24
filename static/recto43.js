
	$(document).ready(function() {
    var max_fields      = 25; //maximum input boxes allowed
    var max_fields_1   = 15; //maximum input boxes allowed
    var max_fields_2   = 15; //maximum input boxes allowed
    // {{bkl}}

    
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var add_button1     = $(".add_field_button1"); //Add button ID
    var wrapper1        = $(".input_fields_wrap1"); //Fields wrapper
    var add_button2    = $(".add_field_button2"); //Add button ID
    var wrapper2       = $(".input_fields_wrap2"); //Fields wrapper

    var g= "{{bkl}}";
    console.log(g)



   
    var x1 = 1; //initlal text box count
    var x2 = 1;
    var x3 = 1;
	
	
   $(add_button).click(function(e){ 
     //on add input button click
    //  var x1=1;
        e.preventDefault();
        if(x1 < max_fields){ //max input box allowed
          // var a=document.getElementById("ck4");
          // a.value = x1;


          
	
		     //text box increment
            $(wrapper).append('<div><span style="display:inline-block; color: red; "><input type="text" name="mytext[]"></span><span style="display:inline-block; color: black; margin:10px 30px; ">   <label for="mkl2">Amount</label>  <input type="text" name="mytext[]" id="mkl2" >  <select name="mytext[]" id="cars"><option value="Cups">Cups</option><option value="ml">ml</option><option value="gm">gm</option><option value="lbs">lbs</option><option value="pcs">pcs</option></select></span> <a href="#" class="remove_field">  Remove </a></div>'); //add input box
            x1++; 
	  }
    });
    
    


    $(add_button1).click(function(e){
       //on add input button click
      //  var x2=1;
      e.preventDefault();
      if(x2 < max_fields_1){ //max input box allowed

       //text box increment
          $(wrapper1).append('<div><input type="text" name="mytext2[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
          x2++; 
  }
  });
  $(add_button2).click(function(e){
       //on add input button click
      //  var x2=1;
      e.preventDefault();
      if(x3 < max_fields_2){ //max input box allowed

       //text box increment
          $(wrapper2).append('<div><input type="text" name="mytext3[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
          x3++; 
  }
  });

   
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
      
       
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    })

    $(wrapper1).on("click",".remove_field", function(e){ //user click on remove text
      
       
      e.preventDefault(); 
      $(this).parent('div').remove(); 
      x--;
      })

    $(wrapper2).on("click",".remove_field", function(e){ //user click on remove text
      
       
        e.preventDefault(); 
        $(this).parent('div').remove(); 
        x--;
        })
});
	
	// </script>