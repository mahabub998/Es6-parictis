// const parson = { name: 'jack', age: 17, job: 'facebook', gfName: 'adlora', addres: 'cochu khate', phone: 215456544, friends:['tom', 'tomato', 'tom hankd']}
// // const gfName = parson.gfName
// const {gfName,phone ,addres,salary}=parson;


// console.log(gfName ,phone,addres.salary)
// // console.log(gfName)
// // console.log(gfName)
// // console.log(gfName)


const friends=['arman khan','sakib khan','salman khan', 'amir khan','sharukh khan']
const [cotoFriends,nextFriends , ...restFriends]=friends;
console.log(...restFriends)

