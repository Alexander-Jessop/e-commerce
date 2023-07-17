const RanNumGen = (min, max, quantity) => {
  const randomNumbers = [];
  for (let i = 0; i < quantity; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

export default RanNumGen;
