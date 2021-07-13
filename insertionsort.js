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

let arr = [2,4,1,7,4,2,5,7,9]

console.log(insertSort(arr))