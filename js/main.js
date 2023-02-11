const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (min >= max || max <= min) {
    let temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getMaximumStringLength = (string, maxLength) => (string.length <= maxLength) ? true : false;

getRandomIntInclusive();
getMaximumStringLength();