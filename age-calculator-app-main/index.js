const submitButton = document.querySelector('.btn-icon');


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


submitButton.addEventListener('click', function validateDateAndCalculateAge() {
 

    const day = document.getElementById('inputDay').value;
    const month = document.getElementById('inputMonth').value;
    const year = document.getElementById('inputYear').value;

    
    
    if (day === '' || month === '' || year === '') {

        if (day === '') {
            document.getElementById('title1').style.color = 'hsl(0, 100%, 67%)';
            document.getElementById('inputDay').style.border = '1px solid hsl(0, 100%, 67%)';
            document.querySelector('.empty-message1').style.display = 'block';
        }
        
        if (month === '') {
            document.getElementById('title2').style.color = 'hsl(0, 100%, 67%)';
            document.getElementById('inputMonth').style.border = '1px solid hsl(0, 100%, 67%)';
            document.querySelector('.empty-message2').style.display = 'block';
        }

        if (year === '') {
            document.getElementById('title3').style.color = 'hsl(0, 100%, 67%)';
            document.getElementById('inputYear').style.border = '1px solid hsl(0, 100%, 67%)';
            document.querySelector('.empty-message3').style.display = 'block';
        }
        clearAgeOutput();
    }

    else if (isNaN(day) || isNaN(month) || isNaN(year) ||
    day < 1 || day > 31 ||
    month < 1 || month > 12 ||
    year < 1900 || year > new Date().getFullYear()) {
        
        if (day < 1 || day > 31 ) {
            document.getElementById('title1').style.color = 'hsl(0, 100%, 67%)';
            document.getElementById('inputDay').style.border = '1px solid hsl(0, 100%, 67%)';
            document.getElementById('inputMonth').style.border = '1px solid hsl(0, 100%, 67%)';
            document.getElementById('inputYear').style.border = '1px solid hsl(0, 100%, 67%)';
            document.querySelector('.invalid-message1').style.display = 'block';
        }

        if (month < 1 || month > 12 ) {
            document.getElementById('title2').style.color = 'hsl(0, 100%, 67%)';
            document.getElementById('inputDay').style.border = '1px solid hsl(0, 100%, 67%)';
            document.getElementById('inputMonth').style.border = '1px solid hsl(0, 100%, 67%)';
            document.getElementById('inputYear').style.border = '1px solid hsl(0, 100%, 67%)';
            document.querySelector('.invalid-message2').style.display = 'block';
        }

        if (year < 1900 || year > new Date().getFullYear()) {
            document.getElementById('title3').style.color = 'hsl(0, 100%, 67%)';
            document.getElementById('inputDay').style.border = '1px solid hsl(0, 100%, 67%)';
            document.getElementById('inputMonth').style.border = '1px solid hsl(0, 100%, 67%)';   
            document.getElementById('inputYear').style.border = '1px solid hsl(0, 100%, 67%)';
            document.querySelector('.invalid-message3').style.display = 'block';
        }
        clearAgeOutput();

    }else {
        document.getElementById('title1').style.color = 'hsl(0, 1%, 44%)';
        document.getElementById('title2').style.color = 'hsl(0, 1%, 44%)';
        document.getElementById('title3').style.color = 'hsl(0, 1%, 44%)';
        
        document.getElementById('inputDay').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('inputMonth').style.border = '1px solid hsl(0, 0%, 86%)';
        document.getElementById('inputYear').style.border = '1px solid hsl(0, 0%, 86%)';

        document.querySelector('.empty-message1').style.display = 'none';
        document.querySelector('.empty-message2').style.display = 'none';
        document.querySelector('.empty-message3').style.display = 'none';

        
        document.querySelector('.invalid-message1').style.display = 'none';
        document.querySelector('.invalid-message2').style.display = 'none';
        document.querySelector('.invalid-message3').style.display = 'none';

        calculateAge(day, month, year);
    }

    function calculateAge(inputDay, inputMonth, inputYear) {
        var currentDate = new Date();
        var birthDate = new Date(inputYear, inputMonth - 1, inputDay);

        var ageInMilliseconds = currentDate - birthDate;
        var ageInSeconds = ageInMilliseconds / 1000;
        var ageInMinutes = ageInSeconds / 60;
        var ageInHours = ageInMinutes / 60;
        var ageInDays = ageInHours / 24;

        var years = Math.floor(ageInDays / 365);
        var remainingDays = ageInDays % 365;
        var months = Math.floor(remainingDays / 30);
        var days = Math.floor(remainingDays % 30);

        updateAgeOutput(years, months, days);
    }

    function updateAgeOutput(years, months, days) {
        var yearsElement = document.querySelector('.date-output h1:nth-child(1) span');
        var monthsElement = document.querySelector('.date-output h1:nth-child(2) span');
        var daysElement = document.querySelector('.date-output h1:nth-child(3) span');

        yearsElement.textContent = years;
        monthsElement.textContent = months;
        daysElement.textContent = days;
    }

    function clearAgeOutput() {
        var yearsElement = document.querySelector('.date-output h1:nth-child(1) span');
        var monthsElement = document.querySelector('.date-output h1:nth-child(2) span');
        var daysElement = document.querySelector('.date-output h1:nth-child(3) span');

        yearsElement.textContent = '--';
        monthsElement.textContent = '--';
        daysElement.textContent = '--';
    }

    
   

});



