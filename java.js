let inputContainer = document.getElementById('taskInput');
let button = document.getElementById('addTaskBtn');
let list = document.getElementById('taskList');
button.addEventListener('click',()=>{
    let tasktext = inputContainer.value.trim();
    if(tasktext === ''){
        alert('you must write something');
        return;
    }
    let item = document.createElement('li');
    item.textContent = tasktext;
    list.appendChild(item);
    inputContainer.value = '';

    let heart = document.createElement('span');
    heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
    heart.classList.add('heart-icon'); // Add a class for styling
    item.appendChild(heart);

    

    heart.addEventListener('click', ()=> { heart.classList.toggle('active'); });

    item.addEventListener('click', ()=> { item.classList.toggle('done'); });

    heart.addEventListener('click', (event) => {
        setTimeout(()=>{
        
        item.remove();  // Poora task delete ho jayega
        }, 1000);
    
    });
})