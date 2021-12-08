//console.log('correcto');

document.querySelector('#boton-ajax').addEventListener('click', traerDatos);

function traerDatos() {

    // console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', './js/items.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);

            let resp = document.querySelector('#resp');
            resp.innerHTML = '';

            for (let item of datos) {
                //console.log(item.producto);
                resp.innerHTML += `
                <tr class="text-primary">
                <th scope="col">${item.producto}</th>
                <th scope="col">${item.precio}</th>
                </tr>
              `
            }
        }
    }

}