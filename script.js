fetch('https://whatyearisit-backend-pi-six.vercel.app/year')
.then(Response => Response.json())
.then(data=>{
    const divText = document.querySelector('#year').textContent = `Year: ${data.year}`;
})
.catch(error => console.error('erreur lors de la recuperation', error));