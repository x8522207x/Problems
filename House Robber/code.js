/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let indexSums = [];
  indexSums[-2] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let idx in indexSums) {
      if ((i - idx >= 2) && (i - idx <= 3)) {
        indexSums[i] = Math.max(indexSums[i] ?? 0, nums[i] + indexSums[idx]);
      }
    }
  }

  return Math.max(...indexSums);
};