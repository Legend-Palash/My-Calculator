

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let aclear = document.querySelector('.btn-allclear');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(screen.value==='0'){
                screen.value='';
            }
            let value = e.target.dataset.num;
            screen.value +=value;
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value===''){
            screen.value = '0';
        }
        else{
            let ans = eval(screen.value);
            screen.value=ans;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value=screen.value.slice(0,-1);
        if(screen.value===''){
            screen.value='0';
        }
    })
    aclear.addEventListener('click', function(e){
        screen.value='0';
    })

