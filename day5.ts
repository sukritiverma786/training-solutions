export{}

for (let i = 5; i >= 1; i--) {
     let right ="";
   let j:number;
    for(let j=1;j<=i;j++){
        
        right = right+j;

    }
    console.log(right);
}


console.log("......................................");
console.log("......................................");



for (let i = 1; i <= 5; i++) {
    let right ="";
  let j:number;
   for(let j=1;j<=i;j++){
       
       right = right+j;

   }
   console.log(right);
}

console.log("......................................");
console.log("......................................");

// let arr = [1,2,3,6,3,6,1]
// console.log(arr[0],arr[2],arr[3]);
// console.log(arr [duplicates])


for (let i = 1; i <= 5; i++) {
    let right ="";
  let j:number;
   for(let j=1;j<=i;j++){
       if(i==1||i==5||j==1||j==i){
       right = right+j;
    }
    else{
        right=right+ " ";
    }
   }
   console.log(right);
}
