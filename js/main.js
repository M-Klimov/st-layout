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
        hideTabsContent(0);
        tab[position].classList.add('active');
        tabContent[position].classList.remove('hide');
        tabContent[position].classList.add('show');
    }
}