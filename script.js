

function debounce(fn, delay) {
    let isPending = false; // Flag to track pending execution

    return function (...args) {
        return new Promise((resolve, reject) => {
            // console.log(`api call for ${args} query's  isPending value was ${isPending} gets evaluated to ${!isPending}`)
            if (!isPending) { // Only execute if not already pending
                isPending = true;  // Set pending flag

                setTimeout(() => {
                    fn(...args)
                        .then(result => {
                            isPending = false; // Clear pending flag on resolve
                            resolve(result);
                        })
                        .catch(error => {
                            isPending = false; // Clear pending flag on reject
                            reject(error);
                        });
                }, delay);
            } else {
                // Cancel previous execution (conceptually)
                // console.log(`api call for ${args} query got cancelled due to inconsistency`);
            }
        });
    };
}

function print(data) {
    
    return new Promise((resolve, reject) => {
        let actualDelay = Math.floor(Math.random() * 10);
        setTimeout(() => {
            console.log(data, ` { with delay of ${actualDelay}s  SUCCESS}`);
            resolve(data);
        }, actualDelay * 1000);
    });
}

let betterFn = debounce(print, 1000);

document.querySelector('.input-box').addEventListener('input', (e)=>betterFn(e.target.value))
// setTimeout(() => betterFn("ip"), 1000);
// setTimeout(() => betterFn("iphone"), 2000);
// setTimeout(() => betterFn("iphone 12 p"), 2500);
// setTimeout(() => betterFn("iphone 12 pro"), 3500);




// function debounce(fn, delay) {
//     let id;
//     let immediate = true
//     return function (...args) {
//         console.log(...args)
//         let context = this;
//         if (immediate) {
//             fn(...args)
//         } else {
//             clearTimeout(id)
//             id = setTimeout(() => {
//                 fn(...args)
//             }, delay)
//         }
//     }
// }


// function print(query){
//   console.log(query);
// }


// let betterFn = debounce(print, 1000);


// function debounce(fn , delay){
//     let isPending = false;

//     return function(...args){
//        if(!isPending){
//         isPending = true;
//         setTimeout(()=>{
//           fn(...args) 
//           isPending = false
//         },delay)
//        }else{
//         // console.log(`${args.flat()} query got blocked`)
//        }
//     }
// }



// function print(args){
//     let actualDelay = Math.floor(Math.random() * 10);
//     setTimeout(()=>{
//         console.log(`${args} query got 'SUCCESSED'`)
//     },actualDelay*1000)
// }


// let betterFn = debounce(print, 1000)

// document.querySelector('.input-box').addEventListener('input', (e)=>betterFn(e.target.value))
