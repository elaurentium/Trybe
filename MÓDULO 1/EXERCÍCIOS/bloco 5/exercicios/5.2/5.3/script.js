function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function daysOfMonth(){
    let getDays = document.querySelector('#days');
    
    for(let index = 0; index < daysOfMonth.length; index += 1){
        let days = daysOfMonth[index];
        let daysList = document.createElement('li');
        daysList.innerHTML = day;

        if(days === 24 || days === 31){
            daysList.className = 'holiday';
            getDays.appendChild(daysList);
        } else if(days === 4 || days === 11 || days === 18){
            daysList.className = 'friday';
            getDays.appendChild(daysList);
        } else if(days === 25){
            daysList.className = 'day, holiday and friday';
            getDays.appendChild(daysList);
        } else {
            daysList.className = 'day';
            getDays.appendChild(daysList);
        }
    }
  }
daysOfMonth();

function holidayButton(button){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let buttonId = 'btn-holiday';

    newButton.innerHTML = button;
    newButton.id = buttonId;

    buttonContainer.appendChild(newButton);
}

holidayButton('Feriados');

function changeColorHoliday(){
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    holidayButton.addEventListener('click', function(){
        for(let index = 0; index < holidays.length; index += 1){
            if(holidays[index].style.backgroundColor === setNewColor){
                holidays[index].style.backgroundColor = backgroundColor;
            } else {
                holidays[index].style.backgroundColor = setNewColor;
            }
        }
    });
}
changeColorHoliday();

function fridayButton(buttonContainer){
    let button = document.querySelector('.btn-friday');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-friday';
    
    newButton.innerHTML = buttonContainer;
    newButton.id = newButtonId;
    button.appendChild(newButton);
}

fridayButton('Sexta-Feira');