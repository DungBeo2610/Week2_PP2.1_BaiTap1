let year = parseInt(prompt("year"));
if (year % 4 ==0) {
    if (year % 100 == 0) {
        if ( year %400 == 0){
            isLeapYear = true;

        }
    }
    else {
        isLeapYear =true;
    }
}
if (isLeapYear) {
    alert(year + "is a Leap Year");
} else {
    alert(year +"is not a Leap Year")
}
