function updateTimeCounter() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const targetMonth = 4;
    const targetDay = 25;
    
    const targetDateTime = new Date(currentYear, targetMonth, targetDay);
    const timeDifference = targetDateTime - currentDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    const timeUntilTarget = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    
    const timeCounterElement = document.getElementById("time-counter");
    if (
      (currentDate.getMonth() === targetMonth && currentDate.getDate() === targetDay) ||
      (currentDate > targetDateTime && currentDate <= new Date(currentYear, targetMonth, targetDay, 23, 59, 59, 999))
    ) {
      timeCounterElement.innerHTML = "It is clee day!";
    } else {
      timeCounterElement.innerHTML = `Time until the next clee day: ${timeUntilTarget} (current date: ${currentDate})`;
    }
  }
  
  setInterval(updateTimeCounter, 1000);
  