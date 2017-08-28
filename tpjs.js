$(document).ready(function()
{
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
