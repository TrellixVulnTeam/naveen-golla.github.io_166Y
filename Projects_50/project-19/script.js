'use strict';

// const hourEl = document.querySelector('.hour')
// const minuteEl = document.querySelector('.minute')
// const secondEl = document.querySelector('.second')
// const timeEl = document.querySelector('.time')
// const dateEl = document.querySelector('.date')
// const toggle = document.querySelector('.toggle')
//     // 
// const secondsEl = document.querySelector('.seconds')


// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sunday', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// toggle.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if (html.classList.contains('dark')) {
//         html.classList.remove('dark')
//         e.target.innerHTML = 'Dark Mode'
//     } else {
//         html.classList.add('dark')
//         e.target.innerHTML = 'Dark White'
//     }
// })

// function setTime() {
//     const time = new Date();
//     const month = time.getMonth();
//     const day = time.getDay();
//     const date = time.getDate();
//     const hours = time.getHours();
//     const hoursForClock = hours % 12
//     const minutes = time.getMinutes()
//     const seconds = time.getSeconds()
//     const ampm = hours >= 12 ? 'PM' : 'AM'

//     hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0 ,360)}deg)`

//     minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0 ,360)}deg)`
//     secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0 ,360)}deg)`


//     timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} : <span class="seconds">${seconds < 10 ? `0${seconds}` : seconds}</span> ${ampm}`

//     dateEl.innerHTML = `${days[day]} , ${months[month]} <span class='circle'> ${date}</span>`
// }
// setTime()

// function scale(number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

// setInterval(setTime, 1000)

$(function() {

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sunday', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


            $('.toggle').click((e) => {
                const html = document.querySelector('html')
                if ($(html).hasClass('dark')) {
                    $(html).removeClass('dark')
                    $(e.target).html('Dark Mode')
                } else {
                    $(html).addClass('dark')
                    $(e.target).html('Dark White')
                }
            })

            function setTime() {
                const time = new Date();
                const month = time.getMonth();
                const day = time.getDay();
                const date = time.getDate();
                const hours = time.getHours();
                const hoursForClock = hours % 12
                const minutes = time.getMinutes()
                const seconds = time.getSeconds()
                const ampm = hours >= 12 ? 'PM' : 'AM'

                $('.hour').css({
                    "transform": `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0 ,360)}deg)`
                })

                $('.minute').css({
                    "transform": `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0 ,360)}deg)`
                })
                $('.second').css({
                    "transform": `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0 ,360)}deg)`
                })

                $('.time').html(`${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} : <span class="seconds">${seconds < 10 ? `0${seconds}` : seconds}</span> ${ampm}`)

                 $('.date').html(`${days[day]} , ${months[month]} <span class='circle'>${date}</span>`)

             }

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    setTime()
    setInterval(setTime, 1000)

})