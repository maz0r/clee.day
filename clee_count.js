function updateTimeCounter() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const targetMonth = 4;
    const targetDay = 25;
    var targetYear = currentYear;

    if (currentDate >= new Date(currentYear,targetMonth,targetDay,23,59,59,999)){
        targetYear =  currentYear +1;
    }
  
    //const targetDateTime = new Date(targetYear, targetMonth, targetDay);
    const targetDateTime = new Date(Date.UTC(targetYear, targetMonth, targetDay, 7, 0, 0, 0)) // set to 07:00 utc
    const timeDifference = targetDateTime - currentDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    const timeUntilTarget = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    
    const timeElement = document.getElementById("time-counter");
    const yearElement = document.getElementById("time-year");
    if (
      (currentDate.getMonth() === targetMonth && currentDate.getDate() === targetDay) ||
      (currentDate > targetDateTime && currentDate <= new Date(currentYear, targetMonth, targetDay+1, 06, 59, 59, 999))
    ) {
      yearElement.innerHTML = `clee day - ` + targetDateTime.getFullYear();
      timeElement.innerHTML = "is TODAY!!!!!!";
    } else {
      yearElement.innerHTML = `clee day - ` + targetDateTime.getFullYear();
      timeElement.innerHTML = `is in: ${timeUntilTarget}`;
    }
  }
  
  setInterval(updateTimeCounter, 1000);
  
