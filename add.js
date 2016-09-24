$("#submit").on("click",function(){
	var newReservation = {
		name: $("#nameIn").val().trim(),
		phoneNumber: $("#phoneIn").val().trim(),
		email: $("#emailIn").val().trim(),
		uniqueID: $("#idIn").val().trim()
	};

	$.post('http://localhost:3000/api/new', newReservation).done(function (data) {
		console.log(data);
		alert('Adding reservation...');
	});

	return false;
});