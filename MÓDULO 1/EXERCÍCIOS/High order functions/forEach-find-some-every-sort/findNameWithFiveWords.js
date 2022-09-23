const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const nameFind = names.find((name) => name.length === 5);
  return nameFind;
};

console.log(findNameWithFiveLetters());