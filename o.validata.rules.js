/*required*/
$.validator.rules.required = function(val,param,elment){
    if(val != "") return true;
    return false;
}
$.validator.message.required = "The {label} field is required.";

/*valid_email*/
$.validator.rules.valid_email = function(val,param,elment){
    if(typeof val != "undefined" && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val)) return true;
    return false;
}
$.validator.message.valid_email = "The {label} field does not match the %s field.";

/*alpha*/
$.validator.rules.alpha = function(val,param,elment){
    if(typeof val != "undefined" && /^[a-z]+$/i.test(val)) return true;
    return false;
}
$.validator.message.alpha = "The {label} field must only contain alphabetical characters.";

/*alpha_numeric*/
$.validator.rules.alpha_numeric = function(val,param,elment){
    if(typeof val != "undefined" && /^[a-z0-9]+$/i.test(val)) return true;
    return false;
}
$.validator.message.alpha_numeric = "The {label} field must only contain alpha-numeric characters.";

/*alpha_dash*/
$.validator.rules.alpha_dash = function(val,param,elment){
    if(typeof val != "undefined" && /^[a-z0-9_\-]+$/i.test(val)) return true;
    return false;
}
$.validator.message.alpha_dash = "The {label} field must only contain alpha-numeric characters, underscores, and dashes.";

/*numeric*/
$.validator.rules.numeric = function(val,param,elment){
    if(typeof val != "undefined" && /^[0-9]+$/.test(val)) return true;
    return false;
}
$.validator.message.numeric = "The {label} field must contain only numbers.";

/*integer*/
$.validator.rules.integer = function(val,param,elment){
    if(typeof val != "undefined" && /^\-?[0-9]+$/.test(val)) return true;
    return false;
}
$.validator.message.integer = "The {label} field must contain an integer.";

/*decimal*/
$.validator.rules.decimal = function(val,param,elment){
    if(typeof val != "undefined" && /^\-?[0-9]*\.?[0-9]+$/.test(val)) return true;
    return false;
}
$.validator.message.decimal = "The {label} field must contain a decimal number.";

/*is_natural*/
$.validator.rules.is_natural = function(val,param,elment){
    if(typeof val != "undefined" && /^[0-9]+$/i.test(val)) return true;
    return false;
}
$.validator.message.is_natural = "The {label} field must contain only positive numbers.";

/*is_natural_no_zero*/
$.validator.rules.is_natural_no_zero = function(val,param,elment){
    if(typeof val != "undefined" && /^[1-9][0-9]*$/i.test(val)) return true;
    return false;
}
$.validator.message.is_natural_no_zero = "The {label} field must contain a number greater than zero.";

/*valid_ip*/
$.validator.rules.valid_ip = function(val,param,elment){
    if(typeof val != "undefined" && /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i.test(val)) return true;
    return false;
}
$.validator.message.valid_ip = "The {label} field must contain a valid IP.";

/*valid_base64*/
$.validator.rules.valid_base64 = function(val,param,elment){
    if(typeof val != "undefined" && /[^a-zA-Z0-9\/\+=]/i.test(val)) return true;
    return false;
}
$.validator.message.valid_base64 = "The {label} field must contain a base64 string.";

/*valid_url*/
$.validator.rules.valid_url = function(val,param,elment){
    if(typeof val != "undefined" && /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(val)) return true;
    return false;
}
$.validator.message.valid_url = "The {label} field must contain a valid URL.";