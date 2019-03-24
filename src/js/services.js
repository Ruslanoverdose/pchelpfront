$(function() {
    let desc = ""  
    let img = ""
    let title = ""
    let name =""
    $('input, textarea').change(function() {
        $(this).val() != "" ? $(this).addClass('active') : $(this).removeClass('active')
    })
    $('.goods-block button').click(function(e) {
        e.preventDefault();
        desc = $(this).parents('.goods-block').find('.goods-desc').html()
        img = $(this).parents('.goods-block').find('.goods-pic img').attr('src')
        title = $(this).parents('.goods-block').find('.goods-title').text()
        $('.detail-block .detail-desc').append(desc)
        $('.detail-block .detail-title h3').text(title)
        $('.detail-block .form-block input[name=selectedService]').attr('value', title)
    })
    $('#modalFormService').on('hidden.bs.modal', function () {
        desc = ""  
        img = ""
        title = ""
        name = ""
        $('.detail-block .detail-desc').html(" ")
        $('.detail-block .detail-title h3').text(" ")
        $('input[name="selectedService"]').val(title)
        $('.detail-block .form-block input[name=selectedService]').attr('value', " ")
        $('.detail-block .goods-pic img').attr('src', " ")
      })
});