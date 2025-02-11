// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
    
function agregarAmigo () 
    {
    let nombre = document.getElementById("amigo").value;
        if(nombre.trim() == '')
            alert("Ingresa un Nombre válido");
        else
            {
                nombres.push(nombre);
                document.getElementById("amigo").value = '';
                mostrarListaAmigos();
            }
        
    } 

function mostrarListaAmigos ()
    {
     let listaAmigos = document.querySelector("#listaAmigos");
     listaAmigos.innerHTML = '';
     for(let index = 0; index < nombres.length; index++)
        {
            let element = nombres[index];
            let listaHTML = document.createElement("li");
            listaHTML.textContent = element; 
            listaAmigos.appendChild(listaHTML);
        }
    } 

function sortearAmigo ()
    {
        if(nombres.length > 0) {
            let indiceAmigo = Math.floor(Math.random() * nombres.length);
            let resultadoHTML = document.querySelector("#resultado");
            resultadoHTML.innerHTML = "El nombre de tu amigo secreto es: " + nombres[indiceAmigo];
        }
        else 
            alert("Ingresa un nombre")
    }
