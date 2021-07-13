const linearsearch = (arr, x) => {

    for(let i = 0; i<arr.length; i++){

        if(arr[i] == x)
            return i+1;
    }

    return -1;
}

let arr = [2,4,1,7,4,2,5,7,9];

a = linearsearch(arr, 4);

if(a > 0)
    console.log("found at :"+a)
else
    console.log("not found")