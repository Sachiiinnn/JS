# Solution

## Project 1 : Color Changing Background

``` Javascript
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
```

## Project 2 : BMI Calculator

``` javascript
const form = document.querySelector('form');
// this usecase will give u empty
// const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit', function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height. ${hieght}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight. ${weight}`
    } else {
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            result.innerHTML = `<span>Underweight : ${bmi} BMI</span>`
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `<span>Normal range : ${bmi} BMI</span>`
        }
        else{
            result.innerHTML = `<span>Overweight : ${bmi} BMI</span>`
        }
    }
})
```

## Project 3 : Project Code

```javascript
const clock = document.querySelector('#clock');


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```