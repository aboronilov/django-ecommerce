'use strict'
const updateBtns = document.getElementsByClassName('update-cart')

for (let i=0; i<updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function(){
        let productId = this.dataset.product
        let action = this.dataset.action
        console.log('productId: ', productId, 'action: ', action)

        console.log('USER: ', user)

        if (user==='AnonymousUser'){
            console.log('User is not authenticated')
        } else {
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log('User is authenticated. Sending data...')

    const url = '/update_item/'
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
    }
    const body = JSON.stringify({
        'productId': productId,
        'action': action,
    })

    fetch (url, {
        method: 'POST',
        headers: headers,
        body: body
    })

    .then((response) => {
        return response.json()
    })

    .then ((data) => {
        console.log('Data: ', data)
    })
}