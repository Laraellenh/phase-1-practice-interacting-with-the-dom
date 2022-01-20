// counter increases  by 1 for every second - function for id "counter" once grabbed
// increment function click event for plus 
// decrement button for minus button after click event
// click event to add a like for every click of heart
// create p to append to comments for the alerts
// alert for each funtion "_ # of likes, etc"
// submit event that takes the input as target and adds the textContent to the p tag in the comments wiht div id "list"


const counter = document.getElementById("counter")
// increment seconds by 1
seconds = 0
function incrementSeconds() {
    seconds += 1;
    counter.innerText = "You have been here for " + seconds + " seconds."
}
// 1000 miliseconds = 1 second is the interval
const counting = setInterval(incrementSeconds, 1000);
// invoke that bad boy
incrementSeconds()


// // click event for minus that subtracts one seconds
minusBtn = document.getElementById("minus")
minusBtn.addEventListener('click', (e) => {
    const newTime = seconds - 1;
    counter.innerText = "You have been here for " + newTime + " seconds."

})
plusBtn = document.getElementById("plus")
plusBtn.addEventListener('click', (e) => {
    const newTime = seconds + 1;
    counter.innerText = "You have been here for " + newTime + " seconds."

})
// 1 has been liked 1 time `${seconds} has been likes ${number} times.`

// // like button that displays a liek equal to counter.innerText
const like = document.getElementById('heart')
like.addEventListener('click', (e) => {
    const p = document.createElement('p')
    const comments = document.getElementById('list')
    comments.append(p)
    p.innerText = `${seconds} has been likes ${number} times.`
})

const commentInput = document.getElementById('comment-input')
const submitBTn = document.getElementById('submit')
submitBTn.addEventListener('submit', (e) => {
    e.preventDefault()
    const p = document.createElement('p')
    const comments = document.getElementById('list')
    console.log(e.target.commentinput.value)
    comments.append(p)
    const newCommen = e.tartget.commentInput.value
    submitBtn.reset()

})


const pause = document.getElementById('pause')
pause.addEventListener('click', () => {
    if (pause.innerText === pause) {
        const IDinterval = setTimeout(incrementSeconds, 1000);
        // return value of setTimeout = to variable
        pause.innerText = "resume"
    } else {
        (pause.innerText === "resume")
        clearTimeout(counting,)
    }
})

