// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}

// }


$(document).ready(function(){
  $("#subscribe").change(function(){
    if($("#subscribe").prop("checked")){
      console.log("selected");
      $("#emailField").css("display","block");
    }
    else{
      console.log("Not selected");
      $("#emailField").css("display","none");
    }
  })
})
