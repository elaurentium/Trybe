function changeText(tag) {
    let text = document.getElementsByTagName(tag)[1];
    text.innerText = 'Me vejo em um patar de conhecimento muito avançado.';
}
changeText('p');

function changeSquareColor(change){
    let colorChange = document.getElementsByClassName(change)[0];
    colorChange.style.background = "rgb(76,164,109)";
}
changeSquareColor('main-content');

function changeSquareRed(color){
    let squareToWhite = document.getElementsByClassName(color)[0];
    squareToWhite.style.background = "white";
}
changeSquareRed('center-content');

function textWrong(t){
    let text = document.getElementsByClassName(t)[0];
    text.innerText = "Exercício 5.1 - JavaScript";
}
textWrong('title');

function allTag(all){
    let tag = document.getElementsByTagName(all)[0];
    tag.innerHTML = tag.innerHTML.toUpperCase();
}
allTag('p');

function allContain(contain){
    let view = document.getElementsByTagName(contain);
    for(let index = 0; index < view.length; index += 1){
        view[index].innerHTML;
    }
}
allContain('p');