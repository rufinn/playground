const arr = [1,2,1,1,2,3];
const newMap = new Map();

function addNode(node) {
	newMap.set(node, []);
}

function addEdge(node, edge) {
  newMap.get(node).push(edge);
}

for (let i of arr) {
	addNode(i);
}

arr.forEach((item,index) => {
  addEdge(item, index);
});

const result = [];

newMap.forEach((value, key, map) => {
  for (const i of value) {
  	result[i] = value.reduce((prev, curr) => {
    	if (curr != i) {
      	const distance = Math.abs(i - curr);
        return prev + distance;
      }
      return prev;
    }, 0);
	}
  
});

console.log(result)