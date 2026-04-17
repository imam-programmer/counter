let h1=document.querySelector('h1');
let one=document.querySelector('.one');
let two=document.querySelector('.two');

let h2=document.createElement('h2');
let body=document.querySelector('body');
// h2.innerHTML='imam'

body.append(h2)
one.addEventListener('click',()=>{
    if(h1.innerHTML<10){
        h1.innerHTML++
        two.disabled=false
         
    }else if(h1.innerHTML==10){
       one.disabled=true
    }
});
two.addEventListener('click',()=>{
   if(h1.innerHTML>0){
     h1.innerHTML-- 
     one.disabled=false
  }else if(h1.innerHTML==0){
    two.disabled=true
  }
});