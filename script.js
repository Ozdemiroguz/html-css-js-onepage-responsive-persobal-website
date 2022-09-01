$(function () {
    $("a[href*=#]").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            { scrollTop: $($(this).attr("href")).offset().top },
            500,
            "linear"
        );
    });
});
document.querySelector('.header__moon').onclick = function () {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function () {
    document.querySelector('.header-menu').classList.toggle('is-active');
}