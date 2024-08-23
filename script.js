function mincost(arr)
{ 
	let heap=arr.slice();
	heap.sort((a,b)=>a-b);
	let totalCost=0;
	while(heap.length>1)
		{
			let firstCost=heap.shift();
			let secondCost=heap.shift();
			Cost=firstCost+secondCost;
			totalCost=+Cost;
			heap.push(Cost);
			heap.sort((a,b)=>a-b);
		}
//write your code here
// return the min cost
  return totalCost;
}

module.exports=mincost;
