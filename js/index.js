$(document).ready(function(){
    $(window).scroll(function(){
        $('.ocn').addClass('on')

        if($(window).scrollTop()=='1000px'){
            $('.ocn').removeClass('on')
            $('')
        }
    })
})