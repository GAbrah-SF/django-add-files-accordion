$(document).ready(function () {
    $(".buttonFileInput").on('click', function () {
        $('#fileInput').click()
    })

    $('#fileInput').on('change', function () {
        const imageDisplay = $('.imageDisplay')

        const files = this.files
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if (file.type.startsWith('image/')) {
                const reader = new FileReader()
                reader.onload = function (event) {
                    const imgWrapper = $('<div class="m-2 img-wrapper d-flex justify-content-center align-items-center">') // Div contenedor
                    const imgElement = $(`<img class="img-thumbnail" alt="" src="${event.target.result}">`)
                    const fileInfo = $('<div class="file-info">'); // Div para el nombre del archivo
                    const fileName = $(`<p class="file-name">${file.name}</p>`) // Párrafo para mostrar el nombre del archivo

                    // Botón para eliminar la imagen
                    const deleteButton = $('<button type="button" class="btn_close btn btn-danger bg-danger"><i class="bi bi-x-lg"></i></button>')
                    deleteButton.on('click', function () {
                        imgWrapper.remove()
                    })

                    fileInfo.append(fileName) // Agregar nombre del archivo al div de información
                    imgWrapper.append(deleteButton) // Agregar botón de eliminar al contenedor
                    imgWrapper.append(imgElement) // Agregar imagen al contenedor
                    imgWrapper.append(fileInfo) // Agregar div de información al contenedor
                    imageDisplay.append(imgWrapper) // Agregar contenedor al display
                }
                reader.readAsDataURL(file)
            }
        }
        $("#show_images").click()
    })
})
