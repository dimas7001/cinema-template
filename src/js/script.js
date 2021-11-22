$('.toggle').click(() => {
    $('.toggle').toggleClass('toggle_active');
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
