/**
 * Breadth-first Search
 * - Searching a tree data structure for a node that satisfies a given property.
 * 
 * Assumption: All edges carry the same weight.
 * 1. Starts at the tree root.
 * 2. Get all next-level nodes.
 * 3. Push all next-level nodes into queue for checking.
 * 4. Remove visited node from queue.
 * 5. Visit next node in the queue and check.
 * 
 * What to check?
 * 1. Is the node the target?
 *    YES - Stop searching.
 *          Number of levels between origin and the node = shortest distance.
 *    NO  - Step 2.
 * 2. Has the node been visited?
 *    YES - Skip. Its next-level nodes already exists in the queue.
 *    NO  - Get all next-level nodes.
 *          Push all next-level nodes into queue for checking.
 */

/**
 * Find all next-level neighbours in clock-wise direction.
 */
const getAllNeighbours = ([positionX, positionY, moveCounter]) => {
    return [
        [positionX + 1, positionY + 2, moveCounter + 1],
        [positionX + 2, positionY + 1, moveCounter + 1],
        [positionX + 1, positionY - 2, moveCounter + 1],
        [positionX + 2, positionY - 1, moveCounter + 1],
        [positionX - 1, positionY - 2, moveCounter + 1],
        [positionX - 2, positionY - 1, moveCounter + 1],
        [positionX - 2, positionY + 1, moveCounter + 1],
        [positionX - 1, positionY + 2, moveCounter + 1],
    ];
}

const getSetKey = (positionX, positionY) => {
    return `[${positionX},${positionY}]`;
}

const search = (targetX, targetY) => {
    let moves = 0;
    let origin = [0, 0, 0];
    let queue = [origin];
    let visited = new Set('[0,0]');

    /**
     * Stop when there are no nodes to check
     * i.e. the queue is empty.
     */
    while(queue.length > 0) {
        /**
         * Visit next node in the queue.
         * First node in the queue is the origin.
         **/
        const [currentX, currentY, currentMoveCounter] = queue.shift();
        
        /**
         * Is the node the target? YES.
         * Stop searching.
         * Number of levels between origin and the node = shortest distance.
         **/
        if (currentX === targetX && currentY === targetY) {
            return currentMoveCounter;
        }

        /**
         * Is the node the target? NO.
         * Get all next-level nodes.
         */
        const neighbours = getAllNeighbours([currentX, currentY, currentMoveCounter], [targetX, targetY]);

        /**
         * Has the next node been visited?
         * YES - The next-level nodes are already in the queue. Skip.
         * NO  - Push all next-level nodes into queue for checking.
         * Note: The later in the queue, the lower / further level from the origin.
         */
        for (const i of neighbours) {
            if (!visited.has(getSetKey(i[0], i[1]))) {
                queue.push(i);
                visited.add(getSetKey(i[0], i[1]));
            }
        }
    }

    return moves;
}
var minKnightMoves = function(x, y) {
    return search(x, y);    
};