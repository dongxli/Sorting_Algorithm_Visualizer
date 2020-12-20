export default function getQuickSortAnimations(array) {
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

const quickSort = (array, l, r, animations) => {
  if (l < r) {
    let p = partition(array, l, r, animations);

    quickSort(array, l, p - 1, animations);
    quickSort(array, p + 1, r, animations);
  }
};

const partition = (array, l, r, animations) => {
  let pivot = array[r];
  //   let i = l - 1;
  let i = l;
  for (let j = l; j < r; j++) {
    if (array[j] < pivot) {
      //   i++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      animations.push([i, j]);
      animations.push([i, j]);
      animations.push([i, array[i]]);
      animations.push([j, array[j]]);

      i++;
    }
  }
  let temp = array[i];
  array[i] = array[r];
  array[r] = temp;
  animations.push([i, r]);
  animations.push([i, r]);
  animations.push([i, array[i]]);
  animations.push([r, array[r]]);

  return i;
};
