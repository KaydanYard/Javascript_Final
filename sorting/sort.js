function sort(list) {
  for (let idx = 0; idx < list.length; idx++) {
    let min = list[idx];
    let minIdx = idx;

    for (let sorter = idx + 1; sorter < list.length; sorter++) {
      const item = list[sorter];

      if(item < min) {
        min = item;
        minIdx = sorter;
      } 
    }
    const temp = list[idx]
    list[idx] = min;
    list[minIdx] = temp;
  }
  return list;
}