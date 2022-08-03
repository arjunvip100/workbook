function arraySorting(array){
    
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){

            if(array[j]>array[j+1]){
                let temp= array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    
    }
    
console.log(array)
}                       

let result=arraySorting([16,2,4,32,25,49,80,44,111,109]);
//with the help of pointer