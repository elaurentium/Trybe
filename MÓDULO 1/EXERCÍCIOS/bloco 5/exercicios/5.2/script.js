function createH1AndSetChild(){
    const element = document.createElement('h1');
    element.innerText = 'exercicios 5.2';
    document.body = appendChild(element);
}

function createMainAndSetClassAndChild(){
    const create = document.createElement('main');
    create.className = 'main-content';
    document.body = appendChild(create);
}

function createSectionAndSetClassAndMainChild(){
    const sectionElement = document.createElement('section');
    sectionElement.className = 'center-content';
    document.main = appendChild(sectionElement);
}

function paragraphChildSection(){
    createSectionAndSetClassAndMainChild();
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'test';
    sectionElement.appendChild(paragraph);
}

function createSectionAndSetClassSetChild(){
    createMainAndSetClassAndChild();
    const sectionLeft = document.createElement('section');
    sectionLeft.className = 'left-content';
    create.appendChild(sectionLeft);
}

function createSectionRight(){
    createMainAndSetClassAndChild();
    const sectionRight = document.createElement('section');
    sectionRight.className = 'right-content';
    create.appendChild(sectionRight);
}

function createImg(){
    createSectionAndSetClassSetChild();
    const img = document.createElement('img');
    img.className = 'small-img';
    img.src = 'https://picsum.photos/200';
    sectionLeft.appendChild(img);
}