export default function getSelectionSortAnimations(array) {
  const animations = [];
  selectionSort(array, animations);
  return animations;
}

const selectionSort = (array, animations) => {
  let array_len = array.length;

  for (let i = 0; i < array_len - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < array_len; j++) {
      animations.push(["c1", i, min_index]);
      animations.push(["c2", i, min_index]);
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    let temp = array[i];
    array[i] = array[min_index];
    array[min_index] = temp;
    animations.push(["swap", i, array[i]]);
    animations.push(["swap", min_index, array[min_index]]);
  }
};
