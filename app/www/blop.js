$('input[type="text"]').blur(function() {
   if ($(this).val() !== "") {
     $(this).next('label').addClass('showLabel');
     $(this).addClass('hasInput');
   } else {
     $(this).next('label').removeClass('showLabel');
   }
});