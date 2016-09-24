// $('#addBtn').on('click', function () {
// 	var newCharacter = {
// 		name: $('#name').val().trim(),
// 		role: $('#role').val().trim(),
// 		age: $('#age').val().trim(),
// 		forcePoints: $('#forcepoints').val().trim()
// 	};

// 	var currentURL = window.location.origin;

// 	// Question: What does this code do??
// 	$.post(currentURL + '/api/new', newCharacter)
// 		.done(function (data) {
// 			console.log(data);
// 			alert('Adding character...');
// 		});

// 	return false;
// });
$("#submitIn").on("click",function(){
	var newReservation = {
		name: $("#nameIn").val().trim(),
		phoneNumber: $("#phoneIn").val().trim(),
		email: $("#emailIn").val().trim(),
		uniqueID: $("#idIn").val().trim()
	};
	
	var currentURL = window.location.origin;

	// Question: What does this code do??
	$.post(currentURL + '/api/new', newReservation)
		.done(function (data) {
			console.log(data);
			alert('Adding reservation...');
		});

	return false;
});

