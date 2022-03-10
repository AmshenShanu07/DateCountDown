



var startDate = new Date('10/17/2021');
var date = new Date();
var dateString = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
var today = new Date(dateString)
var Difference_In_Time = today.getTime() - startDate.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
document.getElementById('day').innerHTML = Difference_In_Days


document.getElementsByTagName('div')[0].hidden = true