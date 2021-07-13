const insertSort = (arr) => {

    for(let i =0; i<arr.length; i++){

        let temp = arr[i]; 

        j = i;

        while( j >0 && temp < arr[ j -1] ){

            arr[j] = arr[j-1]
            j--;
        }

        arr[j] = temp;
    }

    return arr;
}

const frequency = (arr, x) => {

    let count = 0;

    for(let i = 0; i<arr.length; i++){

        if(arr[i] > x){
            return count;
        }

        if(arr[i] == x)
            count++;
    }
}

let arr = [2,4,1,7,4,2,5, 4,7,9]

arr = insertSort(arr)

console.log(frequency(arr,4))

