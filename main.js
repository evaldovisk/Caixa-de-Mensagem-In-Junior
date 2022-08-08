const sendMessage = document.querySelector("#btn-enviar");
const textArea = document.querySelector('#area-text')

sendMessage.addEventListener('click', function() {

    if (sendMessage.value != null) {

        const locationNewMessage = document.querySelector('.posts')

        const divPost = document.createElement('div')
        divPost.classList.add('post')
        locationNewMessage.appendChild(divPost)

        var pMessage = document.createElement('p')
        pMessage.classList.add('message')
        pMessage.innerText = textArea.value
        divPost.appendChild(pMessage)

        var divBtns = document.createElement('div')
        divBtns.classList.add('btns')
        divPost.appendChild(divBtns)

        var btnEditar = document.createElement('button')
        btnEditar.classList.add('btn-editar')
        btnEditar.value = 'Editar'
        btnEditar.innerText = 'Editar'
        divBtns.appendChild(btnEditar)

        var btnExcluir = document.createElement('button')
        btnExcluir.classList.add('btn-excluir')
        btnExcluir.innerText =  'Excluir'
        divBtns.appendChild(btnExcluir)
        
        textArea.value = null

        btnEditar.addEventListener('click', function() {
            if (pMessage.contentEditable == 'false') {

                pMessage.contentEditable = 'true'
                btnEditar.value = 'OK'
                btnEditar.innerText = 'OK'
                pMessage.value = pMessage.value
        

                btnEditar.style.color = '#245C6D'
                btnEditar.style.backgroundColor = '#FFFFFF'
            } else {

                pMessage.contentEditable = 'false'
                btnEditar.value = 'Editar'
                btnEditar.innerText = 'Editar'
                btnEditar.style.color = '#FFFFFF'
                btnEditar.style.backgroundColor = '#245C6D'
            }
        })


        btnExcluir.addEventListener('click', function () {
            divPost.remove()})
    }   

})

