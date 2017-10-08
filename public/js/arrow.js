$(document).ready(function() {

	if (windowWidth > 1024) {

	    $(".a-cmp-arrow").hover(function(){
		    $(this).attr("src", function(index, attr){
		        return attr.replace(".png", "-hover.png");
		    });
		}, function(){
		    $(this).attr("src", function(index, attr){
		        return attr.replace("-hover.png", ".png");
		    });
		});

	};

});