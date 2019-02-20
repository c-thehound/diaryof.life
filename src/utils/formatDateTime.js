var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'];

// A custom function to format a python datetime object to a redable string
function formatDateTime(s){
    var split_date = s.split('-');
    var year = split_date[0];
    var int_month = split_date[1];
    var str_month = months[parseInt(int_month)-1];
    
    var split_rem = split_date[2].split('T');
    var day = split_rem[0];
    var time_string = split_rem[1];
    var split_time = time_string.split(':');
    var hour = split_time[0];
    var minute = split_time[1];

    var am_or_pm = "";
    if (parseInt(hour) < 12) {
        am_or_pm = "AM";
    } else {
        am_or_pm = "PM";
    }

    var date_string = str_month+". "+day+",  "+year+","+hour+":"+minute+"  "+am_or_pm
    return date_string;
}

export default formatDateTime;