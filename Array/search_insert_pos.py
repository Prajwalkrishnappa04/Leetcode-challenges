# // Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# // You must write an algorithm with O(log n) runtime complexity.

 

# // Example 1:

# // Input: nums = [1,3,5,6], target = 5
# // Output: 2
# // Example 2:

# // Input: nums = [1,3,5,6], target = 2
# // Output: 1
# // Example 3:

# // Input: nums = [1,3,5,6], target = 7
# // Output: 4
 

# // Constraints:

# // 1 <= nums.length <= 104
# // -104 <= nums[i] <= 104
# // nums contains distinct values sorted in ascending order.
# // -104 <= target <= 104

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # if target in nums:
        #     for i in range(0,len(nums)):
        #         if nums[i]==target:
        #             return i
        # else:   
        #     for i in range(0,len(nums)):
        #         print("9",nums[i],"i---",nums[i])
        #         if(i==0 and target<nums[i]):
        #             print("11")
        #             return 0
        #         elif ( i==len(nums) and target>nums[-1]):
        #             return len(nums)+1
        #         elif (i<len(nums)-1 and target>nums[i] and target<nums[i+1]):
        #             return i+1
        for i in range(len(nums)):
            if nums[i] >= target:
                return i
        return len(nums)
