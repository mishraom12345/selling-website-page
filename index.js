var farm = document.getElementById('form')
farm.addEventListener('submit',getitem)

function getitem(e){
    let selling = e.target.selltype.value
    let product = e.target.producttype.value
    let select = e.target.select.value

    let obj = {
        selling ,product,select
    }
    axios.post("https://crudcrud.com/api/205b2c2bc1394bf19307d60f4ecee9a4/sellingdata",obj)
        .then((res)=>{
            console.log(res)

        })
        .catch(err=>console.log(err))
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/205b2c2bc1394bf19307d60f4ecee9a4/sellingdata")
            .then((response)=>{
                
                console.log(response)

                for (let i = 0; i < response.data.length; i++) {
                    displayonsreen(response.data[i])
                    
                }

            }).catch((err)=>{
                document.body.innerHTML = document.body.innerHTML + "<h3> something went wrong </h3>"
                console.log(err)
            })
    
})

function displayonsreen(obj) {
    var li = `<li id ="${obj._id}"> ${obj.selling} ${obj.product} ${obj.select} <button onclick = "deleting('${obj._id}')">delete</button></li>
    `
    var ul = document.getElementById('ul')
    ul.innerHTML = ul.innerHTML+li
}

function deleting(objId){
    axios.delete(`https://crudcrud.com/api/205b2c2bc1394bf19307d60f4ecee9a4/sellingdata/${objId}`)
        .then((res)=>{
            deletefromscreen(objId)
        })
        .catch((err)=>{
            console.log(err)
        })
}

function deletefromscreen(objId){
    var parent = document.getElementById('ul')
    var child = document.getElementById('objId')
    parent.removeChild(child)
}