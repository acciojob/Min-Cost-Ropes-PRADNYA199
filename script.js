function mincost(arr)
{ 
	
   let heap = arr.slice(); // Clone the array
    heap.sort((a, b) => a - b);

    let totalCost = 0;

    while (heap.length > 1) {
        // Remove the two smallest elements
        let first = heap.shift();
        let second = heap.shift();

        // Calculate the cost of connecting these two ropes
        let cost = first + second;
        totalCost += cost;

        // Insert the combined rope length back into the heap and keep it sorted
        heap.push(cost);
        heap.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports=mincost;
