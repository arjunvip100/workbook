function minNumber(array){
    let Currentmin=array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]<Currentmin){
            Currentmin = array[i]
        }
    }
    return Currentmin;
}
const result= minNumber([4,3,1,5]);
console.log(result);
