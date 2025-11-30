// 1. Linear search

function linearSearch(arr, elements){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === elements){
            return i;
        }
    }
    return -1;
}

let numbers = [10, 20, 30, 40, 50, 60];
let find = 40;

let search = linearSearch(numbers, find);
if(search !== -1){
    console.log(`${find} found at index ${search}`);
}else{
    console.log(`Element not found`);
}

// 2. Binary search

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return true; 
        } 
        else if (arr[mid] < target) {
            start = mid + 1; 
        } 
        else {
            end = mid - 1; 
        }
    }
    return false;
}

let nums = [10, 20, 30, 40, 50, 60];

console.log(binarySearch(nums, 30));   
console.log(binarySearch(nums, 99));   
