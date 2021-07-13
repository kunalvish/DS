function binarySearch(arr, x, y, a){

    if (y >= x) {

        let mid = x + parseInt((y - x) / 2);

        if (arr[mid] == a)
            return mid;
  
        if (arr[mid] > a)
            return binarySearch(arr, x, mid - 1, a);
  
        return binarySearch(arr, mid + 1, y, a);
    }

    return -1;
}
 

let arr = [2,4,1,7,4,2,5,7,9];

a = binarySearch(arr, 0, arr.length-1, 7);

if(a > 0)
    console.log("found at :"+(a+1))
else
    console.log("not found")