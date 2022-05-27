

function  sumaDeCañoGastado (ancho,largo,altura) {
    let resultado;
    
largo >200 ? resultado= (largo*2.5)+(altura*4)+(ancho*4) : resultado=parseInt (ancho*4)+ parseInt (largo*2)+ parseInt (altura*4)

   
    return resultado
}


function mostrarMesasConPrecio(){
            let alto=document.getElementById("alto").value;
            let largo=document.getElementById("ancho").value;
            let ancho=document.getElementById("largo").value;

            

        const precios = [5.33,4.33,4.21,3.28]
        precios.push (3.141592)
        precios.unshift (2.14)


        precios.splice (1,3)

        let resultado =precios[1]*sumaDeCañoGastado(alto,ancho,largo);
        console.log ("El gasto es:",resultado)
        console.log (resultado)

        console.dir (document)





        const productos = [ 


            {id: 1, name: "Patas en X", price:resultado*[1]+9000, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hYoTrtGjZAiBMmdVTaRejE_2hnd9CszA4Om0wBsbIEy1f66heOgW0R5U9P8bf4qyt-I&usqp=CAU'},
            {id: 2, name: "Patas cuadradas", price:resultado*1.4+7000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59JOSroAmkrykysFy4npqVni0aFQhKp5Kow&usqp=CAU'},
            {id: 3, name: "Patas normales", price:resultado*1.6+7000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jVYHTC10oQipm2WKdvtlRRte_WmqY3c68A&usqp=CAU'}
            

        ]
        const cart= []

        let htmlCatalog=''
        productos.forEach(producto=>{
            htmlCatalog +=`
        
            <div id='p-${producto.id}' class='col-sm'>
            <h3>${producto.name}</h3>
            <p>$ ${producto.price}</p>
            <img src='${producto.img}'height='100px'/>

            <button class='add'> agregar</button>
            <button class='delete'> eliminar</button>
            <br>
            <div class='btn-succes btnAddCart' id='producto-${producto.id}'Add to cart</div>`
        })

        



        document.getElementById('catalog').innerHTML =htmlCatalog
        const btnAdds = document.getElementsByClassName('add')
        const btnRemove = document.getElementsByClassName('remove')
      
        
        
        for (let i = 0; i> btnAdds.length; i++) {
            btnAdds[i].onclick= e=> {
                const id= e.target.parentElement.id
                const product= product.find(p => p.id==id)
                console.log (id)
            }
        }
    }
    
    
    
    
    function mostrar (resultado) {
        console.log ("caño gastado    "+resultado +"   centímetros")
    }
    
    
    
    localStorage.setItem('email','email:marcosfeijoo97@gmail.com')
    
    let mensaje=localStorage.getItem('email')
    console.log (mensaje)
    
    
    
    
    
const TapasDeMesas = ['pino alistonado',',paraíso','vidrio','marmol']
const [a,b]= TapasDeMesas
console.log (a,b)


const usuario = {
    nombre:"Marcos",
    edad:10

}
const mayordeedad = usuario.edad>=8 && new Date ()
console.log (mayordeedad)//false)
Toastify({
    text: "Inserte las medidas del producto",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();

 




//formulario

const formulario = document.querySelector ('#formulario');
const inputBusqueda=document.querySelector('.termino')
const divResultado =document.querySelector('#resultado')

formulario.addEventListener ('submit',(e)=>{
    e.preventDefault();
    validarformulario();})

    function validarformulario(){
        const terminoBusqueda= inputBusqueda.value;
        if (terminoBusqueda===""){
            alert ("debes insertar el nombre de la imagen que quieres buscar");
        }
buscarImagenes (terminoBusqueda);
    }

        function buscarImagenes (termino){
            const URL_BASE = "https://pixabay.com/api/";
            const API_KEY="27368492-bc5bfd20aa9034f79db6dd69e";``
            const URL = `${URL_BASE}?key=${API_KEY}&q=${termino}&image_type=photo&pretty=true`;
           fetch(URL)
           .then (respuesta =>respuesta.json())
           .then (data=> {mostrarResultados (data.hits)}
               )
    
}

function mostrarResultados(imagenes =[]){
    imagenes.forEach(imagen=> {
        const divImagen=document.createElement ('div') ;
        divImagen.classList.add('card');
        const img =document.createElement('img');
        img.src=imagen.previewURL;

        const link=document.createElement ('a');
        link.href = imagen.largeImageURL;

        divImagen.appendChild (img)
        divResultado.appendChild(divImagen);

        console.log(img)
    })
}
