import datos from "../data/data.json" assert { type: "json" };
import {Gift} from './clases.js';

 const cuerpoTabla = document.querySelector("#cuerpo-tabla");

const cargarTabla = () => {
    cuerpoTabla.innerHTML = "";
    datos.map((item)=>{
        const fila = document.createElement("tr");

        const celdas= `
        <td>${item.gift}</td>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td>
            <div class="d-flex gap-2">
                <button class="btn btn-warning">Editar</button>
                <button class="btn btn-danger" onclick="borrarGift(${item.id})">Eliminar</button>

            </div>
        </td>`;
        fila.innerHTML = celdas
        cuerpoTabla.append(fila)
    });
};

const agregarGift=(event)=>{
event.preventDefault();
console.log("submit");

let id = datos.at(-1).id + 1
let gift = document.querySelector('#gift').value;
let tipo = document.querySelector('#tipo').value;
let precio = document.querySelector('#precio').value;
let tiempo = document.querySelector('#tiempo').value;

datos.push(new Gift(id, gift, tipo, precio, tiempo));
document.querySelector('#formGift').reset();
cargarTabla();      

};

window.borrarGift = (id) => {
    let index = datos.filter((item) => item.id !== id);
    let validar = confirm("Estas seguro de eliminar este gift?");
    if (validar){
        datos.splice(index, 1);
    }
    cargarTabla();
};

cargarTabla();

document.querySelector('#formGift').addEventListener('submit', agregarGift)