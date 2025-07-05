const button = document.querySelectorAll('.button');
// console.log(button);

const body = document.querySelector("body");
// console.log(body);

button.forEach((button) =>{
    // console.log(button);
    button.addEventListener('click', function(event){
        // console.log(event);
        console.log(event.target);
        // switch (event.target.id) {
        //     case 'grey':
        //         body.style.backgroundColor = 'grey';
        //         break;
        //     case 'white':
        //         body.style.backgroundColor = 'white';
        //         break;
        //     case 'blue':
        //         body.style.backgroundColor = 'blue';
        //         break;
        //     case 'green':
        //         body.style.backgroundColor = 'green';
        //         break;
        //     default:
        //         break;
        // }
        body.style.backgroundColor = event.target.id;
    })
})