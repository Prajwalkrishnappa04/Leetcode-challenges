// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let left=0 , right=nums.length-1 ,ans=[]
    for(let i=0;i<nums.length;i++){
        ans.push([nums[i],i])
    }
    // console.log(ans)
    ans.sort((a,b)=>a[0]-b[0])
    while(left<right){
        if(ans[left][0]+ans[right][0]>target){
            right--
        }
        else if(ans[left][0]+ans[right][0]<target){
            left++
        }
        else{
            let idx1=ans[left][1] ,idx2=ans[right][1]
            if (idx2<idx1){
                return [idx2,idx1]
            }
            else{
            return [idx1,idx2]}
        }
    }
    
    return -1
};