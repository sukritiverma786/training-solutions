export{}

 for(let i=0;i<=3;i++){
    let printstar="";
    for(let j=0; j<=8; j++){
        printstar=printstar+"*"
    
    }
    console.log(printstar);
} 


for (let i = 0; i <= 4; i++) {
    let printStar=" ";

    for (let j = 0; j <= 4; j++) {
        if (i == j) {
            //print *
            printStar = printStar+"*";
        }
        else {
            // print " "
            printStar = printStar+"%";
        }
        
    }   
    console.log(printStar);
    
}





for(let i=0;i<=4;i++){
    let printstar=" ";
    for(let j=0; j<=4; j++){
        if(i==0 ||i==4 ||j==0|| j==4){
        printstar=printstar+"*";
        }
        else{
            printstar=printstar+" ";
        }
    }
    console.log(printstar);
} 

for (let i = 5; i >= 1; i--) {
    let right ="";
    for(let j=1;j<=i;j++){
        right = right+"*";
    }
    console.log(right);
}


