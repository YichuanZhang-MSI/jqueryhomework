// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;





//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
    
//     // alert("You must pick a fruit!")
//     // return false;
//   }



$(document).ready(function(){
    $("#ch3form").submit(function(e){
        console.log($("input[name='fruit']"));
       if($("input[name=fruit]:checked").val() && $("input[name=standing]:checked").val()){
        //return true;
        e.run();
       }
       if($("input[name=fruit]:checked").val()){
        alert("You must pick a standing!");
       }
       else if($("input[name=standing]:checked").val()){
        alert("You must pick a fruit!");
       }
       else{
        alert("You must pick a standing and a fruit!");
       }
       e.preventDefault();

    })
})