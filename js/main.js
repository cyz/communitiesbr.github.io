$(document).ready(function() {
    
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        })
    
});