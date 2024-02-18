const btn = document.getElementById('btn')
const tarefa = document.getElementById('text')
const lista = document.getElementById('lista-pai')

btn.addEventListener('click', addmsg)

        function addmsg() {
            const newtask = document.createElement('p')
            newtask.textContent = tarefa.value
            lista.appendChild(newtask)
            tarefa.value = ''
            
        }
