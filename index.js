// const daysRef = document.querySelector("[data-value='days']")
// const hoursRef = document.querySelector("[data-value='hours']")
// const minsRef = document.querySelector("[data-value='mins']")
// const secsRef = document.querySelector("[data-value='secs']") 
// const divRef = document.querySelector('#id')

class CountdownTimer {
  constructor({selector,targetDate}) {
    this.selector = selector
    this.targetDate = targetDate
    

  }
    start() {
    setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = this.targetDate-currentTime;
      const timeComponents = getTimeComponents(deltaTime)
      updateClock(timeComponents);
      console.log(timeComponents)
      
    }, 1000);

    const daysRef = document.querySelector("[data-value='days']")
const hoursRef = document.querySelector("[data-value='hours']")
const minsRef = document.querySelector("[data-value='mins']")
const secsRef = document.querySelector("[data-value='secs']") 
const divRef = document.querySelector('.timer')
console.log(divRef)
divRef.setAttribute('id', this.selector)
    function pad(value) {
      return String(value).padStart(2,'0');
    }
    
    function getTimeComponents(time) {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, mins, secs};
    }
    function updateClock({days, hours, mins, secs}) {
      daysRef.textContent = days;
      hoursRef.textContent = hours;
      minsRef.textContent = mins;
      secsRef.textContent = secs;
    } 
  }
  
  }

new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('January 1, 2022'),
}).start();
