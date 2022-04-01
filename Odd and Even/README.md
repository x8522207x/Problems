# Odd and Even

You are given a string S of length N which encodes a non-negative number V in a binary form. Two types of operations may be performed on it to modify its value:
* if V is odd, subtract 1 from it;
* if V is even, divide it by 2.  

These operations are performed until the value of V becomes 0.
For example, if string S = "011100", its value V initially is 28. The value of V would change as follows:
* V = 28, which is even: divide by 2 to obtain 14;
* V = 14, which is even: divide by 2 to obtain 7;
* V = 7, which is odd: subtract 1 to obtain 6;
* V = 6, which is even: divide by 2 to obtain 3;
* V = 3, which is odd: subtract 1 to obtain 2;
* V = 2, which is even: divide by 2 to obtain 1;
* V = 1, which is odd: subtract 1 to obtain 0;  

Seven operations were required to reduce the value of V to 0.
Write a function: def solution (s) that, given a string S consisting of N characters containing a binary representation of the initial value V, returns the number of operations after which its value will become 0.
Examples:
  - Given S = "011100", the function should return 7. String S represents the number 28, which becomes after seven operations, as explained above.
  - Given S = "111", the function should return 5. String Sencodes the number V = Its value will change over the following five operations:
    + V = 7, which is odd: subtract 1 to obtain 6;
    + V = 6, which is even: divide by 2 to obtain 3;
    + V = 3, which is odd: subtract 1 to obtain 2;
    + V = 2, which is even: divide by 2 to obtain 1;
    + V = 1, which is odd: subtract 1 to obtain 0.
  - Given S = "1111010101111', the function should return 22.
  - Given string S consisting of "1" repeated 400,000 times, the function should return 799,999.
Write an efficient algorithm for the following assumptions:
* string S consists only of the characters '0' and/or '1'
* N, which is the length of string S, is an integer within the range [1..1,000,000];    

the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit:
* the binary representation may contain leading zeros.



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


