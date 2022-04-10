const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuOverlay = document.querySelector('.menu__overlay'); 

const select = document.querySelector('.change-lang');  

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none';
    select.style.display = 'none'
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
    select.style.display = 'block'
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
    select.style.display = 'block'
});

const counters = document.querySelectorAll('.work__bar-item__procent'),
        lines = document.querySelectorAll('.work__bar-item__firstline');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll (Jquery)

if (document.body.clientWidth > 767) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800 && $(this).scrollTop() < 3700) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
}

// Animate with WOW

new WOW().init();

// Language
const allLanguages = ['en', 'ru', 'ua'];   
const sidepanelText = document.querySelector('.lng-sidepanel__text');

select.addEventListener('change', changeURLLangauge);

function changeURLLangauge() {
    let lang = select.value;
    location.href = `${window.location.pathname}#${lang}`;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash.substring(1);
    if (!allLanguages.includes(hash)) {
        location.href = `${window.location.pathname}#ua`;
        location.reload()
    }

    if (hash === "en") {
        sidepanelText.style.transform = 'rotate(-90deg) translate(-33%,-200%)';
        sidepanelText.style.width = '120px';
    }

    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();