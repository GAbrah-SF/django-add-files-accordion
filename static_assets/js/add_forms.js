let cantidad = 1 // Valor por defecto de la cantidad de formulario

$(document).ready(function () {
    let value_form = $("[name='formulario']")
    let div_form = $(".mostrar_formulario")
    let formulariosArray = [] // Array para almacenar los formularios

    function cleanFields() {
        for (let i = cantidad + 1; i <= formulariosArray.length; i++) {
            $(`.form-input-${i}`).val('')
        }
    }

    function addForm(valor) { // Función para agregar Formulario
        if (valor < cantidad) {
            cleanFields()
            formulariosArray = formulariosArray.slice(0, valor)
        } else {
            for (let i = formulariosArray.length + 1; i <= valor; i++) {
                let formulario = $(`<form id="form${i}" class="mt-4 bg-white p-4" style="border-radius: 15px;">
                                        <h4 class=''>Formulario ${i}</h4>
                                        <div class="row mt-3">
                                            <div class="mb-3 col-md-6">
                                                <label for="nombre${i}" class="form-label">Nombre:</label>
                                                <input type="text" class="form-control form-input-${i}" id="nombre${i}">
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="apellidos${i}" class="form-label">Apellidos:</label>
                                                <input type="text" class="form-control form-input-${i}" id="apellidos${i}">
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="email${i}" class="form-label">E-mail:</label>
                                                <input type="email" class="form-control form-input-${i}" id="email${i}" aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="rfc${i}" class="form-label">RFC:</label>
                                                <input type="text" class="form-control form-input-${i} text-uppercase" id="rfc${i}" minlength="12" maxlength="13">
                                            </div>
                                        </div>
                                    </form>`)
                formulariosArray.push(formulario) // Agregar nuevo formulario al array
            }
        }

        div_form.empty() // Vacía el contenido antes de agregar nuevos elementos
        div_form.append(formulariosArray) // Agrega todos los formularios
        cantidad = valor // Actualiza la cantidad
    }

    addForm(cantidad) // Agregar formulario inicial

    value_form.on("change", function () {
        let nuevoValor = parseInt(this.value)

        if (nuevoValor >= 1 && nuevoValor <= 6) {
            addForm(nuevoValor)
        }

        for (let i = 1; i <= nuevoValor; i++) {
            $(`#nombre${i}`).on('input', function () {
                if ($(this).val().length <= 2) {
                    $(this).addClass('error_input').removeClass('success_input')
                } else {
                    $(this).addClass('success_input').removeClass('error_input')
                }

            })
        }
    })
    
})
