const quickSort = (arr, x, y) => {

    if(x < y){

        let pivot = arr[y];

        let i = x -1;

        for(let j = x; j <= y; j++){

            if(arr[j] < pivot){

                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        let temp = arr[i+1];
        arr[i+1] = arr[y];
        arr[y] = temp;

        let p = i+1;
        
        arr = quickSort(arr, x, p - 1);
        arr= quickSort(arr, p + 1, y);
    }

    return arr;
}

let arr = [2,4,1,7,4,2,5,7,9]

console.log(quickSort(arr,0,arr.length-1))

