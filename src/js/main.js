$(function($) {
    if (document.documentElement.scrollTop >= 80) {
        $("#top-menu").addClass('fixed-menu')
    }
    var ids = ["#wrapper"]
    $('section').each(function() {
        ids.push("#" + $(this).attr('id'))
    })
    $(".menu a[href='#wrapper']").addClass('active')
    function Scroll() {
        if (document.documentElement.scrollTop >= 80) {
            $("#top-menu").addClass('fixed-menu')
        }
        else {
            $("#top-menu").removeClass('fixed-menu')
            $(".menu a[href='#']").addClass('active')
        }
        changeMenuElement()

        
    }

    function changeMenuElement() {
        var hrefs = []
        $(".menu a").each(function() {
            hrefs.push({
                "href" : $(this).attr('href'),
                "offsetSection" : $($(this).attr('href')).offset().top
            })
        })
        hrefs.forEach((href) => {
            if (document.documentElement.scrollTop >= href.offsetSection - 100){
                $('.menu a').removeClass('active')
                $("a[href='"+ href.href +"'").addClass('active')
            }
        })

    }
    window.addEventListener("scroll", Scroll)
    $(".menu a").click(function(event) {
        event.preventDefault()
        $(".menu a").removeClass("active")
        let id = $(this).attr('href')
        if ($(this).attr('href') == "#wrapper")
            $('body,html').animate({scrollTop: 0}, 400)
        if ($.inArray(id, ids) > 0) {
            $(this).addClass('active')
            let top = $(id).offset().top
            $('body,html').animate({scrollTop: top - 50}, 400)
        }
    })
    $(".form-block button").click(function(event) {
        event.preventDefault()
    })

    $('.callbuttonblock button, .call-mobile button, .callblockbutton button').click(function(event) {
        event.preventDefault()
        $('#callblock').css({
            "transform": "translateY(0)"
        })

    })
    $('.closeblock button').click(function(event) {
        event.preventDefault()
        $('#callblock').css({
            "transform" : "translateY(-100%)"
        })

    })
    let menuIsOpen = false
    $("#mobile-button").click(function(e) {
        e.preventDefault()
        if (!menuIsOpen) {
            $("#mobile-menu").show(100)
            $("#mobilemenu").addClass('mobilemenuIsOpen')
            $("#mobilemenubutton").addClass('buttonIsOpen')
            
        }
        else {
            $("#mobile-menu").hide(100)
            $("#mobilemenu").removeClass('mobilemenuIsOpen')
            $("#mobilemenubutton").removeClass('buttonIsOpen')
        }
        menuIsOpen = !menuIsOpen
    })
    $("#mobile-menu").click(function() {
        $(this).hide(100)
        $("#mobilemenu").removeClass('mobilemenuIsOpen')
        $("#mobilemenubutton").removeClass('buttonIsOpen')
    })

    setTimeout(() => {$('#callblock').css({"transform": "translateY(0px)"})}, 5000);
    $('#CallModalCenter .closeblock button').click(function(event) {
        event.preventDefault()
        $('#CallModalCenter').modal('hide')
        
    })
    $('#modalFormService .closeblock button').click(function(event) {
        event.preventDefault()
        $('#modalFormService').modal('hide')
        
    })


})


