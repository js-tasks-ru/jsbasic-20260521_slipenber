let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  const num = str
    .split(' ')
    .map(item => Number(item))
    .filter(item => !isNaN(item));
    const min = num.reduce((result, current) => result < current ? result : current)
    const max = num.reduce((result, current) => result > current ? result : current)
      return {min, max};
}

console.log(getMinMax(inputData));