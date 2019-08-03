let tab, tabContent;

window.onload = function() {
    tab = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tab-content');
    hideTabContentFrom(1);
}

function hideTabContentFrom(index) {
    for (let i = index; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}

document.querySelector('.tabs').onclick = function(event) {
    const target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabContent(i);
            }
        }
    }
}

function showTabContent(position) {
    if (tabContent[position].classList.contains('hide')) {
        hideTabContentFrom(0);
        tab[position].classList.add('active');
        tabContent[position].classList.remove('hide');
        tabContent[position].classList.add('show');
    }
}

//Timer for registration
const sendSms = document.querySelectorAll('.send-sms');
for (let i = 0; i < sendSms.length; i++) {
    sendSms[i].onclick = function(event) {
        const target = event.target;
        let seconds = 60;

        if (target.classList !== 'button active') {
            target.classList = 'button active';

            var seconds_timer_id = setInterval(function() {
                if (seconds > 0) {
                    seconds--;
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }
                    target.innerHTML = `Отправить повторно 0:${seconds}`;
                } else {
                    clearInterval(seconds_timer_id);
                }
            }, 1000);
        }
    }
}