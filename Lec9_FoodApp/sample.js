
let map = new Map();
map.set(1, [{ y: 2 }, { y: 3 }, { y: 4 }]);
let x = map.get(1);
x.map((obj) => {
    obj.z = 2 * obj.y
    return obj;
})
console.log(map.get(1));
// [[{ y: 2 }, { y: 3 }, { y: 4 }]]



// let arr = arr1 = [1, 2, 3, 4, 5, 5, 6];

// arr.filter((v) => {
//     if (v === 5)
//         return false;
//     return true;
// });

// function test(x) {
//     x.filter((v) => {
//         if (v === 5)
//             return false;
//         return true;
//     });

//     return x;
// }

// console.log("arr = ", arr);
//[1,2,4,5,5,6]
// console.log("arr1 = ", test(arr1));
//[1,2,3,4,6]



// select * from 

// async function x(str) {
    //retrurns a promise   
// }
//.then(){
// link is url of that img
// }

//arr 100 length

//empty arr

//serially 
// let garr;
// let narr = [];
// for (let i = 0; i < 100; i++) {
//     let pp = await x(garr[i])
//     narr[i] = pp;
// }


//parallelly

// let narr=await Promises.all(arr);




// ab bcd ab
//ab bcd ab


//1,2,3,4,5,6,7,8
//11,10,5,6,7,8

//slow //fast


// slow,fast
// while(slow!=fast) slow=slow.next;fast=fast.next.next


// slo==fast

// slow=starting of any li
// while(slo!=fast) slow.nxt;fat=.next;




