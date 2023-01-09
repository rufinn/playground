/**
 * DATA = [1,2,1,1,2,3];
 * Find the minimal path from first to next number.
 */
 const nums = [1,2,1,1,2,3];
 const nodeMap = new Map();
 const minDistanceMap = new Map();
 
 function addNode(mapToSet, node) {
   mapToSet.set(node, []);
 }
 
 function addEdge(mapToSet, node, edge) {
   mapToSet.get(node).push(edge);
 }
 
 function init(data) {
   for (let i of data) {
     addNode(nodeMap, i);
     addNode(minDistanceMap, i);
   }
 }
 
 function getAllSiblingNodes (data) {
   data.forEach((item, index) => {
     addEdge(nodeMap, item, index);
   });
 }
 
 function getMinDistance(distances) {
   // distances = [0, 2, 3];
 
   // Origin
   let distance = 0;
   const weight = new Map();
   
 
   for (let i = 0; i < distances.length; i++) {
     const origin = distances[i];
     
     weight.set(origin, distances.map((item, index) => {
       return Math.abs(item - origin);
     }));
   }
 
   printMap(weight);
 
 }
 
 function printMap(mapToPrint) {
   mapToPrint.forEach((value, key) => {
     console.log(`value: ${value} key: ${key}`);
   });
 }
 
 /* function getNearestNode () {
   nodeMap.forEach((value, key) => {
     
   });
 } */
 
 init(nums);
 getAllSiblingNodes(nums);
 getMinDistance(nodeMap.get(1));
 
 /* 
 
 function addNode(mapToSet, node) {
   mapToSet.set(node, []);
 }
 
 function addEdge(mapToSet, node, edge) {
   mapToSet.get(node).push(edge);
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
 
 console.log(result)*/