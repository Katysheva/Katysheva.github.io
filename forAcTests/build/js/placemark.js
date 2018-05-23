ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Cat Energy',
      balloonContent: 'Санкт-Петербург Большая Конюшенная 19/8'
    }, {
    // Опции.
    // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
    // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin.png',
    // Размеры метки.
      iconImageSize: [55, 53],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
      iconImageOffset: [-35, -53]
    }),

  myMap.geoObjects
    .add(myPlacemark);
}
