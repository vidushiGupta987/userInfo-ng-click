$("#saveChanges").on( "click", function() {
    $('#myModal').modal('hide');
   
});
//trigger next modal
$("#saveChanges").on( "click", function() {
    $('#myModal2').modal('show');  
    //hides modal by default using settimeout
    setTimeout(function() {$('#myModal2').modal('hide');}, 3000);  
});


// var age="";
// $("#dob").datepicker({
//     onselect: function(value,ui){
//         var today = new date();
//         age= today.getFullYear() - ui.selectedYear;
//         $('#age').val(age);
//     },
//     changeMonth:true,
//     changeyear:true

// })
