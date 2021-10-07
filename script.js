const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  red.style.backgroundColor = "red"
  yellow.style.backgroundColor = "yellow"
  green.style.backgroundColor = "green"
  console.log(red.style.margin)
  
})


// btn.addEventListener('click', () => {
//   red.style.backgroundColor = "red"
//   yellow.style.backgroundColor = "yellow"
//   green.style.backgroundColor = "green"
// })

// btn.addEventListener('click', () => {
//   if (red.style.transition == '10s' && yellow.style.transition == '10s'){
//     red.style.backgroundColor = 'white' && yellow.style.backgroundColor =='white' 
//   }
//   else{
//     green.style.backgroundColor = "green"
//   }
// })

