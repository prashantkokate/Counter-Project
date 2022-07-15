text=document.getElementById('text')
let count=0
function increaseCount(){
	count=count+1
  text.innerText=count
}
function decreaseCount(){
	count=count-1;
	text.innerText=count;
}
function resetCount(){
	count=0;
	text.innerText=count;
}