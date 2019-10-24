

const jQuery = require('jquery')

$('svg').click(function(){
    let d4 = Math.floor(Math.random() * 4) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;
    let d8 = Math.floor(Math.random() * 8) + 1;
    let d10 = Math.floor(Math.random() * 10) + 1;
    let d12 = Math.floor(Math.random() * 12) + 1;
    let d20 = Math.floor(Math.random() * 20) + 1;
    switch(this.id){
        case 'd4':
            $('.roll-result').html(d4);
            break;
        case 'd6':
            $('.roll-result').html(d6);
            break;
        case 'd8':
            $('.roll-result').html(d8);
            break;
        case 'd10':
            $('.roll-result').html(d10);
            break;
        case 'd12':
            $('.roll-result').html(d12);
            break;
        case 'd20':
            $('.roll-result').html(d20);
            break;
    }
})