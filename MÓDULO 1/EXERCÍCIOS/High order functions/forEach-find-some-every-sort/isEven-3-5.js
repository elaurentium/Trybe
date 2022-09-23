const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const isEven = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return isEven;
};

console.log(findDivisibleBy3And5());