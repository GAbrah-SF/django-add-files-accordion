$(document).ready(function () {

    for (let i = 1; i <= cantidad; i++) {
        $(`#nombre${i}`).on('input', function () {
            if ($(this).val().length <= 2) {
                $(this).addClass('error_input').removeClass('success_input')
            } else {
                $(this).addClass('success_input').removeClass('error_input')
            }
        })
    }

})
