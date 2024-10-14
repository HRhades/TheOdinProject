// your JavaScript file
const container = document.querySelector('#container')

const btn = document.querySelector('#btn')

// method 2
// btn.onclick = () => alert('Hello World!')

// method 3
// btn.addEventListener('click', () => {
//     alert('Hello World!')
// })
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue'
})

// const content = document.createElement('div')
// content.classList.add('content')
// content.textContent = 'This is the glorious text-content!'

// container.appendChild(content)

// const p = document.createElement('p')
// p.textContent = "Hey, I'm red!"
// p.style.color = '#f5020b'
// container.appendChild(p)

// const h3 = document.createElement('h3')
// h3.textContent = "I'm a blue h3!"

// h3.style.color = '#1702f5'
// container.appendChild(h3)

// const div = document.createElement('div')
// div.style.border = 'thick solid #0000FF'

// const h1 = document.createElement('h1')
// h1.textContent = "I'm in a div"

// div.appendChild(h1)
// const p2 = document.createElement('p')
// p2.textContent = 'ME TOO!'
// p2.style.color = '#f5020b'
// div.appendChild(p2)

// container.appendChild(div)
