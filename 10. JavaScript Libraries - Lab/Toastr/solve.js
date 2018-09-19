function solve() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    let input = $('#name');

    if (input.val() === '') {
        toastr.error('Name should be a non-empty string!', 'Error!');
    } else if (input.val().length < 6) {
        toastr.warning('Name should be at least 6 characters long!', 'Warning!');
    } else {
        toastr.success('Successful registration!', 'Success!');
        input.val('');
    }
}