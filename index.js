// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

  const time = Date.now() - new Date('Jul 17, 2019').getTime()
  
  console.log(time)
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  console.log(days)
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours)
  
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  console.log(mins)
 
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  console.log(secs)