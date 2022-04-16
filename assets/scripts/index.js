//seleciona o elemento input
const newItemInput = document.getElementById('new-item')

//seleciona o elemento botao de add item
const newItemBtn = document.getElementById('btn-add-item')

function addNewItem() {
 
    if (!newItemInput.value) {
        alert('Opa, nao tem valor!')
        return
    }

    if (newItemInput.value){
    //crie uma nova li
    const li = document.createElement('li')

    //adiciona classes a li que foi criada
    li.setAttribute('class', 'list-group-item d-flex justify-content-between')

    //crio um conteudo para li
    const liContent = `
    ${newItemInput.value} <button class="btn btn btn-remove btn-danger">-</button>
    `
    //adiciono o conteudo a li
    li.innerHTML = liContent

    //seleciono a ul - pai da li
    const ul = document.querySelector('ul')

    //insere a li no fim da ul
    ul.appendChild(li)

    //removendo o valor da input
    newItemInput.value = ''

    const button = li.querySelector('button')
    button.addEventListener('click', removeItem)
 }
}

function removeItem(event){
    const button = event.currentTarget
    const li = button.parentNode
    const ul = button.parentNode.parentNode
    ul.removeChild(li)
}

window.addEventListener('load', () => {
    const btn = document.getElementById('btn-add-item')
    btn.addEventListener('click', addNewItem)

    const btnsRemove = document.getElementsByClassName('btn-remove')
    for (let btnRemove of btnsRemove) {
        btnRemove.addEventListener('click', removeItem)
    }
})

