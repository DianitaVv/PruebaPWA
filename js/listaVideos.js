var videos=[
    {titulo: 'Video 1',descripcion: 'Descripción video 1', url: 'https://www.youtube.com/embed/GVZqDCG2VrA'},
    {titulo: 'Video 2',descripcion: 'Descripción video 2', url: 'https://www.youtube.com/embed/o7fgFaXKVa0'},
    {titulo: 'Video 3',descripcion: 'Descripción video 3', url: 'https://www.youtube.com/embed/nyuo9-OjNNg?list=RDEMThYJ2VcXXNp3GM7AwT24UQ'},
    {titulo: 'Video 4',descripcion: 'Descripción video 4', url: 'https://www.youtube.com/embed/qU9mHegkTc4'}
    ];
    
    var listaVideos= document.getElementById('listaVideosArreglo');

    mostrarListavideos(videos);

    function mostrarListavideos(videosBuscados) {
        listaVideos.innerHTML = '';
        videosBuscados.forEach(indiceVideo => {
            var fila = document.createElement('div');
            var col1UrlVideo = document.createElement('div');
            var iframeVideo = document.createElement('iframe');
            fila.setAttribute('class','row');
            col1UrlVideo.setAttribute('class','col');
            iframeVideo.setAttribute('src',indiceVideo.url);
            iframeVideo.setAttribute('width','400px');
            iframeVideo.setAttribute('height','400px');
            iframeVideo.setAttribute('frameborder','0');
            col1UrlVideo.appendChild(iframeVideo);
            fila.appendChild(col1UrlVideo);

            //crear div para el titulo

            var col2TituloVideo= document.createElement('div');
            var h4Titulo = document.createElement('h4');
            var h6DescripcionVideo = document.createElement('h6');

            col2TituloVideo.setAttribute('class', 'col');
            h4Titulo.textContent=indiceVideo.titulo;
            h6DescripcionVideo.textContent=indiceVideo.descripcion;

            col2TituloVideo.appendChild(h4Titulo);
            col2TituloVideo.appendChild(h6DescripcionVideo);
            fila.appendChild(col2TituloVideo);

            //crear el div para el boton (columna 3)
            var col3BotonVideo = document.createElement('div');
            var botonVideo = document.createElement('button');
            botonVideo.innerHTML='';

            col3BotonVideo.setAttribute('class','col');
            botonVideo.setAttribute('class','btn btn-outline-primary');
            botonVideo.innerHTML='@';

            col3BotonVideo.appendChild(botonVideo);
            fila.appendChild(col3BotonVideo);





            listaVideos.appendChild(fila);

        });
    }
    
    
    function buscarVideos() {
        var textoVideo = document.getElementById('txtBuscar').value;
        var videosBuscados = videos.filter(
        indiceVideo => {
            return indiceVideo.titulo.includes(textoVideo);
        });
        
        mostrarListavideos(videosBuscados);
    }