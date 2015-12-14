$.validator = {
    rules : {},
    message: {},
    check: function(field){
        var    Validator = this;
        var elm = $('#'+field.id);
        var val = elm.val();
        var rules = field.rules.split("|");
        if(!field.label) field.label = field.id;
        
        if(field.not) 
        {
            if(field.not()) return;
        }
          
        //perform
        $.each(rules,function(){
            //perform string to param rule
            str_rule = this.toString();
            pattern = /\[(.*?)\]/g;
            array_rule = pattern.exec(str_rule);
            rule = str_rule.replace(pattern,"");
            //console.log(rule);
            if(array_rule)
            {
                param = array_rule[1].split(",");
            }
            else{
                param = [];
            }
            //check rule
            if(!Validator.rules[rule](val,param,elm))
            {
                //perform create message
                var message = Validator.message[rule];
               
                if(typeof field.message != 'undefined')
                {
                    if(typeof field.message[rule] != 'undefined')
                   {
                        message = field.message[rule];
                   }
                    
                }
                
                message = message.replace("{label}",field.label);
                $.each(param,function(index){
                    message = message.replace("{assign"+index+"}",this);
                });
                
                //preform add error
                Validator.error.push({
                "message":message,
                "id":field['id'],
                "elm":elm,
                });
            }
        });
    },
    error:[]
}

//preform for form
var FormValidator = function(form,fields,callback){
    if(typeof form == "string" ) form = $('#'+form);
    //callback onsubmit
    form.submit(function( event ) {
        
        var Validator = $.validator;
        Validator.error = [];
        $.each(fields,function(index){
            Validator.check(this);
        });
        
        //end check
        if (Validator.error.length) {
            callback(Validator.error);
            event.preventDefault();
        }
        else{
           // event.preventDefault();
            return true;
        }
    });
}
//preform for input
var InputValidator = function(input,field,callback,event){
    var elm;
    if(typeof event == undefined) event = 'change';
    if(typeof input == "string" )
    {
        elm = $('#'+input);
    }
    else{
        elm = input;
    }
    elm.on(event,function(){
        var Validator = $.validator;
        Validator.error = [];
        Validator.check(field);
    
        if (Validator.error.length) {
            callback(Validator.error);
            event.preventDefault();
        }
        else{
            event.preventDefault();
        }
    });
};



