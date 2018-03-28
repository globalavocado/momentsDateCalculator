 window.onload = function(){
 document.getElementById("startdate").value = "";
}

 $( function() {
    $( "#startdate").datepicker({
    	dateFormat: "dd/mm/yy"
    });
  } );

		
function dateCalculation ()	{

	var input = document.getElementById("startdate").value;
	var end = moment(input, "DD/MM/YYYY").add(6, 'weeks').format("dddd, LL");

	document.getElementById("result").innerHTML = end;
};
