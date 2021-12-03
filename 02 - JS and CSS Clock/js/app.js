const hourHand = document.querySelector('.hand.hour-hand')
const minuteHand = document.querySelector('.hand.min-hand')
const secondHand = document.querySelector('.hand.second-hand')

function transformByDeg(hand, degNum) {
  hand.style.transform = `rotate(${(90 + degNum)}deg)`
}

function hourOfDayIn12H(date) {
  const mins = date.getMinutes()
  const h24 = date.getHours()
  if(h24 <= 12) return h24 + mins/60
  return (h24 - 12) + mins/60
}

function minuteOfDay(date) {
  const secs = date.getSeconds() / 60
  return date.getMinutes() + secs
}

function renderClock() {
  const now = new Date()
  const hourPos = 360 * hourOfDayIn12H(now)/12
  const minPos = 360 * minuteOfDay(now)/60
  const secPos = 360 * now.getSeconds()/60
  
  transformByDeg(hourHand, hourPos)
  transformByDeg(minuteHand, minPos)
  transformByDeg(secondHand, secPos)
}

setInterval(renderClock, 1000)