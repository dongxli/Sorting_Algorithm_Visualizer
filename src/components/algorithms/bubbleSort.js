export default function getBubbleSortAnimations(array) {
  const animations = [];
  bubbleSort(array, animations);
  return animations;
}

const bubbleSort = (array, animations) => {
  let array_len = array.length;

  for (let i = 0; i < array_len - 1; i++) {
    for (let j = 0; j < array_len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }
  }
};
