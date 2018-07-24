
$('#contact-form').submit(function(e){
  
 var name = document.getElementById ('');
  
  if(!name.value){
    
    alertify.error('please check your entry');
     
    
     }
     
     
     else {
       
       $.ajax({
    url: "https://formspree.io/10385930@mydbs.ie", 
    method: "POST",
    data: $(this)serialize(),
    dataType: "json"
});
       
       
     e.preventDefault()
       
       $(this).get(0).reset
       alertify.success('please check your entry');
       
     
     }
  
  
}
