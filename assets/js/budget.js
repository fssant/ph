//last cleanance 
$('#lastclean').datepicker({
   language:"pt-BR",
   orientation: "bottom"
});

//date picker to limit pool ange in only months
$('#agepool').datepicker({
   language:"pt-BR",
   startView: "months", 
   minViewMode: "months",
   orientation: "bottom",
   format: "mm-yyyy"
})

$(function() {
   // Input radio-group visual controls
   $('.radio-group label').on('click', function(){
      $(this).removeClass('not-active').siblings().addClass('not-active');
   });
});

//function to generate budget according to pool specifications
$( "input[type=radio][name=pool], input[type=radio][name=visit]" ).change(function() {
   // Input radio-group visual controls
   var item1 = $("input[type=radio][name=pool]:checked" ).val();
   var item2 = $( "input[type=radio][name=visit]:checked" ).val();

   if( item1 == 1 && item2 == 3){
      $('#valor').val('200,00');
   }else if(item1 == 1 && item2 == 4){
      $('#valor').val('320,00');
   }else if(item1 == 2 && item2 == 3){
      $('#valor').val('250,00');
   }else if(item1 == 2 && item2 == 4){
      $('#valor').val('400,00');
   }else{
      $('#valor').val('');
   }

});

