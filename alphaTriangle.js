// Enter no.of rows:5
//         A 
//       C B 
//     F E D 
//   J I H G 
// O N M L K 
let rows=+prompt("Enter no.of rows:");
// let rows=5;
let ascii=65;
for(i=1;i<=rows;i++){
    res="";
    
    for(j=1;j<=i;j++){
        res=String.fromCharCode(ascii)+" "+res;
        ascii++;
    }
    for(k=1;k<=rows-i;k++){
        res="  "+res;
    }
    console.log(res);
}