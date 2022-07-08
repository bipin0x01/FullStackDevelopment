// Leap Year Challenge

function leapyear() {
    var year = prompt("Enter the year\n");
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.getElementById('ly').innerHTML =  `${year} is leap year.`;
            }
            document.getElementById('ly').innerHTML = `${year} is leap year.`;
        }
        document.getElementById('ly').innerHTML = `${year} is leap year.`;
    } else {
        document.getElementById('ly').innerHTML = `${year} is not leap year.`;
    }
}

leapyear();