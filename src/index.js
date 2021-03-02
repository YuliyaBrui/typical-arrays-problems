
exports.min = function min (arr) {
 if((Array.isArray(arr)) && (arr.length>0))
 {arr.sort((a,b)=>a-b);
    return arr[0];
    }else{return 0}}

exports.max = function max (arr) { 
  if((Array.isArray(arr)) && (arr.length>0))
 { arr.sort((a,b)=> b-a);
  return arr[0];}else{return 0}}


exports.avg = function avg (arr) { let result=0;
  if((Array.isArray(arr)) && (arr.length>0)){
    for (let i = 0; i < arr.length; i++) {
     result += arr[i];}
   let x= result/arr.length;
  return(x);}else{return 0}}