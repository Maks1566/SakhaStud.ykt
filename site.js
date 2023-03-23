let theInfo = document.querySelectorAll('.theInfo');
let next = document.querySelectorAll('.next');
let prev = document.querySelectorAll('.prev');

for(let i=0; i<next.length; i++){
    next[i].onclick = function(){
        theInfo[i].style.display = 'none';
        theInfo[i+1].style.display = 'block';
    }
    prev[i].onclick = function(){
        theInfo[i].style.display = 'none';
        theInfo[i-1].style.display = 'block';
    }
}

// let swapBoxes = document.querySelectorAll('.swapBoxes');

// for(let i=0;i<swapBoxes.length; i++){
//     swapBoxes[i].addEventListener('mousedown', function(event){
//         // for(;;){
//         //     swapBoxes[i].style.left = event.clientX;
//         // }
//         console.log(event.clientX);
//     })
// }

// <div class="container" style="margin-top: 10vh;">
// 	<div class="dislike"></div>
// 	<div class="box4swap">
// 		<div class="swapBoxes" style="z-index: 10;">что-то1</div>
// 		<div class="swapBoxes" style="z-index: 9;">что-то2</div>
// 		<div class="swapBoxes" style="z-index: 8;">что-то3</div>
// 		<div class="swapBoxes" style="z-index: 7;">что-то4</div>
// 		<div class="swapBoxes" style="z-index: 6;">что-то5</div>
// 	</div>
// 	<div class="like"></div>
// </div>