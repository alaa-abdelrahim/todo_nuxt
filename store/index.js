export const state = () => ({
    data: JSON.parse(localStorage.getItem('todoapp-data')) || [
        {
            projectId: 1,
            projectName: 'Vuetify',
            desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            tasks: [
                {
                    projectId: 1,
                    id: 1,
                    title: 'Learn Grid',
                    completed: false,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                },
                {
                    projectId: 1,
                    id: 2,
                    title: 'Learn Spaces',
                    completed: true,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                },
                {
                    projectId: 1,
                    id: 3,
                    title: 'Learn components',
                    completed: false,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
                }
            ]
        },
        {
            projectId: 2,
            projectName: 'Vue',
            desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            tasks: [
                {
                    projectId: 2,
                    id: 1,
                    title: 'Learn Vuex',
                    completed: false,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                },
                {
                    projectId: 2,
                    id: 2,
                    title: 'Learn Composition API',
                    completed: true,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                },
                {
                    projectId: 2,
                    id: 3,
                    title: 'Learn CSS framework',
                    completed: false,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                }
            ]
        },
        {
            projectId: 3,
            projectName: 'Nuxt',
            desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            tasks: [
                {
                    projectId: 3,
                    id: 1,
                    title: 'Learn SSR',
                    completed: false,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                },
                {
                    projectId: 1,
                    id: 2,
                    title: 'Learn Routes',
                    completed: true,
                    desc: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
                }
            ]
        }
    ]
})

export const mutations = {
    addProject(state, project) {
        state.data.push({
            projectId: state.data[state.data.length - 1].projectId + 1,
            projectName: project.projectName,
            desc: project.desc,
            tasks: []
        })
        localStorage.setItem('todoapp-data', JSON.stringify(state.data))
    },
    edit(state) {
        localStorage.setItem('todoapp-data', JSON.stringify(state.data))
    },
    deleteProject(state, id) {
        state.data = state.data.filter(project => project.projectId !== id)
        localStorage.setItem('todoapp-data', JSON.stringify(state.data))
    },
    addTask(state, task) {
        const dataProject = state.data.filter(filteredProject => task.projectId === filteredProject.projectId)[0];
        dataProject.tasks.push({
            projectId: task.projectId,
            id: dataProject.tasks.length + 1,
            title: task.title,
            completed: false,
            desc: task.desc
        })
        localStorage.setItem('todoapp-data', JSON.stringify(state.data))
    },
    changeStatus(state, specificTask) {
        const project = state.data.filter(project => project.projectId === specificTask.projectId)[0];
        const task = project.tasks.filter(projectTask => projectTask.id === specificTask.id)[0];
        task.completed = !specificTask.completed;
        localStorage.setItem('todoapp-data', JSON.stringify(state.data))
    },
    deleteTask(state, task) {
        const project = state.data.filter(filteredProject => filteredProject.projectId === task.projectId)[0]
        project.tasks = project.tasks.filter(theTask => theTask.id !== task.id)
        localStorage.setItem('todoapp-data', JSON.stringify(state.data))
    }
}