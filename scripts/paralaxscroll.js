(function (a) {
    var b = {
        settings: { delta: 0, currentSlideIndex: 0, slides: a(".slide"), numSlides: a(".slide").length, navPrev: a(".js-prev"), navNext: a(".js-next") }, init: function () { s = this.settings; this.bindEvents() }, bindEvents: function () { s.navPrev.on({ click: b.prevSlide }); s.navNext.on({ click: b.nextSlide }) }, showSlide: function () {
            s.delta = 0; a("body").hasClass("is-sliding") || s.slides.each(function (c, d) {
                a(d).toggleClass("is-active", c === s.currentSlideIndex); a(d).toggleClass("is-prev", c === s.currentSlideIndex - 1); a(d).toggleClass("is-next",
                    c === s.currentSlideIndex + 1); a("body").addClass("is-sliding"); setTimeout(function () { a("body").removeClass("is-sliding") }, 500)
            })
        }, prevSlide: function () { 0 >= s.currentSlideIndex && (s.currentSlideIndex = s.numSlides); s.currentSlideIndex--; b.showSlide() }, nextSlide: function () { s.currentSlideIndex++; s.currentSlideIndex >= s.numSlides && (s.currentSlideIndex = 0); b.showSlide() }
    }; b.init()
})(jQuery);