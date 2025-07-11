// const clock = document.querySelector('#clock');


// setInterval(function(){
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());

//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)
  function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();


   let ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12;

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      document.querySelector('#hour').textContent = hours;
      document.querySelector('#min').textContent = minutes;
      document.querySelector('#sec').textContent = seconds;
      document.querySelector('#ampm').textContent = ampm;
    }

    setInterval(updateClock, 1000);
    updateClock()