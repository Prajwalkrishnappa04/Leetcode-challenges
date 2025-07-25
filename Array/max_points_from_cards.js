// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

 

// Example 1:

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
// Example 2:

// Input: cardPoints = [2,2,2], k = 2
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
// Example 3:

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
 

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let leftsum=0,rightsum=0,maxsum = 0
    let left=0 , right = cardPoints.length-1
    for (let i=0;i<k;i++){
        leftsum+=cardPoints[i]
        maxsum=leftsum
    }
    // console.log("leftsum--",leftsum)
    for (let j=k-1;j>=0;j--){
        leftsum-=cardPoints[j]
        rightsum+=cardPoints[right]
        right--
        maxsum=Math.max(maxsum,leftsum+rightsum)
    }
    return maxsum
};