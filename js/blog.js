$(document).ready(function(){
	$.get("https://api.github.com/users/lawtodd",
		function(data,status){
		alert("Data: " + data + "\nStatus: " + status)
		$.each(data,function(i,item){
			if(i=="repos_url"){
				$.get(item,function(data,status){
					alert("Data: " + data + "\nStatus: " + status)
					$.each(data, function(i,item){
						if(i=="name") {
							projectName = item;
						} else {
							if(i=="html_url"){
								projectLink = item;
						} else {
							if(i=="updated_at"){
								projectDate = item;	
								}
							}
						}
					})
				})
			$("ul").append(
				'<li><a href="' + projectLink + '">' + projectName +
				'</a><p>'+ projectDate +'</p></li>');	
			}
		})
	})
});