document.querySelector('#checker').addEventListener('click', function(){

    let color = document.querySelector('#place').value;
    if(color === 'white'){
        document.querySelector('#place').style.backgroundColor = color;
        document.querySelector('#place').style.color = 'white';
    }else{
            document.querySelector('#place').style.backgroundColor = color;
            document.querySelector('#place').style.color = 'black';
    
    }
});