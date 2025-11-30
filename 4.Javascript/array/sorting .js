
// 1. Bubble sort

function bubbleSort(fruits) {
    let n = fruits.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (fruits[j] > fruits[j + 1]) {
                
                let temp = fruits[j];
                fruits[j] = fruits[j + 1];
                fruits[j + 1] = temp;
            }
        }
    }

    return fruits;
}


let fruits = ["Mango", "Apple", "Papaya", "Banana"];
console.log(bubbleSort(fruits));


// Selection Sort

function selectionSort(arr) {
    let steps = 0;   

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            steps++   
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
       
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
        steps++  
    }

    console.log("Total steps taken: ", steps)
    return arr
}

let numbers = [1, 5, 2, 3, 4]

console.log("Selection sort array : ", selectionSort(numbers))






function selectionSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            comparisons++;   
            if (arr[j] > arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            swaps++;  
        }
    }

    console.log("Total comparisons:", comparisons);
    console.log("Total swaps:", swaps);
    return arr;
}

let numbers1 = [1, 5, 2, 3, 4];
console.log("Selection sort array:", selectionSort(numbers1));
