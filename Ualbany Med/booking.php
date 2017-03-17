<html>

<head>
<script type="text/javascript" src='js/jquery.js'></script>
<script type="text/javascript" src='js/functions.js'></script>
<script>

   


$(function() {

var urldate = getUrlParameter('date');
//var urlstyle = getUrlParameter('style');
if(urldate){
	$("input[name=date][value="+urldate+"]").prop("checked",true);
	//$("input[name=style][value="+urlstyle+"]").prop("checked",true);
}


	$('#startnext').on('click',function(e){
		
		e.preventDefault();
		
		var dateSelected =  $("input[name='date']:checked").val();
		if (!dateSelected) {
		      alert("please select date");
		     // return false;      
	    } 

	    
	    }

	    if(dateSelected){
	    	location="add.php?date="+dateSelected+";   	
	    }else{
	    	return false;
	    } 

	});
});

</script>

		


</head>





<body>
</br>
</br>
<form method="post" action="select.php" align="center" > 
<!--Name: -->
<div class="form-group">
Date: <input type="date" name="date" id="date" required> <br/><br/>

<input type="submit" value="Next" name="add" id="startnext" >
</form>




</form>
</body>
</html>