$(function() {

    $('#feedBackForm button').on('click', function(e){
        e.preventDefault();
        $('#feedBackForm .message').removeClass('error').text("")
        $('#feedBackForm .message').removeClass('success').text("")

        let Name = $('#feedBackForm input[name=fbName]').val();
        let Subject = $('#feedBackForm input[name=fbSubject]').val();
        let Email = $('#feedBackForm input[name=fbEmail]').val();
        let Message = $('#feedBackForm textarea').val();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (Name === "" || Subject === "" || Email === "" || Message === "") {
            $('#feedBackForm .message').addClass('error').text("При заполнении формы обнаружены пустые поля")
        }
        else if (!re.test(String(Email).toLowerCase())) {
            $('#feedBackForm .message').addClass('error').text("Неверный Email")
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/ajax/feedback',
                data: $('#feedBackForm').serialize(),
                success: function(result){
                },
            });
            $('#feedBackForm .message').addClass('success').text("Ваше сообщение отправлено")
        }
        $("#feedBackForm").find("input[type=text], textarea").val("").removeClass('active');
        setTimeout(function() {
            $('#feedBackForm .message').removeClass('success').text("")
            $('#feedBackForm .message').removeClass('error').text("")
        }, 3000);
    });
    $('#orderPhone').mask("0 (000) 000-00-00")
    $('#callPhone').mask("0 (000) 000-00-00")
    $('#callPhoneModal').mask("0 (000) 000-00-00")
    $('#orderForm button').on('click', function(e){
        e.preventDefault();
        $('#orderForm .message').removeClass('error').text("")
        $('#orderForm .message').removeClass('success').text("")
        let Name = $('#orderForm input[name=ServiceName]').val();
        let Phone = $('#orderForm input[name=ServicePhone]').val();
        let Message = $('#orderForm textarea[name=ServiceProblem]').val();
        // let Title = $('#orderForm input[name=ServiceTitle]').val();
        if (Name === "" || Phone === "" || Message === "") {
            $('#orderForm .message').addClass('error').text("При заполнении формы обнаружены пустые поля")
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/ajax/order',
                data: $('#orderForm').serialize(),
                success: function(result){
                },
            });
            $('#orderForm .message').addClass('success').text("Ваше сообщение отправлено")
        }
        $("#orderForm").find("input[type=text], textarea").val("").removeClass('active');
        setTimeout(function() {
            $('#orderForm .message').removeClass('success').text("")
            $('#orderForm .message').removeClass('error').text("")
        }, 3000);
    });

    $('#callForm button').on('click', function(e){
        e.preventDefault();
        $('#callForm .message').removeClass('error').text("")
        $('#callForm .message').removeClass('success').text("")
        let Name = $('#callForm input[name=callName]').val();
        let Phone = $('#callForm input[name=callPhone]').val();
        if (Name === "" || Phone === "") {
            $('#callForm .message').addClass('error').text("При заполнении формы обнаружены пустые поля")
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/ajax/call',
                data: $('#callForm').serialize(),
                success: function(result){
                },
            });
            $('#callForm .message').addClass('success').text("Мы вам перезвоним")
        }
        $("#callForm").find("input[type=text]").val("").removeClass('active');
        setTimeout(function() {
            $('#callForm .message').removeClass('success').text("")
            $('#callForm .message').removeClass('error').text("")
        }, 3000);
    });

    $('#callFormModal button').on('click', function(e){
        e.preventDefault();
        $('#callFormModal .message').removeClass('error').text("")
        $('#callFormModal .message').removeClass('success').text("")
        let Name = $('#callFormModal input[name=callNameModal]').val();
        let Phone = $('#callFormModal input[name=callPhoneModal]').val();
        if (Name === "" || Phone === "") {
            $('#callFormModal .message').addClass('error').text("При заполнении формы обнаружены пустые поля")
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/ajax/callmodal',
                data: $('#callFormModal').serialize(),
                success: function(result){
                    console.log('1')
                },
                error: function(error) {
                    console.log(error)
                }
            });
            $('#callFormModal .message').addClass('success').text("Мы вам перезвоним")
        }
        $("#callFormModal").find("input[type=text]").val("").removeClass('active');
        setTimeout(function() {
            $('#callFormModal .message').removeClass('success').text("")
            $('#callFormModal .message').removeClass('error').text("")
        }, 3000);
    });

})