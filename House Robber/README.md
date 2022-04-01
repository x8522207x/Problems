# 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night.**

Given an integer array `nums` representing the amount of money of each house, return _the maximum amount of money you can rob tonight **without alerting the police.**_

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400


# 解題思路

<table>
  <thead>
    <tr>
      <th>二進制字串</th>
      <th>十進制數字</th>
      <th>從字串後面數字1開始算第1個1的位數</th>
      <th>除了第一個1之外，剩下1的數量</th>
      <th>答案算法</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <th>1</th>
      <th>1</th>
      <th>0</th>
      <th>1+0=1</th>
    </tr>
    <tr>
      <th>10</th>
      <th>2</th>
      <th>2</th>
      <th>0</th>
      <th>2+0=2</th>
    </tr>
    <tr>
      <th>11</th>
      <th>3</th>
      <th>2</th>
      <th>1</th>
      <th>2+1=3</th>
    </tr>
    <tr>
      <th>100</th>
      <th>4</th>
      <th>3</th>
      <th>0</th>
      <th>3+0=3</th>
    </tr>
    <tr>
      <th>101</th>
      <th>5</th>
      <th>3</th>
      <th>1</th>
      <th>3+1=4</th>
    </tr>
    <tr>
      <th>110</th>
      <th>6</th>
      <th>3</th>
      <th>1</th>
      <th>3+1=4</th>
    </tr>
    <tr>
      <th>111</th>
      <th>7</th>
      <th>3</th>
      <th>2</th>
      <th>3+2=5</th>
    </tr>
  </tbody>
</table>

<br>找第一個1看他幾個位數  ex. <span style="color: red;">1</span>00100 => 6
<br>找除了第一個1，剩下1的數量   ex.  100<span style="color: red;">1</span>00 => 1
<br>答案兩個數字加起來


