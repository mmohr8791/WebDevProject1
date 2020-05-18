// This js is for populating data in the profile.html and changepassword.html pages
//                                                        
window.onload = function() { 
    var employeeFName = 'Mike';
    var employeeLName = 'Mohr';
    var employeeName = employeeFName + ' ' + employeeLName;
    var userName = 'mmohr12324';
    var passWord = '************';
    var homePhone = '';   // '(507) 111-1111'
    var cellPhone = '(507) 458-8122';
    var workPhone = '(507) 474-5349';
    var workEmail = 'mmohr@rtpcompany.com';
    var personalEmail = 'mmohr.55987@gmail.com';
    var addr1 = '853 East Belleview St.';
    var addr2 = 'Apt. 209';
    var city = "Winona";
    var state = "MN";
    var zip = "55987";
    document.getElementById('employeeName_Profile').value = employeeName;
    document.getElementById('userName_Profile').value = userName;
    document.getElementById('passWord_Profile').value = passWord;
    document.getElementById('addr1_Profile').value = addr1;
    document.getElementById('addr2_Profile').value = addr2;
    document.getElementById('city_Profile').value = city;
    document.getElementById('state_Profile').value = state;
    document.getElementById('zip_Profile').value = zip;
    document.getElementById('homePhone_Profile').value = homePhone;
    document.getElementById('cellPhone_Profile').value = cellPhone;
    document.getElementById('workPhone_Profile').value = workPhone;
    document.getElementById('workEmail_Profile').value = workEmail;
    document.getElementById('personalEmail_Profile').value = personalEmail;
}