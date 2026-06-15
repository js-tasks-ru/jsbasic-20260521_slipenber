function getMinMax(str) {
  const num = str
    .split(' ')
    .map(item => Number(item))
    .filter(item => !isNaN(item));
    const min = num.reduce((result, current) => result < current ? result : current)
    const max = num.reduce((result, current) => result > current ? result : current)
      return {min, max};
}