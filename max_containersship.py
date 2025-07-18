# You are given a positive integer n representing an n x n cargo deck on a ship. Each cell on the deck can hold one container with a weight of exactly w.

# However, the total weight of all containers, if loaded onto the deck, must not exceed the ship's maximum weight capacity, maxWeight.

# Return the maximum number of containers that can be loaded onto the ship.

 

# Example 1:

# Input: n = 2, w = 3, maxWeight = 15

# Output: 4

# Explanation:

# The deck has 4 cells, and each container weighs 3. The total weight of loading all containers is 12, which does not exceed maxWeight.

# Example 2:

# Input: n = 3, w = 5, maxWeight = 20

# Output: 4

# Explanation:

# The deck has 9 cells, and each container weighs 5. The maximum number of containers that can be loaded without exceeding maxWeight is 4.


class Solution:
    def maxContainers(self, n: int, w: int, maxWeight: int) -> int:
        # min_w=0
        # c=0
        # cap = n* n +1
        # for i in range(1,cap):
        #     if i*w <= maxWeight:
        #         # min_w=(n**2)*w
        #         c+=1
        #     else:
        #         break
        # return c
        max_possible = (maxWeight // w) 
        max_on_deck = n * n             
        return min(max_possible, max_on_deck)
        