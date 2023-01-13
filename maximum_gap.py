#Link = https://leetcode.com/problems/maximum-gap/

class Solution:
    def maximumGap(self, nums: list[int]) -> int:
        distance = 0
        nums.sort()
        for i in range(len(nums)-1):
            temporary_distance = abs((nums[i + 1]) - nums[i])
            if temporary_distance > distance:
                distance = temporary_distance
        return distance
a = Solution()
print(
    a.maximumGap([
        15252,16764,27963,7817,26155,20757,3478,22602,20404,6739,
        16790,10588,16521,6644,20880,15632,27078,25463,20124,15728,
        30042,16604,17223,4388,23646,32683,23688,12439,30630,3895,
        7926,22101,32406,21540,31799,3768,26679,21799,23740
        ]),
    a.maximumGap([100,3,2,1]),
    a.maximumGap([10]),
    a.maximumGap([3,6,9,1]),
    sep='\n'
)