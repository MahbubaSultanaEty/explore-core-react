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
export default function ToDo({task, isDone, time=0}) {
    if (isDone === true) {
        return <li>Done: {task} Duration: { time}</li>
    } else {
        return <li>Pending: {task}</li>
    }
}