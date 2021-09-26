// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });
const daysRef = document.querySelector("[data-value='days']")
const hoursRef = document.querySelector("[data-value='hours']")
const minsRef = document.querySelector("[data-value='mins']")
const secsRef = document.querySelector("[data-value='secs']") 
  // const time = Date.now() - new Date('Jul 17, 2019').getTime()
  // const timer = {
  //   start(){
  //     const startTime = Date.now();
  //     setInterval(() => {
  //       console.log(Date.now())
  //     }, 1000);
  //   }
  // }

  // timer.start();
  
  // console.log(time)
  // const days = Math.floor(time / (1000 * 60 * 60 * 24));
  // console.log(days)
  // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours)
  
  // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(mins)
 
  // const secs = Math.floor((time % (1000 * 60)) / 1000);
  // console.log(secs)

 
// значение времени на момент запуска скрипта
const now = new Date();
// объекты, в которые будем выводить показания таймера

 
// массив данных в котором находятся значения оставшихся до
// конца суток часов, минут и секунд соответственно, которые
// мы получаем путём вычитания из их максимального значения текущего
// let times = [
//     29 - now.getDay(),
// 		23 - now.getHours(),
// 		59 - now.getMinutes(),
// 		59 - now.getSeconds(),
// 	];


//   const timer = times => {
//     // объявляем идентификатор таймера и запускаем функцию 'setInterval'
//     let tm = setInterval(() => {
//       // уменьшаем значение секунд на 1
//       times[3]--;
   
//       // проверяем, не обнулился ли таймер и если да, то останавливаем 'setInterval'
//       if (times[0] == 0 && times[1] == 0 && times[2] == 0 && times[3] == 0) {
//         clearInterval(tm);
//       } else if (times[3] == -1) {
//         // если секунды имеют отрицательное значение, это значит, что
//         // они перешли 0 и должен начаться отсчёт новой минуты,
//         // при этом секунды становятся равными своему максимальному значению - 59,
//         // а минуты уменьшаются на 1
//         times[3] = 59;
//         times[2]--;
//       } else if (times[2] == -1) {
//         // аналогично, как для минут и секунд
//         // минуты выставляем в значение 59, а час уменьшаем на 1
//         times[2] = 59;
//         times[1]--;
//       }
//       else if (times[1] == -1) {
//         // аналогично, как для минут и секунд
//         // минуты выставляем в значение 59, а час уменьшаем на 1
//         times[1] = 23;
//         times[0]--;
//       }
   
//       // если показания или часов, или минут, или секунд меньше 10,
//       // ставим перед показанием ноль
//       let d = (times[0] < 10) ? '0' + times[0] : times[0], 
//       h = (times[1] < 10) ? '0' + times[1] : times[1],
//         m = (times[2] < 10) ? '0' + times[2] : times[2],
//         s = (times[3] < 10) ? '0' + times[3] : times[3];
   
//       // выводим значение таймера на экран
//       showTimer(d, h, m, s);
//     }, 1000);
//   }
//   timer(times);
//   const showTimer = (days, hour, min, sec) => {
//     daysRef.innerHTML = days;
//     hoursRef.innerHTML = hour;
//     minutesRef.innerHTML = min;
//     secondsRef.innerHTML = sec;
//   }

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
class CountdownTimer {
  constructor({selector,targetDate}) {
    this.selector = selector
    this.targetDate = targetDate
   
  }
    start() {
      // const  startTime = new Date('January 1, 2022')
    setInterval(() => {
      const currentTime = Date.now()
      const deltaTime = this.targetDate-currentTime;
      const timeComponents = getTimeComponents(deltaTime)
      updateClock(timeComponents);
      console.log(timeComponents)
    }, 1000);
  }
  }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 1, 2022'),
});


function pad(value) {
  return String(value).padStart(2,'0');
}

timer.start()

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