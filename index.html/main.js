$(document).ready(function () {
    $(document).ready(function () {
        $(".img").css({ opacity: "1", transform: "scale(1)" })
    })
    $(document).ready(function () {
        $(".about").css({ right: "4%" })
    })



    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        console.log($(".cotacts div").offset().top - 400);
        console.log(scroll)
        if (scroll < 600) {
            $(".pro1").css({ transform: "translateY(-100px)", opacity: "0" })
            $(".bottom p").css({ color: "black" })
        }
        else if (scroll >= 600) {
            $(".pro1").css({ transform: "translateY(0px)", opacity: "1" })
            $(".bottom p").css({ color: "white" })
        }
        if (scroll < $(".cotacts div").offset().top - 651) {
            $(".cotacts div").css({ width: ".1%", left: "99.9%" })
        }
        else if (scroll > $(".cotacts div").offset().top - 650) {
            $(".cotacts div").css({ width: "100%", left: "0%" })
        }
        if (scroll > 0) {
            $("audio").trigger("play")
        }
        if (scroll > $(".aboutt").offset().top - 200) {
        $(".bar").css({width:"90%"})
        $(".bar1").css({width:"85%"})
        $(".bar2").css({width:"80%"})
        $(".bar3").css({width:"90%"})
        let intrval = setInterval(function () {
            let span = parseInt($(".bartrack .span").html());
            if (span !== 90) {
                $(".bartrack .span").html(span + 10)
            } else {
                clearInterval(intrval)
            }
            let span1 = parseInt($(".bartrack .span1").html());
            if (span1 !== 85) {
                $(".bartrack .span1").html(span1 + 5)
            } else {
                clearInterval(intrval)
            }
            let span2 = parseInt($(".bartrack .span2").html());
            if (span2 !== 80) {
                $(".bartrack .span2").html(span2 + 10)
            } else {
                clearInterval(intrval)
            }
            let span3 = parseInt($(".bartrack .span3").html());
            if (span3 !== 90) {
                $(".bartrack .span3").html(span3 + 10)
            } else {
                clearInterval(intrval)
            }
        }, 300)
}


    })
    // console.log($(".aboutt").offset().top)
























})













