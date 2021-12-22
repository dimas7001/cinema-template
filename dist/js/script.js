let ticketPrice = 100;

$('.toggle').click((e) => {
    $(e.target).toggleClass('toggle_active');
    $('.nav').toggleClass('nav_active');
})

$('.header__top-wrapper .dropdown').click(() =>
    $('.header__top-wrapper .dropdown__list').toggleClass('dropdown__list_active')
)
$('.nav .dropdown').click(() =>
    $('.nav .dropdown__list').toggleClass('dropdown__list_active')
)

$('.header__top-wrapper .dropdown__list li').on('click', (e) =>
    $('.header__top-wrapper .dropdown__selected').text($(e.target).text())
)
$('.nav .dropdown__list').click((e) =>
    $('.nav .dropdown__selected').text($(e.target).text())
)

$('.place:not(.place_disabled):not(.place_taken)').click((e) => {
    var seat = $(e.target);
    seat.toggleClass('place_active');
    /*if (seat.hasClass('place_active')) {
        let strCoord = e.target.dataset.coord;
        let arrCoord = strCoord.split(' ');
        $('.section__pay-place')[0].insertAdjacentHTML('beforeEnd', `<div data-seat="${strCoord}">${arrCoord[0]}</div>`);
        $('.section__pay-row')[0].insertAdjacentHTML('beforeEnd', `<div data-seat="${strCoord}">${arrCoord[1]}</div>`);
        $('.section__price')[0].textContent = ticketPrice;
    }*/


})

let filmNames = [];
let movies = [];
if ($('.input__search')) {
    movies = $('.section__films a');
    movies.each((i, e) => filmNames[i] = e.dataset.name.toLowerCase());
}
$('.input__search').on('input', (e) => {
    $('.section__films a[data-flag="1"]').each((i, e_r) => {
        e_r.style.display = 'block';
        e_r.dataset.flag = 0;
    })
    let value = $(e.target).val().toLowerCase();
    if (value.length >= 2)
        $.each(filmNames, (i, f) => {
            if (f.indexOf(value) === -1) {
                movies[i].style.display = 'none';
                movies[i].dataset.flag = 1;
            }
        })
})
