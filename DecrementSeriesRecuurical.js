// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
let rows=+prompt("Enter Rows:");
// let rows=4;
for(i=1;i<=rows;i++){
    let res="";
    let num=i;
    for(j=1;j<=i;j++){
        res=res+num+" ";
        num=num-1;
        
        
    }
    console.log(res);
}