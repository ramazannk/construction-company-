const timer = (parentSelector, deadline)=>{
    const endWork = '18:00';

    function getTimer(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t /(1000 * 60 * 60)) % 24),
          minutes = Math.floor((t /1000 * 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
    }
    function getZero(num){
        if(num < 10){
            return `${0}`+ num;
        }else{
            return num;
        }
    }

    function setTimer(parentSelector, endtime){
        const timer = document.querySelector(parentSelector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerId = setInterval(updateTimer, 1000);

        function updateTimer(){
            const t = getTimer(endtime);
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t == 0){
                clearInterval(timerId);
            }
        }
    }
    setTimer(parentSelector, deadline);
};
export default timer;