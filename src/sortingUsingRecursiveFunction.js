//Sorting using Rescursive function
//Array=[2,3,1,4]
//
let Myarray=[2,3,1,4];
let myNewList=[];
let i=0;
let j=1;

function isSorted(array){
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            return false;
        }
    }
   return true
}

function checkSorting(array){
    if(isSorted(array)){
        myNewList= array;
        return;
    }
    
    else if(array[i]<array[j]){
        i++;
        j++;
        checkSorting(array)
    }else{
        [array[i],array[j]]=[array[j],array[i]]
        i=0;
        j=1;
        checkSorting(array)
    }
}
checkSorting(Myarray);
console.log(myNewList);

