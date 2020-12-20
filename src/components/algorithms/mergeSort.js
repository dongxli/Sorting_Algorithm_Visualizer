export default function getMergeSortAnimations(array) {
  const animations = [];
  mergeSort(array, 0, array.length - 1, animations);
  return animations;
}

const mergeSort = (array, l, r, animations) => {
  if (l < r) {
    let m = Math.floor((l + r) / 2);
    mergeSort(array, l, m, animations);
    mergeSort(array, m + 1, r, animations);
    merge(array, l, m, r, animations);
  }
};

const merge = (array, l, m, r, animations) => {
  let size1 = m - l + 1;
  let size2 = r - m;
  let a1 = [];
  let a2 = [];

  for (let i = 0; i < size1; i++) {
    a1.push(array[l + i]);
  }

  for (let i = 0; i < size2; i++) {
    a2.push(array[m + 1 + i]);
  }

  let i = 0;
  let j = 0;
  let k = l;
  while (i < size1 && j < size2) {
    animations.push(["c1", l + i, l + j]);
    animations.push(["c2", l + i, l + j]);
    if (a1[i] <= a2[j]) {
      animations.push(["swap", k, a1[i]]);
      array[k] = a1[i];
      i++;
    } else {
      animations.push(["swap", k, a2[j]]);
      array[k] = a2[j];
      j++;
    }
    k++;
  }
  while (i < size1) {
    animations.push(["c1", k, k]);
    animations.push(["c2", k, k]);
    animations.push(["swap", k, a1[i]]);
    array[k] = a1[i];
    i++;
    k++;
  }
  while (j < size2) {
    animations.push(["c1", k, k]);
    animations.push(["c2", k, k]);
    animations.push(["swap", k, a2[j]]);
    array[k] = a2[j];
    j++;
    k++;
  }
};
