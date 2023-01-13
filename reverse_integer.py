#Link = https://leetcode.com/problems/reverse-integer/

class Solution:
    def reverse(self, x: int) -> int:
        v = str(abs(x))
        number = int(v[::-1])
        if number > 2 ** 31 -1: 
            return 0
        if x < 0:
            return number*(-1)
        else:
            return number



i1 = Solution()
i2 = Solution()
i3 = Solution()
print(
    i1.reverse(-2147483412), 
    i1.reverse(-2147483648), 
    i1.reverse(123), 
    i2.reverse(-123), 
    i3.reverse(120), 
    sep='\n'
    )