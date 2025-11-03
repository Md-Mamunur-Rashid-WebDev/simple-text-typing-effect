const textContainer = document.querySelector('.text');
const text = textContainer.innerText;
let index = 1;

function autoTyping(){
    const newText = text.slice(0, index);
    textContainer.innerText = newText;
    setTimeout(()=> autoTyping(), 200);
    if(index > text.length){
        index = 1;
    }else{
        index++;
    }
}
autoTyping();