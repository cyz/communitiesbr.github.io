$(document).ready(function () {
    $(".navigationct").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), $("body").click(), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1e3), !1
        }
    })
});