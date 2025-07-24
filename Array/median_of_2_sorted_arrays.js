// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let l=0,r=0
    let ans=[]
    while(l<nums1.length && r<nums2.length){
        if(nums1[l]<nums2[r]){
            ans.push(nums1[l])
            l++
        }
        else{
            ans.push(nums2[r])
            r++
        }
    }
    while(l<nums1.length){
        ans.push(nums1[l])
            l++
    }
    while(r<nums2.length){
        ans.push(nums2[r])
        r++
    }
    let n = ans.length
    console.log("ans===",ans,"n---",n,"---",Math.floor(n/2),"====",ans[Math.floor(n/2)])
    if(n%2!==0){
        return ans[Math.floor(n/2)]
    }
    else{
        return (ans[Math.floor(n/2)] + ans[Math.floor(n/2)-1])/2
    }
    // return (ans[0]+ans[ans.length-1])/2
    
};