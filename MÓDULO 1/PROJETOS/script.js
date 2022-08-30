window.onload = function(){
    const button = document.getElementById('start-race-btn');
    
    const car1 = document.querySelector('.car1');
    const car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function marginStartCar(){
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
    } 

    button.addEventListener('click', function(){
        
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

        if(parseInt(car1.style.marginLeft) > window.innerWidth){
            alert('Carro 1 ganhou !');
            marginStartCar();
        }
        if(parseInt(car2.style.marginLeft) > window.innerWidth){
            alert('Carro 2 ganhou !');
            marginStartCar();
        }
    });
}