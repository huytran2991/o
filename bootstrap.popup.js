if($.bootstrap == undefined) $.bootstrap = {};

$.bootstrap.popup = {
    open: function (content,option){
        
        var popup = this;
        
        popup.setOption(option);
        //
        html = '';
        $('#'+popup.option.id).remove();
        html +='<div class="modal fade" id="'+popup.option.id+'">';
        html +='<div class="modal-dialog '+popup.option.size+'">';
        
        html +='<div class="modal-content">';
        
        //header
        html +='<div class="modal-header">';
        html +='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
        html +='<h4 class="modal-title">'+popup.option.title+'</h4>';
        html +='</div>';
        
        //body
        html +='<div class="modal-body">';
        html +=content;
        html +='</div>';
        
        //footer
        if(popup.option.button)
        {
            html +='<div class="modal-footer">';
            $.each(popup.option.button,function(key, value){
            
                if(value.class == undefined) value.class = "btn btn-default";
            html +='<button id="'+popup.option.id+'_bt_'+key+'" type="button" ';
                $.each(value,function(key_attr,value_attr){
                    if(key_attr!='click')
                    html +=key_attr+'="'+value_attr+'"';
                });
            html +='>'+value.title+'</button>';
            
            });
            html +=' </div>';
        }
        
        //end .modal-content
        html +='</div>';
        
        //end .modal-dialog
        html +='</div>';
        
        //end .#id
        html +='</div>';
        
        $('body').append(html);
        
        //click event for button
        if(this.option.button)
        {
            $.each(popup.option.button,function(key, value){
            $('#'+popup.option.id+'_bt_'+key).click(value.click);
            });
        }
        
        $('#'+popup.option.id).modal();
       
    },
    
    close: function(){$('#'+this.option.id).modal('hide');},
    setOption: function(option)
    {
        if(option == undefined) option = {};
        if(option.id == undefined) option.id = 'bootstrap_popup';
        if(option.title == undefined) option.title = '&nbsp;';
        if(option.close == undefined) option.close = true;
        if(option.size == undefined) option.size = 'modal-sm';//modal-sm|modal-lg
        if(option.button == undefined) option.button = [
                {
                    title: "Close",
                    "data-dismiss":"modal"
                }
            ];
        this.option = option;
    },
    option:{
        },
    
    //old
    alert: function(content,title){
        var option = {};
       option.title = title;
        this.open(content,option);
    },
    
    confirm:function(content,title,opj_ok,opj_cancel)
    {
        var option = {};
        option.button = [];
        if(opj_ok != undefined)
        {
            if(opj_ok.title == undefined) opj_ok.title = 'OK';
            if(opj_ok['class'] == undefined) opj_ok['class'] = "btn btn-primary";
            option.button.push(opj_ok);
        }
        if(opj_cancel != undefined)
        {
            if(opj_cancel.title == undefined) opj_cancel.title = 'Cancel';
            if(opj_cancel['data-dismiss'] == undefined) opj_cancel['data-dismiss'] = "modal";
            option.button.push(opj_cancel);
        }
        option.title = title;
        this.open(content,option);
    },
    on_hide: function(execute){
        $('#'+this.option.id).on('hidden.bs.modal',execute);
    }
}
