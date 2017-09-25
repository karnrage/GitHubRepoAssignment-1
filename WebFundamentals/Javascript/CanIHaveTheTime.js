var hour = 9
var minute = 50;
var period = "AM"

var str = "It's";

if (minute > 30) 
    {str += "almost" + (hour + 1)}
else{
    str += "just after" + hour}
if (period == "PM"){
    str += "in the evening." }
else{
    str += "in the morning."}

console.log(str)