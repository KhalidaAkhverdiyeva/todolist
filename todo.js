const addTaskButton = document.querySelector('#addTaskButton')
const taskInput = document.querySelector('#taskInput')
const ulList  = document.querySelector('#ulList')
const errorMessage = document.querySelector('#errorMessage')


addTaskButton.addEventListener('click', addTask)


function addTask() {

    let inputText = taskInput.value
    if(inputText === ''){
        errorMessage.style.display = 'block';
        let errorText = document.createElement('span')
        // errorText.innerHTML= '<span>You need to add some stuff!</span>';
        errorMessage.appendChild(errorText)

        setTimeout(() => {
            errorMessage.style.display = 'none';
            errorMessage.removeChild(errorText)
            
        }, 3000);


    } else {
        
        let listItem = document.createElement('li');
        listItem.innerHTML = `<span>${inputText}</span> <i class="fa-solid fa-pen"></i>  <i class="fa-solid fa-trash"></i>`;
        ulList.appendChild(listItem);
        taskInput.value = '';

        let trashIcon = listItem.querySelector('.fa-trash');
        trashIcon.addEventListener('click', () => {
            listItem.remove()
        })

        let editIcon = listItem.querySelector('.fa-pen');
        editIcon.addEventListener ('click', () => {
            event.stopPropagation();
            let newText = prompt('Enter new task.')
            if(newText !== null & newText !== ''){
                listItem.querySelector('span').textContent = newText
            }
        })


        listItem.addEventListener('click',() => {
            listItem.classList.toggle('checked');

        })
    }
    


    
}


taskInput.addEventListener('keypress',(e) => {
    if(e.key === 'Enter')
        addTask();
})


