$(document).ready(function () {
    $(".send_data").on("click", function () {

        for (let i = 1; i <= cantidad; i++) {
            let data = {
                "first_name": $(`#nombre${i}`).val(),
                "last_name": $(`#apellidos${i}`).val(),
                "email": $(`#email${i}`).val(),
                "rfc": $(`#rfc${i}`).val(),
            }

            console.log(data)

            axios.post($(".url_guardar").val(), data, { // Enviar la solicitud Axios
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': this.csrfToken
                }
            }).then(response => { // Manejar la respuesta exitosa
                let success = response.data
                swal.fire({
                    position: 'center',
                    icon: success.icon,
                    background: "#000",
                    title: success.message,
                    showConfirmButton: false,
                    // timer: 2500
                }).then(function () {
                    // setTimeout('document.location.reload()', 1000) // Recargar la página
                })
            }).catch(error => { // Manejar errores
                swal.fire({
                    position: 'center',
                    icon: error.response.data.icon,
                    background: "#000",
                    title: error.response.data.message,
                    showConfirmButton: false,
                    // timer: 2500
                })
            })
        }
    })
})
