const text_area = document.querySelector('#text_area');
const btn_mayus = document.querySelector('#btn_Mayus');
const btn_minus = document.querySelector('#btn_Minus');
const btn_Imayus = document.querySelector('#btn_IMayus');
const btn_clean = document.querySelector('#btn_Clean');


btn_mayus.addEventListener('click', ConvertMayus);
btn_minus.addEventListener('click', ConvertMinus);
btn_Imayus.addEventListener('click', ConvertImayus);

function ConvertMayus(){
    const text = document.getElementById('text_area').value;
    document.write(text.toUpperCase())
}


function ConvertMinus(){
    const text = document.getElementById('text_area').value;
    // document.write(text.toLowerCase())
    document.write("Hola")    
}


function ConvertImayus(){
    const text = document.getElementById('text_area').value;
    return text.charAt(0).toUpperCase() + text.slice(1);
}
