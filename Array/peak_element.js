// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

// Constraints:

// 1 <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1
// nums[i] != nums[i + 1] for all valid i.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let N=nums.length
    // console.log("nums.length===",nums.length)
    if(nums.length===1 || nums[0]>nums[1]){
        return 0
    }
    if(nums[nums.length-1]>nums[nums.length-2]){
        return nums.length-1
    }
    let left =0
    let right = nums.length -1
    // console.log("N-1",right)
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[mid+1] && nums[mid-1]<nums[mid]){
            return mid
        }
        else if (nums[mid+1]>nums[mid]){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
};