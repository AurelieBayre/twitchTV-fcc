$(document).ready(function() {
	var userList = [
		"ESL_SC2",
		"OgamingSC2",
		"cretetion",
		"freecodecamp",
		"storbeck",
		"habathcx",
		"RobotCaleb",
		"noobs2ninjas"
	];

	function getDisplayName (username)
	{
		$.ajax(
			{
		type: "GET",
		dataType: "jsonp",
		url: "https://wind-bow.gomix.me/twitch-api/users/" + username + "?callback=?",
		success: function(data)
				{
			var displayName = data.display_name;
			var bio = data.bio;
			$('#' + username).append('<p>'+ bio + '</p>');
				}
			});
	}

	function getStreamStatus (username)
	{

	}

	function getStreamdetails (username)
	{

	}

	function displayApiInfo ()
	{

	}

	$.each(userList, function (username)
	{
		username = this;
		$("#results").append('<div id="' + username + '">hello '+ username + '!</div>');
		getDisplayName (username);
	});
}); //end of (kara)doc, Merci, de rien, au revoir messieurs-dames. (Perceval forever)
