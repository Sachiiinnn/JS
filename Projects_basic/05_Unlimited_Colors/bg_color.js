// generate random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
const startChangeColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBackgroundColor, 1000);
    }
    function changeBackgroundColor() { 
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    document.body.style.backgroundColor = '#212121'
};
document.querySelector('#Start').addEventListener('click', startChangeColor);
document.querySelector('#Stop').addEventListener('click', stopChangeColor);