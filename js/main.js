window.onload = function(){ 
    var employeeNameVbl = 'Mike Mohr';
    var lastLogInDateVbl = 'April 13, 2020 01:34 PM CST';
    var currWeekWorkedHoursVbl = 8;
    var prevWeekWorkedHoursVbl = 40;
    var totVacHoursVbl = 200;
    var takenVacHoursVbl = 24;
    var remainingVacHoursVbl = 176;
    var jobTitleVbl = 'Software Developer';
    var homeAddrVbl = '853 East Belleview St., Apt. 209, Winona, MN 55987';
    var homePhoneVbl = '(507) 474-5349';
    var cellPhoneVbl = '(507) 458-8122';
    var workPhoneVbl = '(507) 474-5349';
    var workEmailVbl = 'mmohr@rtpcompany.com';
    var personalEmailVbl = 'mmohr.55987@gmail.com';
    var addr1Vbl = '853 East Belleview St.';
    var addr2Vbl = 'Apt. 209';
    var cityVbl = "Winona";
    var stateVbl = "MN";
    var zipVbl = "55987";
    document.getElementById('employeeName').innerHTML = employeeNameVbl;
    document.getElementById('lastLogInDate').innerHTML = lastLogInDateVbl;
    document.getElementById('currWeekWorkedHours').innerHTML = currWeekWorkedHoursVbl;
    document.getElementById('prevWeekWorkedHours').innerHTML = prevWeekWorkedHoursVbl;
    document.getElementById('totVacHours').innerHTML = totVacHoursVbl;
    document.getElementById('takenVacHours').innerHTML = takenVacHoursVbl;
    document.getElementById('remainingVacHours').innerHTML = remainingVacHoursVbl;
    document.getElementById('jobTitle').innerHTML = jobTitleVbl;
    document.getElementById('jobTitle').innerHTML = jobTitleVbl;
    document.getElementById('homeAddr').innerHTML = homeAddrVbl;
    document.getElementById('homePhone').innerHTML = homePhoneVbl;
    document.getElementById('cellPhone').innerHTML = cellPhoneVbl;
    document.getElementById('workPhone').innerHTML = workPhoneVbl;
    document.getElementById('personalEmail').innerHTML = personalEmailVbl;
    document.getElementById('workEmail').innerHTML = workEmailVbl;
    document.getElementById('addr1').value = addr1Vbl;
    document.getElementById('addr2').value = addr2Vbl
    document.getElementById('city').value = cityVbl;
    document.getElementById('state').value = stateVbl;
    document.getElementById('zip').value = zipVbl;
}

var slideInterval = 6000;
function getFigures(){
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward(){
    var pointer;
    var figures = getFigures();
    for (var i=0; i < figures.length; i++){
        if (figures[i].className == 'visible'){
            figures[i].className = '';
            pointer = i;    
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startplayback() {
    setTimeout(moveForward, slideInterval);
}

startplayback();


