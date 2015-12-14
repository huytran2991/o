var handle_error_form = function(errors){
   $('.wrap-error').html('');
   $.each(errors,function(){
       var wrap = $('#wrap_'+this.id);
       wrap.addClass('has-error');
       wrap.find('.wrap-error').append('<div>'+this.message+'</div>');
   });
}