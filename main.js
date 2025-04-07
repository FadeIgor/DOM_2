const mainTitle = document.querySelector('h1');
const btn = document.querySelector('button');
const ChangeColorInp = document.querySelector('#ChangeColorInp');
const ChangeInnerTxt = document.querySelector('#ChangeInnerTxt');

function changeColor(kolor) {
    mainTitle.style.color = kolor;
}

function changeTxt(tekst) {
    if(tekst != ""){
        mainTitle.innerText = tekst;     
    }
    else mainTitle.innerText = "nie podales tytulu";     
}

btn.addEventListener('click', function() {
    changeColor(ChangeColorInp.value); 
    changeTxt(ChangeInnerTxt.value);  
    this.style.backgroundColor = ChangeColorInp.value; 
});
