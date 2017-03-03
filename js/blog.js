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
								link = item;
						} else {
							if(i=="updated_at"){
								date = item;	
								}
							}
						}
					})
				})
			$("ul").append(
				'<li><a href="' + link + '">' +projectName+
				'</a><p>'+date+'</p></li>');	
			}
		})
	})
});