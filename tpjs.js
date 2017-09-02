$(document).ready(function()
{


	var userList = [
		"ESL_SC2",
		"OgamingSC2",
		"cretetion",
		"freecodecamp",
		"storbeck",
		"rowrow_",
		"habathcx",
		"abitoftaste",
		"RobotCaleb",
		"noobs2ninjas",
		"frenchcodeur",
		"connorgaunt",
		"pizzapuff1990",
		"fullstopcoding",
		"laink"
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
			//var logo = data.logo;

					$('#name'+ username).html(displayName);

				//$('#' + username).append('<img src="' + logo +'" alt="logo_'+ username +'" style="width:60px;height:60px;">');

				if (bio !== null)
						{
							$('#bio' + username).html('About: '+ bio + '');
						}
					else
						{
							$('#bio' + username).html('About: no description!');
						}
				}
			});
	}

	//getting channel url
		function addUrl (username)

	{
		$.ajax(
		{
			type: 'GET',
			dataType : 'jsonp',
			url: "https://wind-bow.gomix.me/twitch-api/channels/" + username + "?callback=?",
			success: function(data3)
			{
				var channelUrl = data3.url;
				console.log(channelUrl);
				$('#stream' + username).wrap('<a href="'+ channelUrl +'" target="_blank"></a>');
			}
		});
	}
	// getting streaming results :  offline or currently streaming, and what are they streaming.
	function getStreamInfo (username)
	{

		$.ajax(
			{
		type: "GET",
		dataType: "jsonp",
		url: "https://wind-bow.gomix.me/twitch-api/streams/" + username + "?callback=?",

		success: function(data2)
				{
			var displayStatus = data2.stream;


					if (displayStatus !== null)
						{
							var currentlyStreaming = data2.stream.game; // this had to be placed here and not before the if...
							$('#stream' + username).html('Currently streaming: '+ currentlyStreaming + '');
						}
					else
						{
							$('#stream' + username).html('Offline!');
						}
					}
				});
		}




	$.each(userList, function (username)
	{
		username = this;
$("#results").append(
	'<div id="' + username + '"><h3 id="name'+ username +'"></h3><p id="bio'+ username + '"></p><p id="stream'+ username+'"></p></div>'
);
		addUrl (username);
		getDisplayName (username);
		getStreamInfo (username);


	});
//});
	//end of (kara)doc, Merci, de rien, au revoir messieurs-dames. (Perceval forever <3 ) (French TV series joke)


	// sorting options

	$("#on").click(function()
	{
		$("#results").html("<p>This will show the twitchers who are currently streaming.</p>");
	})

	$("#off").click(function()
	{
		$("#results").html("<p>This will show the twitchers who are offline.</p>");
	})

	$("#all").click(function()
	{
		$("#results").html("<p>All the channels will be displayed here.</p>");
	})
})
