const bubbleSort = (arr) => {

    let temp = 0;

    for(let i = 0; i <arr.length; i++){

        for(let j = 0; j < arr.length -1; j++){

            if(arr[i] < arr[j]){

                temp = arr[i];
                
                arr[i] = arr[j];

                arr[j] = temp;
            }
        }
    }

    return arr;
}

let arr = [2,4,1,7,4,2,5,7,9]

console.log(bubbleSort(arr))