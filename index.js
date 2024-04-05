let initial=0;
let initial2=0;

let counter1=document.getElementById('counter1');
function increment1(){
    initial+=1
    counter1.innerText=initial;
   
}

let counter2=document.getElementById('counter2')
function increment2(){
    initial2+=1
    counter2.innerText=initial2;

}

function decrement1(){
    initial-=1
    counter1.innerText=initial;
}
function decrement2(){
    initial2-=1
    counter2.innerText=initial2;
}