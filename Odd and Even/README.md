<h1>Odd and Even</h1>

You are given a string S of length N which encodes a non-negative number V in a binary form. Two types of operations may be performed on it to modify its value:
<br>&emsp;• if V is odd, subtract 1 from it;
<br>&emsp;• if V is even, divide it by 2.
<br><br>These operations are performed until the value of V becomes 0.
<br>For example, if string S = "011100", its value V initially is 28. The value of V would change as follows:
<br>&emsp;• V = 28, which is even: divide by 2 to obtain 14;
<br>&emsp;• V = 14, which is even: divide by 2 to obtain 7;
<br>&emsp;• V = 7, which is odd: subtract 1 to obtain 6;
<br>&emsp;• V = 6, which is even: divide by 2 to obtain 3;
<br>&emsp;• V = 3, which is odd: subtract 1 to obtain 2;
<br>&emsp;• V = 2, which is even: divide by 2 to obtain 1;
<br>&emsp;• V = 1, which is odd: subtract 1 to obtain 0;
<br>Seven operations were required to reduce the value of V to 0.
<br>Write a function: def solution (s) that, given a string S consisting of N characters containing a binary representation of the initial value V, returns the number of operations after which its value will become 0.
<br><br>Examples:
<br>&emsp;1. Given S = "011100", the function should return 7. String S represents the number 28, which becomes after seven operations, as explained above.
<br>&emsp;2. Given S = "111", the function should return 5. String Sencodes the number V = Its value will change over the following five operations:
<br>&emsp;&emsp;• V = 7, which is odd: subtract 1 to obtain 6;
<br>&emsp;&emsp;• V = 6, which is even: divide by 2 to obtain 3;
<br>&emsp;&emsp;• V = 3, which is odd: subtract 1 to obtain 2;
<br>&emsp;&emsp;• V = 2, which is even: divide by 2 to obtain 1;
<br>&emsp;&emsp;• V = 1, which is odd: subtract 1 to obtain 0.
<br>&emsp;3. Given S = "1111010101111', the function should return 22.
<br>&emsp;4. Given string S consisting of "1" repeated 400,000 times, the function should return 799,999.
<br><br>Write an efficient algorithm for the following assumptions:
<br>&emsp;• string S consists only of the characters '0' and/or '1'
<br>&emsp;• N, which is the length of string S, is an integer within the range [1..1,000,000];
<br>the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit:
<br>&emsp;• the binary representation may contain leading zeros.

