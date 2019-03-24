$(function() {
    $('#feedBackForm').submit(function(e){
        e.preventDefault();
        $("#feedBackForm").find("input[type='text'], textarea, input[type='email']").val("").removeClass('active');
    });
    $('#callForm').submit(function(e){
        e.preventDefault();
        $("#callForm").find("input[type='text'], input[type='tel']").val("").removeClass('active');
    });
    $('#serviceForm').submit(function(e){
        e.preventDefault();
        $("#serviceForm").find("input[type='text'], textarea, input[type='tel']").val("").removeClass('active');
    });

})