class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        correct = set(range(1, len(nums)+1)) - set(nums)
        if bool(correct):
            return min(correct)
        return max(nums) + 1

teste = Solution()
print(
    teste.firstMissingPositive([2]),
    teste.firstMissingPositive([3,4,-1,1]),
    teste.firstMissingPositive([1,2,0]),
    teste.firstMissingPositive([2,1]),
    teste.firstMissingPositive([0]),
    teste.firstMissingPositive([1]),
    teste.firstMissingPositive([7,8,9,11,12]),
    sep='\n'
)