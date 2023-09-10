const timeStamp = document.querySelectorAll(" [data-testid='currentDayOfTheWeek'], [data-testid='currentUTCTime']");
const [currentDay, currentTime] = timeStamp

const getCurrentDay = () => {
  const day = new Date().getDay();
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  daysOfTheWeek.map((e, index) => {
    if (day === index) {
      currentDay.textContent = e;
    }
  });
};

const getCurrentTime = () => {
    const date = new Date()
    const hour = date.getUTCHours() + 1
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    const milliseconds = date.getUTCMilliseconds()
    const am = hour < 12 ? 'AM' : 'PM'
    
    currentTime.innerHTML = `${hour < 10? `0${hour}`: hour}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}:${milliseconds} ${am}`
}

getCurrentDay()
setInterval(() => getCurrentTime(),1)