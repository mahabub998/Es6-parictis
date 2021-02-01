// const age = [ 12, 13 ,41 ,45,25]
// const  age2 = [15 ,14 , 18]
// const age3 =[ 27,100,599]
// // const  ageFull=age.concat(age2).concat([7]).concat(age3)
// const allAge= [ ...age , ...age2 , ...age3]
// console.log(allAge);
 const business=450;
 const minister=491;
 const saj=500;
 const taka=[450,4160,500,600,800]
//  const maximum= Math.max(business,minister,saj)
const maximum=Math.max(...taka)
 console.log(maximum)