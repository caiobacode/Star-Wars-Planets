import megaFilter from './funcs';

const ovots = (filt, ar) => {
  let small = ar;
  for (let index = 0; index < filt.length; index += 1) {
    small = megaFilter(filt[index], small);
  }
  return small;
};

export default ovots;
