export default function getHeapSortAnimations(array) {
  const animations = [];
  heapSort(array, animations);
  return animations;
}

const heapSort = (array, animations) => {
  let array_len = array.length;

  for (let i = array_len / 2 - 1; i >= 0; i--) {
    heapify(array, array_len, i, animations);
  }

  for (let i = array_len - 1; i > 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    animations.push(["swap", 0, array[0]]);
    animations.push(["swap", i, array[i]]);

    heapify(array, i, 0, animations);
  }
};

const heapify = (array, n, i, animations) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n) {
    animations.push(["c1", i, l]);
    animations.push(["c2", i, l]);
  }
  if (r < n) {
    animations.push(["c1", i, r]);
    animations.push(["c2", i, r]);
  }

  if (l < n && array[l] > array[largest]) {
    largest = l;
  }
  if (r < n && array[r] > array[largest]) {
    largest = r;
  }
  if (largest != i) {
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;
    animations.push(["swap", i, array[i]]);
    animations.push(["swap", largest, array[largest]]);

    heapify(array, n, largest, animations);
  }
};
