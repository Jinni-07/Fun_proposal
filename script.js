let input = prompt("Enter Your Name")
console.log(input)
let yes = document.querySelector('.btn1')
yes.addEventListener('click',()=>{
    let gif = document.querySelector("#image")
    gif.src = "mochi3.gif"
    let t = document.querySelector(".container").getElementsByTagName("h1")[0]
    if(input===null){
        t.innerHTML = `Mochi Also loves you`
    }
    else{
        t.innerHTML = `Mochi Also loves you ${input}`
    }
})
    
function moveElementRandomly() {
    const no = document.querySelector('.btn2');
    const bodyWidth = document.body.clientWidth;
    // console.log(document.body.clientWidth)
    const bodyHeight = document.body.clientHeight;
    // console.log(document.body.clientHeight)
    // Generate random x and y positions, ensuring the element stays within the viewport
    const randomX = Math.random() * (bodyWidth - no.offsetWidth);
    // console.log( no.offsetWidth)
    const randomY = Math.random() * (bodyHeight - no.offsetHeight);
    // console.log(no.offsetHeight)
    
    // Apply the new random position to the element
    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
  }
let no = document.querySelector('.btn2')
no.addEventListener('mouseover',()=>{
    no.style.position = 'absolute'
    moveElementRandomly()

})