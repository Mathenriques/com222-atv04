arrayItens = []
showPrompt();

function showPrompt() {
    let res = prompt("O que deseja fazer?\n\nDigite 'novo' para adicionar um item\nDigite 'deletar' para remover um item\nDigite 'listar' para mostrar a lista\nDigite 'q' para sair")
    while (res != 'q') {
        switch (res) {
            case 'novo':
                console.log("Aloo");
                insertNewItem()
                break;
            case 'listar':
                listItens()
                break;
            case 'deletar':
                deleteItens()
                break;
            default:
                break;
        }  
        res = prompt("O que deseja fazer?\n\nDigite 'novo' para adicionar um item\nDigite 'deletar' para remover um item\nDigite 'listar' para mostrar a lista\nDigite 'q' para sair")

    }
}

function insertNewItem() {
    let item = prompt("Digite o item que deseja adicionar")
    arrayItens.push(item)
}

function listItens() {
    text = `---- Lista ----\n`
    if (arrayItens.length > 0) {
        for (let i = 0; i < arrayItens.length; i++) {
            text += `[${i}] - ${arrayItens[i]}\n`
        }
    } else {
        text += `Lista Vazia!\n`
    }
    text += `-----------------`
    alert(text)
}

function deleteItens() {
    if (arrayItens.length > 0) {
        text = `---- Lista ----\n`
        for (let i = 0; i < arrayItens.length; i++) {
            text += `[${i}] - ${arrayItens[i]}\n`        
        }
        text += `-----------------\n Digite o elemento que deseja excluir!`

        let index = prompt(text)
        arrayItens.splice(index, 1)
        alert("Item Deletado")

    } else {
        alert("Lista Vazia!")
    }
}