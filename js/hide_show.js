function show_hide(){

  // var surname = document.getElementById("div2");
   //var trigger = document.forms['myForm']['trig'].value;
   if(document.getElementById("trig").checked == false){

        document.getElementById("div3").style.display = 'none';

   } else if (document.getElementById("trig").checked == true) {

        document.getElementById("div3").style.display = 'block';

   }

}