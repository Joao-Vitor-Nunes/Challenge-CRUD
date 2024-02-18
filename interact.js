const btn = document.getElementById('btn')
const lista = document.getElementById('lista-pai')



btn.addEventListener('click', () => {
    let tarefa = document.getElementById('text')
    let msg = 
    `
    <div class= "flex flex-colunm pl-5 gap-3">
    <p class= "text-amber-500 pt-2 pl-3 text-xl font-semibold" >${tarefa.value}</p>
    </div>

    `
    lista.insertAdjacentHTML('beforebegin', msg)
    tarefa.value = ""

})