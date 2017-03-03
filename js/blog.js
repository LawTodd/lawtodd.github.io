$(document).ready(function(){
	$.get("https://api.github.com/users/lawtodd",
		function(data,status);
	alert("Data: " + data + "\nStatus: " + status);
	getRepos.function(){
		$.get(repos_url,formatRepos)
	}
	formatRepos.function(){
		for ("name" in data) {
			var projectName = name;
			var link = url;
			var date = updated_at;
			$("ul").append(
				'<li><a href="' + link + '">' +projectName+
				'</a><p>'+date+'</p></li>');
		}
	}
});