// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}


$(document).ready(function(){
	$("#useBilling").change(function(){
		if($("#useBilling").prop("checked")){
			$("#home").val($("#billing").val());
			$("#home").prop("disabled","true");
		}
		else{
			$("#home").val("");
			$("#home").prop("disabled",!($("#home").prop("disabled")));
		}
	})
})

