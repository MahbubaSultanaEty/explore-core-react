// export default function ToDo({task}) {
//     // props.task = 'Learn Js';
//     return (
        
//         <li>Task-1: { task}</li>
        
//     )
// }


/*🔹 export & import (JS/React)
 export → একটি module থেকে function, variable বা component বাইরে পাঠানোর জন্য।
 import → অন্য module থেকে export করা জিনিসটা আনার জন্য।
*/

// Conditionl Rendering in react
/*
export default function ToDo({task, isDone, time=0}) {
    if (isDone === true) {
        return <li>Done: {task} Duration: { time}</li>
    } else {
        return <li>Pending: {task}</li>
    }
}
 */


// Conditional rendering 2: Ternery opeartor
/* 
export default function ToDO({ task, isDone, time = 0 }) {
    return isDone ? <li>Done: {task}, Duration : {time} </li> : <li>Pending: { task}</li>
}
    */


// Conditional rendering 3: && operator [in react && operator cehcks if the condition is true]
/*
export default function ToDo({ task, isDone, time = 0 }) {
    return isDone && <li>isDone : {task}, Duration : { time}</li>
}
*/


// Conditional rendering 4: || operator [in react the || operator checks if the condition is false or you can say it works as else operator]
/*
export default function ToDo({ task, isDone, time = 0 }) {
    return isDone || <li>Pernding: { task}, </li>
}
*/


// Conditional rendering 5:
/*
export default function ToDo({ task, isDone, time = 0 }) {
    if (isDone === true) {
        return <li>Done: {task}, Duration : {time }</li>
    } else {
        return null; //if the condition enters else block it wont give any output
    }
}
*/


// Conditional rendering 6: [Using Varitables]
export default function ToDo({ task, isDone, time = 0 }) {
    let listItem;

    if (isDone) {
        listItem = <li>Done: {task}, Duration: { time}</li>
    } else {
        listItem = <li>Not Done: {task}, Duration { time}</li>
    }
    return listItem;
}
