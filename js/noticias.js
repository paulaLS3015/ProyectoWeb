function obtenerDatos() {
    var num = Math.floor(Math.random() * 33) + 1;

    fetch(`https://catfact.ninja/facts?page=${num}`)
        .then(response => response.json())
        .then(response => {
            const titulo = document.querySelector('#tituloNoticia')
            titulo.innerHTML = "Datos curiosos sobre Gatos, p.  " + response.current_page;

            const descripcion1 = document.querySelector('#descripcion1');
            const descripcion2 = document.querySelector('#descripcion2');
            const descripcion3 = document.querySelector('#descripcion3');

            var translate = `https://api.mymemory.translated.net/get?q=${response.data[1].fact}&langpair=en-GB|es-ES`;
            fetch(translate)
                .then(res => res.json())
                .then(data => {
                    descripcion1.innerHTML = data.responseData.translatedText;
                })
                .catch(err => console.log("Error al traducir: "+err));

            var translate = `https://api.mymemory.translated.net/get?q=${response.data[2].fact}&langpair=en-GB|es-ES`;
            fetch(translate)
                .then(res => res.json())
                .then(data => {
                    descripcion2.innerHTML = data.responseData.translatedText;
                })
                .catch(err => console.log("Error al traducir: "+err));    

            var translate = `https://api.mymemory.translated.net/get?q=${response.data[3].fact}&langpair=en-GB|es-ES`;
            fetch(translate)
                .then(res => res.json())
                .then(data => {
                    descripcion3.innerHTML = data.responseData.translatedText;
                })
                .catch(err => console.log("Error al traducir: "+err));      

        })
        .catch(err => console.error(err));
};


/*
API DE GATOS EXTRAIDA DE 
https://catfact.ninja/facts
*/