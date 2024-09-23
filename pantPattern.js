// Enter NoOf rows:7
// ABCDEFGFEDCBA
// ABCDEF FEDCBA
// ABCDE   EDCBA
// ABCD     DCBA
// ABC       CBA
// AB         BA
// A           A
let rows=+prompt("Enter NoOf rows:");
// let rows=7;
let gap=1;
for(i=rows;i>=1;i--){
    res="";
    ascii=65;
    for(j=1;j<=i;j++){
        res=res+String.fromCharCode(ascii);
        ascii++;
    }
    if(i<rows){
        res=res+" ".repeat(gap);
        gap=gap+2;
    }
    if(i==rows){
        let temp=res;
        res=res.split("");
        res.pop();
        let nom=res;
        // console.log(nom);
        let rev=nom.reverse().join("");
        let concated=temp+rev;
        console.log(concated);
        
        
    }
    else{
    let rev=res.trim().split("").reverse().join("");
    res=res+rev;
    console.log(res);
    }
}

//some reduced lines of code
// let rows=+prompt("Enter NoOf rows:");
// let gap=1;
// for(i=rows;i>=1;i--){
//     res="";
//     ascii=65;
//     for(j=1;j<=i;j++){
//         res=res+String.fromCharCode(ascii);
//         ascii++;
//     }
//     if(i<rows){
//         res=res+" ".repeat(gap);
//         gap=gap+2;
//     }
//     if(i==rows){
//         let temp=res;
//         res=res.split("");
//         res.pop();
//         let rev=res.reverse().join("");
//         console.log(temp+rev);
        
        
//     }
//     else{
//     let rev=res.trim().split("").reverse().join("");
//     res=res+rev;
//     console.log(res);
//     }
// }