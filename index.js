function submitData(name, email){
    fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(resp => resp.json())
    .then(user => {
        document.body.innerHTML = user.id

    })
    .catch( function (error){
        console.log('ERROR',typeof error.message)
        document.body.innerHTML = error.message
    })
}

