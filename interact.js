const btn = document.getElementById('btn')
const lista = document.getElementById('lista-pai')



btn.addEventListener('click', () => {
    let tarefa = document.getElementById('text')
    let msg = 
    `
    <div class= "flex mx-auto pl-5 gap-3 w-6/12 py-3 bg-stone-700 hover:bg-stone-600 rounded-md gap-2">
            <p class= "flex-1 text-amber-500 pl-3 text-xl font-semibold" >${tarefa.value}</p>
            <button type="button" class= "my-auto w-7 h-6 px-2 rounded bg-amber-600 hover:bg-amber-700 transition delay-150 font-semibold">✓</button>
            <button type="button" class= "my-auto w-7 h-6 px-2 rounded bg-amber-600 hover:bg-amber-700 transition delay-150 font-semibold">X</button>
            <button type="button" class= "my-auto w-7 h-6 px-2 rounded bg-amber-600 hover:bg-amber-700 transition delay-150 font-semibold">E</button>
    </div>

    `
    lista.insertAdjacentHTML('beforebegin', msg)
    tarefa.value = ""

})