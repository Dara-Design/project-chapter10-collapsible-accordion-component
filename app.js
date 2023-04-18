let allTitles = document.querySelectorAll('.title');
console.log(allTitles);
let allText = document.querySelectorAll('.myText');


allTitles.forEach((el)=>{
  el.addEventListener('click', (event) =>{
    console.log(el.nextElementSibling);
    el.nextElementSibling.classList.add('active');
    
  })
})


allText.forEach((el) =>{
  el.addEventListener('click', (e) =>{
    el.classList.remove('active');
  })
})




  
