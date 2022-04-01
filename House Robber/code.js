/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let mem = [];
  for (let i = 0; i < nums.length; i++) {
    mem[i] = Math.max(mem[i] ?? 0, nums[i] + (mem[i - 2] ?? 0), nums[i] + (mem[i - 3] ?? 0));
  }

  return Math.max(...mem);
};