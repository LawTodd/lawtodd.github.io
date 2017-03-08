$(document).ready(function(){
	$.get("https://api.github.com/users/lawtodd",
		function(data,status){
			
			var item = data.repos_url;
			$.get(item,function(data,status){
				
				$.each(data, function(i,item){
					var aRepo = data[i];
					var	projectName = aRepo.name;
					var	projectLink = aRepo.html_url;
					var	projectDate = aRepo.updated_at;	
					$("ul.list-unstyled").append(
						'<li><a href="' + projectLink + '">' + projectName +
						'</a><p>'+ projectDate +'</p></li>');
					});	
			})
	})
});

