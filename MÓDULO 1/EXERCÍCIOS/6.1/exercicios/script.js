function textInputValidation() {
    const email = document.querySelector('#email-person').value.length;
    const invalidEmail = email <= 0;
  
    const name = document.querySelector('#person-full-name').value.length;
    const invalidName = name <= 0;
  
    const reason = document.querySelector('#abstract').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    } else {
      return true;
    }
  }

document.getElementById('btn').addEventListener('click', () => {
    const requeriment = textInputValidation();
    if(requeriment === false){
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
        
});