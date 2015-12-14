

/*validata from to*/
$.validator.rules.datefromto = function(val,param,elment){
        dateFormat = param[2];
    
        idFromDate = param[0];
        valFromDate = $('#'+idFromDate).val();
        timeFromDate = $.datepicker.parseDate(dateFormat,valFromDate).getTime();
    
        idToDate = param[1];
        valToDate = $('#'+idToDate).val();
        timeToDate = $.datepicker.parseDate(dateFormat,valToDate).getTime();
        if(timeFromDate > timeToDate) return false;
        else return true;
}
$.validator.message.datefromto = "Ngày chưa đúng";

/*validata date since now*/
$.validator.rules.sincenow = function(val,param,elment){
    dateFormat = param[0];
    time = $.datepicker.parseDate(dateFormat,val).getTime();
    now = new Date().getTime();
    if(time < now) return false;
    else return true;
}
$.validator.message.sincenow = "Chỉ được chọn từ hôm nay";
