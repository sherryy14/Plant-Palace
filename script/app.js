console.log('object');

let tabledata = '';
let subtotal ;
//inner html table header
  


console.log(tabledata)

    let cartitem = JSON.parse(localStorage.getItem('prdincart'))
   cartitem.forEach((item,i)=>{

       //inner html table objects

       tabledata +=
       `
       <tr>
           <td>${i+1}</td>
           <td id="name">${item.name}</td>
           <td><img width="50px" style="border:1px solid black;" src="${item.image}"></td>
           <td>${item.price}</td>
           <td ><input type="number" min="1" value="${item.quantity}" class="form-control mx-auto w-50" id=""></td>
           <td><i class="fa-solid fa-trash text-danger" id="removeitem"></i></td>
       </tr>
   `
   
   
   });
   document.getElementById('sub').textContent = subtotal
   document.getElementById('table-d').innerHTML = tabledata



   // //function for total price

function cartprice(){
   let subtotal = 0
    let cartitem = JSON.parse(localStorage.getItem('prdincart'))
    cartitem.forEach(item =>{
        // subtotal = parseInt(item.totalprice)
        console.log(subtotal)
        subtotal = item.totalprice
    })
    console.log(subtotal)
    document.querySelector('#sub').textContent = subtotal
}

cartprice()


//    functin for remove item

// const removeitem = document.getElementById('removeitem')

//     removeitem.addEventListener('click' , () =>{
        
//         let cartitem = JSON.parse(localStorage.getItem('prdincart'))
        
//          cartitem.forEach(item => {
//             if(item.name != document.getElementById('name').textContent
//                 ){
//                     products.pop(item)
//                 }
            
//          });
//          localStorage.setItem('prdincart' , JSON.stringify(products))
//          window.location.reload()
//     })


   




