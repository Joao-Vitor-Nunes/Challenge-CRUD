const btn = document.getElementById('btn')
const lista = document.getElementById('lista-pai')



btn.addEventListener('click', () => {
    let tarefa = document.getElementById('text')
    let msg = 
    `
    <div class= "flex flex-row mx-auto pl-5 pt-3 gap-3 h-1/4 w-6/12 py-3 bg-stone-800 hover:bg-stone-700 rounded-md gap-2">
            <p class= "flex-1 text-amber-500 pl-3 text-xl font-semibold" >${tarefa.value}</p>
            <button type="button" class= "done my-auto w-7 h-6 px-2 rounded bg-amber-600 hover:bg-amber-700 transition delay-150 font-semibold">✓</button>
            <button type="button" class= "remove my-auto w-7 h-6 px-2 rounded bg-amber-600 hover:bg-amber-700 transition delay-150 font-semibold">X</button>
            <button type="button" class= "my-auto w-7 h-6 px-2 mr-2 rounded bg-amber-600 hover:bg-amber-700 transition delay-150 font-semibold">E</button>
    </div>

    `
    lista.insertAdjacentHTML('beforebegin', msg)
    tarefa.value = ""

    /*botao de remover*/
    const remove_btns = document.querySelectorAll('.remove'); /*peguei todos elementos do botão de remover*/
    remove_btns.forEach(remove_btn => { /*foreach = passa por todos os elementos da classe node remove, serve para percorrer e aplicar a funcao em todas as classes*/
        remove_btn.addEventListener('click', () => { /*ao apertar o botão... */
            remove_btn.parentNode.remove(); /*acessando a div pai que contém o botão clicado*/
        });
    })

    /*botao de "done"*/
    const done_btns = document.querySelectorAll('.done')
    done_btns.forEach(done_btns => {
        done_btns.addEventListener('click', () => {
            const div_pai = done_btns.parentNode

            if (!div_pai.classList.contains('done_task'))
                div_pai.querySelector('p').classList.add('done_task')
                div_pai.querySelector('p').classList.add('text-stone-500')
        
            alert(`Bom trabalho!. A tarefa "${div_pai.querySelector('p').textContent}" foi concluída!`)

        })
    })
})