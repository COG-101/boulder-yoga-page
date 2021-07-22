function classDateTime() {

    var date, time;
    date = document.querySelectorAll('.days li');
    time = document.querySelectorAll('.times li');

    for (i = 0; i < date.length; i++) {
        date[i].style.color = '#FFEFEF';
        time[i].style.color = '#E2E1FF';
    }

    document.getElementById('card1-date1').innerHTML = 'Monday';
    document.getElementById('card1-date2').innerHTML = 'Tuesday';
    document.getElementById('card1-date3').innerHTML = 'Thursday';
    document.getElementById('card1-date4').innerHTML = 'Saturday';
    document.getElementById('card1-date5').innerHTML = 'Sunday';
    document.getElementById('card1-time1').innerHTML = '7am - 8am';
    document.getElementById('card1-time2').innerHTML = '1pm - 2pm';
    document.getElementById('card1-time3').innerHTML = '7pm - 8pm';
    document.getElementById('card1-time4').innerHTML = '10am - 11am';
    document.getElementById('card1-time5').innerHTML = '2pm - 3pm';


    document.getElementById('card2-date1').innerHTML = 'Monday';
    document.getElementById('card2-date2').innerHTML = 'Tuesday';
    document.getElementById('card2-date3').innerHTML = 'Thursday';
    document.getElementById('card2-date4').innerHTML = 'Saturday';
    document.getElementById('card2-date5').innerHTML = 'Sunday';
    document.getElementById('card2-time1').innerHTML = '1pm - 2pm';
    document.getElementById('card2-time2').innerHTML = '6pm - 7pm';
    document.getElementById('card2-time3').innerHTML = '7am - 8am';
    document.getElementById('card2-time4').innerHTML = '11am - 12pm';
    document.getElementById('card2-time5').innerHTML = '3pm - 4pm';


    document.getElementById('card3-date1').innerHTML = 'Monday';
    document.getElementById('card3-date2').innerHTML = 'Tuesday';
    document.getElementById('card3-date3').innerHTML = 'Thursday';
    document.getElementById('card3-date4').innerHTML = 'Saturday';
    document.getElementById('card3-date5').innerHTML = 'Sunday';
    document.getElementById('card3-time1').innerHTML = '7pm - 8pm';
    document.getElementById('card3-time2').innerHTML = '7am - 8pm';
    document.getElementById('card3-time3').innerHTML = '1pm - 2pm';
    document.getElementById('card3-time4').innerHTML = '12pm - 1pm';
    document.getElementById('card3-time5').innerHTML = '4pm - 5pm';
}

// I think I could have used another loop to add the dates in this example, but it limits the flexibility needed if this were real site.