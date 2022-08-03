//Anagram

function isAnagram(string1, string2){
    if(string1.length!==string2.length){
        return false;
    }
    let counter={}
    for(let words of string1){
         counter[words]=(counter[words] || 0)+1;
    }
    for(let items of string2){
        if(!counter[items]){
        return false;
    }
    counter[items]-=1
    return true;

}
}
let result= isAnagram('hello','lllheo');
console.log(result)
