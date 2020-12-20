export default function getInsertionSortAnimations(array) {
  const animations = [];
  insertionSort(array, animations);
  return animations;
}

const insertionSort = (array, animations) => {
  let array_len = array.length;
  for (let i = 1; i < array_len; i++) {
    let curr_val = array[i];
    let pointer = i - 1;

    while (pointer >= 0 && curr_val < array[pointer]) {
      animations.push(["c1", pointer, i]);
      animations.push(["c2", pointer, i]);
      animations.push(["swap", pointer + 1, array[pointer]]);
      array[pointer + 1] = array[pointer];
      pointer--;
    }
    animations.push(["swap", pointer + 1, curr_val]);
    array[pointer + 1] = curr_val;
  }
};
