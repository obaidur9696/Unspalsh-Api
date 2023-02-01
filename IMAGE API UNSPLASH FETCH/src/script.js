
function fetchImage() {
    var value = $('#document').val()
    if (value == 'animal') {
        fetch('https://api.unsplash.com/photos/random?query=animals&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then((data) => {
                $('#image').attr('src', data.urls.regular)
            })
    }

    if (value == 'laptop') {
        fetch('https://api.unsplash.com/photos/random?query=laptop and macbook&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then(data => {
                $('#image').attr('src', data.urls.regular)
            })
    }

    if (value == 'car') {
        fetch('https://api.unsplash.com/photos/random?query=cars&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then(data => {
                $('#image').attr('src', data.urls.regular)
            })

    }
    if (value == 'sea') {
        fetch('https://api.unsplash.com/photos/random?query=sea and lake&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then(data => {
                $('#image').attr('src', data.urls.regular)
            })
    }
}

function fetchNext() {
    var value = $('#document').val();   
    if (value == 'animal') {
        fetch('https://api.unsplash.com/photos/random?query=animals&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then((data) => {
                $('#image').attr('src', data.urls.regular)
            })
    }

    if (value == 'laptop') {
        fetch('https://api.unsplash.com/photos/random?query=laptop and macbook&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then(data => {
                $('#image').attr('src', data.urls.regular)
            })
    }

    if (value == 'car') {
        fetch('https://api.unsplash.com/photos/random?query=cars&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then(data => {
                $('#image').attr('src', data.urls.regular)
            })

    }
    if (value == 'sea') {
        fetch('https://api.unsplash.com/photos/random?query=sea and lake&client_id=9AbBYvsbOoDFlw59h5uB_p7ao_zNvZRl_nd2g8puhRQ')
            .then(response => response.json())
            .then(data => {
                $('#image').attr('src', data.urls.regular)
            })
    }
}

$('#btn1').click(fetchImage)

$('#btn2').click(fetchNext)




