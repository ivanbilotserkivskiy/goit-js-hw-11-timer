// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });
const daysRef = document.querySelector("[data-value='days']")
const hoursRef = document.querySelector("[data-value='hours']")
const minutesRef = document.querySelector("[data-value='mins']")
const secondsRef = document.querySelector("[data-value='secs']")
console.log(daysRef) 
  // const time = Date.now() - new Date('Jul 17, 2019').getTime()
  const timer = {
    start(){
      const startTime = Date.now();
      setInterval(() => {
        console.log(Date.now())
      }, 1000);
    }
  }

  timer.start();
  
  console.log(time)
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  console.log(days)
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours)
  
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  console.log(mins)
 
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  console.log(secs)