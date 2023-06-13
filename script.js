let date = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
document.getElementById('p1').innerHTML = "Hello! It is currently" + " " + date + ".";

function nameDay() {
    let a = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let r = weekday[a.getDay()];
    return r + "!";
}

document.getElementById('p2').innerHTML = "The day of the week is" + " " + nameDay();
