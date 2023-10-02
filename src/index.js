import './styles/styles.css'

// Handles and Global Variables
const addProjectForm = document.querySelector('#add-project')
const addTaskForm = document.querySelector('#add-task')
let projectListSelector = document.querySelector('#project-list')
let taskListSelector = document.querySelector('#todo-list')
let projectListArray = []

function defaultTodo() {
    const newProject0 = new Project('Studying')
    const newProject1 = new Project('Grocery')
    const newProject2 = new Project('Work')

    projectListArray.push(newProject0)
    projectListArray.push(newProject1)
    projectListArray.push(newProject2)

    const project = projectListArray[0]
    project.showProjectTodo()
}

// Add project and display it to the page
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = addProjectForm.querySelector('#new-project-input').value
    const newProject = new Project(title)
    newProject.display(projectListSelector)
    projectListArray.push(newProject)
    addProjectForm.reset()
})

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = addTaskForm.querySelector('#new-task-input').value
    const newTask = new Task(title)
    newTask.display(taskListSelector)
    addTaskForm.reset()

    const project = selectProjectClass(document.querySelector('#todo-title').textContent)
    project.addTodo(newTask)
})

// Show project todo
projectListSelector.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Remove all active class in projectList
        removeActiveFromList(projectListSelector)
        // console.log(e.target.firstChild.data)
        const project = selectProjectClass(e.target.firstChild.data)
        addActiveClass(e.target)
        project.showProjectTodo()
    }
})

function removeActiveFromList(projectList) {
    let listItems = projectList.querySelectorAll('li')
    listItems.forEach(item => {
        item.classList.remove('active-project')
    })
}

function selectProjectClass(element) {
    return projectListArray.find(e => {
        return e.title == element
    })
}

function addActiveClass(element) {
    element.classList.add('active-project')
}

defaultTodo()
