$('#submit-btn').on('click', function () {
    $('#submit-btn').addClass('button--loading')
    let fd = new FormData();
    fd.append('user', $('#user').val());
    fd.append('password', $('#pass').val());
    fd.append('file', $('#file').prop('files')[0]);
    console.log($('#file').prop('files'));
    // console.log(fd);

    $.ajax({
        url: "http://127.0.0.1:8000/forecast", 
        type: 'POST',
        processData: false,
        contentType: false,
        type: 'POST',
        data: fd,
        success: function (result) {
            $('#submit-btn').removeClass('button--loading')
            $('#response').html('<img src="data:image/png;base64,' + result['plot'] + '" />' + result['tbl']);
            $('table').addClass('table')
        }
        
    });
});