$(document).ready(function() {
    let rus_btn = $('.rus');
    let eng_btn = $('.eng');
    let logo_img = $('.logo__img');
    let eng_only = $('.work-list__item.eng-only');

    rus_btn.on('click', function(evt) {
        evt.preventDefault();
        evt.currentTarget.classList.add('active');
        eng_btn[0].classList.remove('active');
        $('title').text(rus['title']);

        $('.footer__copyright').text(rus['footer_sign']);

        logo_img.attr({
            'src': 'img/logo-rus.svg',
            'alt': rus['title']
        });
        eng_only[0].classList.add('hidden');

        let r = $('.localization').each(function() {
            let el = $(this);
            let key = (el.attr('data-caption'));
            el.text(rus[key]);
        });
    });


    eng_btn.on('click', function(evt) {
        evt.preventDefault();

        evt.currentTarget.classList.add('active');
        rus_btn[0].classList.remove('active');
        $('title').text(eng['title']);
        $('.footer__copyright').text(eng['footer_sign']);

        logo_img.attr({
            'src': 'img/logo-eng.svg',
            'alt': eng['title']
        });

        eng_only[0].classList.remove('hidden');

        let r = $('.localization').each(function() {
            let el = $(this);
            let key = (el.attr('data-caption'));
            el.text(eng[key]);
        });
    });

    let rus = {
        title: 'Креативное агентство "Ваш дизайнер"',
        logo: 'Логотипы,',
        firm_style: 'Фирменный стиль,',
        polygraphy: 'Полиграфия,',
        pack: 'Упаковка,',
        banner: 'Баннеры,',
        web: 'Веб-сайты,',
        animation: 'Анимация,',
        social: 'Ведение страниц в социальных сетях,',
        modelling: '3D моделирование,',
        video: 'Видеоролики',
        footer_sign: '© «Ваш Дизайнер», 2020'
    };
    let eng = {
        title: 'Creative agency "Your designer"',
        logo: 'Logos,',
        firm_style: 'Corporate Identity,',
        polygraphy: 'Polygraphy,',
        pack: 'Packaging,',
        banner: 'Banners,',
        web: 'Websites,',
        animation: 'Animations,',
        social: 'Maintaining pages on social networks,',
        modelling: '3D Modeling,',
        video: 'Videos,',
        photography: 'Photography',
        footer_sign: '© «Your Designer», 2020'
    };
});
