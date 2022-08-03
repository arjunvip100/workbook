function mergeNonSortedArrays(array1,array2){
    let d1=0;
    let d2=0
    let d3=0
    let Merged=[]
    while(d1<array1.length && d2<array2.length)
    if(array1[d1]<array2[d2]){
        Merged[d3]=array1[d1];
        d3++;
        d1++;
        
    }else{
        Merged[d3]=array2[d2];
        d3++;
        d2++;
        
    }
    while(d1<array1.length){
        Merged[d3]=array1[d1];
        d3++;
        d1++;
    }

    console.log(Merged)
}
const result= mergeNonSortedArrays([3,7,12,34,56,90],[4,9,25,45]);
