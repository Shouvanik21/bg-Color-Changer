const red=document.getElementById('one')
const blue=document.getElementById('two')
const green=document.getElementById('three')
const yellow=document.getElementById('four')
const pink=document.getElementById('five')
const silver=document.getElementById('six')

red.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="red";
})

blue.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="blue";
})

green.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="green";
})

yellow.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="yellow";
})

pink.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="pink";
})

silver.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="silver";
})