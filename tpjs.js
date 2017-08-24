$(document).ready(function() {
	var userNames = [
		"ESL_SC2",
		"OgamingSC2",
		"cretetion",
		"freecodecamp",
		"storbeck",
		"habathcx",
		"RobotCaleb",
		"noobs2ninjas"
	];
	var fccName = "";
	var fccBio = "";
	var fccUrl = "";
	var name2 = "";
	var bio2 = "";

	//about freecodecamp

	$.ajax({
		type: "GET",
		dataType: "jsonp", //next time don't forget the Cap on Type, it's not datatype but dataType!!!
		url: "https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?",
		success: function(data) {
			fccName = data.display_name;
			fccBio = data.bio;
		}
	});

	$.ajax({
		type: "GET",
		dataType: "jsonp", //next time don't forget the Cap on Type, it's not datatype but dataType!!!
		url: "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?",
		success: function(plusData) {
			fccUrl = plusData.url;
		}
	});

	$.ajax({
		type: "GET",
		dataType: "jsonp", //next time don't forget the Cap on Type, it's not datatype but dataType!!!
		url: "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?",
		success: function(streaming) {
			var stream = streaming.stream;
			if (stream === null) {
				$("#fcc").html(
					"<h2>" +
						fccName +
						"</h2><h3><a href='" +
						fccUrl +
						"' target='_blank'> is currently offline... </a>:'(</h3> <p>" +
						fccBio +
						"</p>"
				);
			} else {
				$("#fcc").html(
					"<h2>" +
						fccName +
						"</h2><h3><a href='" +
						fccUrl +
						"' target='_blank'> is currently online! </a> :) </h3> <p>" +
						fccBio +
						"</p>"
				);
			}
		}
	});

	//about the others

	for (var x = 0; x < userNames.length; x++) {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url:
				"https://wind-bow.gomix.me/twitch-api/users/" +
					userNames[x] +
					"?callback=?",
			success: function(data2) {
				name2 = data2.display_name;
				bio2 = data2.bio;
			} //end of success
		}); //end of ajax data2

		$.ajax({
			type: "GET",
			dataType: "jsonp",
			url:
				"https://wind-bow.gomix.me/twitch-api/streams/" +
					userNames[x] +
					"?callback=?",
			success: function(data3) {
				if (data3.stream === null) {
					$("#offline").prepend(
						$("<div/>", { id: "offUsers" + x, class: "offUsersInfo" })
					);
					$("#offUsers" + x).html("<h3>" + name2 + "</h3> <p>" + bio2 + "</p>");
				} else {
					$("#online").prepend(
						$("<div/>", { id: "onUsers" + x, class: "onUsersInfo" })
					);
					$("onUsers" + x).html("<h3>" + name2 + "</h3> <p>" + bio2 + "</p>");
				}
			}
		});
	} //end of for
}); //end of doc
