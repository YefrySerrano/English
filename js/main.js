window.addEventListener("load", () => {
    const currentDate = new Date();
    currentYear.innerText = currentDate.getFullYear();
});


// const contenedor = document.getElementById('abecedario');
// const abecedarioJSON = {
//             "A": {
//                 "avion": "vuela",
//                 "alas": "también",
//                 "alicate": "herramienta"
//             },
//             "B": {
//                 "burro": "animal",
//                 "barco": "transporte",
//                 "ballena": "otro animal"
//             },
//     // Añade más letras y descripciones según sea necesario
// };
// letrasAbecedario();
// function letrasAbecedario(){
//         // Crear un ciclo para las letras de la A a la Z
//         for (let i = 65; i <= 90; i++) {
//             // Convertir el código ASCII a una letra
//             const letra = String.fromCharCode(i);
//             let temp = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
//                     <div class="card shadow">
//                         <div class="card-body">
//                             <h5 class="card-title abc">${letra}</h5>
//                             <button class="btn btn-info btn-swal">Click open</button>
//                         </div>
//                     </div>
//                 </div>`;
//             // Añadir el botón al contenedor
//             contenedor.innerHTML+=temp;

//             const boton = document.querySelectorAll('.btn-swal');

//             boton.addEventListener('click', function() {
//                 // Verificar si hay descripciones para la letra seleccionada
//                 if (abecedarioJSON[letra]) {
//                     // Construir una cadena de texto formateada con las descripciones
//                     let descripcionesConcatenadas = "";
//                     for (const [clave, valor] of Object.entries(abecedarioJSON[letra])) {
//                         descripcionesConcatenadas += `- ${clave}: ${valor}\n`;
//                     }

//                     // Mostrar las descripciones en un swal
//                     Swal.fire({
//                         title: `Descripciones para ${letra}`,
//                         text: descripcionesConcatenadas.trim(),
//                         icon: 'info',
//                         confirmButtonText: 'Aceptar'
//                     });
//                 } else {
//                     Swal.fire({
//                         title: `Sin descripciones`,
//                         text: `No hay descripciones disponibles para la letra ${letra}`,
//                         icon: 'info',
//                         confirmButtonText: 'Aceptar'
//                     });
//                 }
//             });

//         }

// }
const contenedor = document.getElementById('abecedario');
const abecedarioJSON = {
    "A": {
        
        "Abstraction":" The process of hiding the complex reality while exposing only the necessary parts",
        "Actor":" In the Actor model, an object that encapsulates state and behavior and interacts via asynchronous message passing",      "Actor Model":" A conceptual model that treats 'actors' as the universal primitives of concurrent computation",
        "Adapter":" A design pattern that allows incompatible interfaces to work together",
        "Agile":" A set of principles for software development under which requirements and solutions evolve through the collaborative effort of cross-functional teams",
        "Algorithm":" A step-by-step procedure for solving a problem or performing a task",
        "API (Application Programming Interface)":" A set of functions and protocols for building and integrating application software",
        "Architecture":" The conceptual structure and logical organization of a computer or computer-based system",
        "Array":" A collection of elements, each identified by an array index",
        "Asynchronous":" Operations that occur without waiting for previous operations to complete",
        "Aspect":" A module that encapsulates a concern that cuts across multiple classes or methods",
        "Attribute":" A specification that defines a property of an object, element, or file",
    },
    "B": {
        "burro": "animal",
        "barco": "transporte",
        "ballena": "otro animal"
    },
    // Añade más letras y descripciones según sea necesario
};

letrasAbecedario();

function letrasAbecedario() {
    // Crear un ciclo para las letras de la A a la Z
    for (let i = 65; i <= 90; i++) {
        // Convertir el código ASCII a una letra
        const letra = String.fromCharCode(i);
        let temp = `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title abc">${letra}</h5>
                                <button class="btn btn-info btn-swal" data-letra="${letra}">Click open</button>
                            </div>
                        </div>
                    </div>`;
        // Añadir el botón al contenedor
        contenedor.innerHTML += temp;
    }

    // Añadir el evento a todos los botones después de que se hayan agregado al DOM
    document.querySelectorAll('.btn-swal').forEach(button => {
        button.addEventListener('click', function () {
            const letra = this.getAttribute('data-letra');
            // Verificar si hay descripciones para la letra seleccionada
            if (abecedarioJSON[letra]) {
                // Construir una cadena de texto formateada con las descripciones


                let descripcionesConcatenadas = `<strong>Letter ${letra}</strong><br><ul style="text-align: center; font-size: 1rem;">`;
                for (const [clave, valor] of Object.entries(abecedarioJSON[letra])) {
                    descripcionesConcatenadas += `<li><strong>${clave}</strong>: ${valor}</li>`;
                }
                descripcionesConcatenadas += `</ul>`;

                const imgUrl = `img/letra${letra}.png`;

                // Mostrar las descripciones en un swal
                Swal.fire({
                    html: descripcionesConcatenadas,
                    imageUrl: imgUrl,
                    confirmButtonText: 'Aceptar'
                });
            } else {
                Swal.fire({
                    title: `Sin descripciones`,
                    text: `No hay descripciones disponibles para la letra ${letra}`,
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    });
}


