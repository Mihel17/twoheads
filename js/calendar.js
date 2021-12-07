import { calendarData } from './calendar.json.js'

const calendar = document.querySelector('#calendar')
const calendarList = calendar.querySelector('.calendar__days')
const calendarTemplate = document.querySelector('#calendar__days-item')
  .content
  .querySelector('.calendar__days-item');

const fillCalendar = (dataArray) => {
  dataArray.forEach(item => {
    const day = calendarTemplate.cloneNode(true);
    day.textContent = item;
    if (item) {
      day.classList.add(`calendar__days-item--${item}`)
    } else {
      day.classList.add(`calendar__days-item--empty`)
    }
    calendarList.appendChild(day);
  });
}
fillCalendar(calendarData)

const putActiveDay = () => {
  const activeDay = document.querySelector('.calendar__days-item--27')
  activeDay.classList.add('calendar__days-item--active')
}
putActiveDay()