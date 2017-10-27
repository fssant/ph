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