function  changeorder() {
            var arr = ["Order Received", "Preparing", "Ready To serve"];
            // var arr = [10001, 10302, 12303, 11004, 10044];
var i ;
$(document).on('click', '#change1', function() {
    i++;
    $('#order1').text(arr[i%arr.length]);
    return false;
});
            }