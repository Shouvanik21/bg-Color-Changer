const red=document.getElementById('one')
const blue=document.getElementById('two')
const green=document.getElementById('three')
const yellow=document.getElementById('four')
const pink=document.getElementById('five')
const silver=document.getElementById('six')

red.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="#FF6347";
})

blue.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="#00BFFF";
})

green.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="#7CFC00";
})

yellow.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="#FFD700";
})

pink.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="#FF69B4";
})

silver.addEventListener('click',function(e){
    document.getElementById('box1').style.backgroundColor="#A9A9A9";
})