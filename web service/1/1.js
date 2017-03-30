/**
 * Created by liuchaorun on 2017/1/26.
 */
function checkPassWord() {
    var password = /^[a-zA-Z0-9]{5,16}$/;
    var passWord = $('#password').val();
    if (password.test(passWord)) {
        $('#img2').attr('src', 'image/true.jpg');
    }
    else {
        $('#img2').attr('src', 'image/false.jpg');
    }
}
function reCheckPassWord() {
    if ($('#password').val() === $('#rePassword').val()) {
        $('#img3').attr('src', 'image/true.jpg');
    }
    else {
        $('#img3').attr('src', 'image/false.jpg');
    }
}
function postAjax() {
    var data = {};
    data.username = $('#username').val();
    data.passWord = $('#password').val();
    $.ajax('http://localhost:3000', {
        type: 'POST',
        data: data,
        dataType: 'text',
        success: function (res) {
            $('#res').text(res.toString());
        },
        error: function (req, err) {
            $('#res').text('error');

        }
    })
}