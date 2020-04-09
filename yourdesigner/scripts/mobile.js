
$(window).on('load', (function () {
        if ($(window).width() <= '900') {
            $('.work-list__menu').on('click', function (evt) {
                let element = evt.target;
                if (element.tagName === 'BUTTON') {
                    element.parentNode.classList.toggle('show-img');
                }
            });

        }
    }
))