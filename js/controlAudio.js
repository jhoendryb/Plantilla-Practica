let listSong = [];
var audioPlayer = document.getElementById('p-audio');
let portada = document.getElementById('p-portada');
let artista = document.getElementById('p-artista');
let tema = document.getElementById('p-tema');
let dataIndex = document.getElementById('data-audio-index');
const pistas = async function (url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=mrsuicidesheep') {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': KEY_DEEZER,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    let pistas = await apiDeezer(url, options);
    console.log(pistas);
    listSong = pistas;
    cargarDataPista(0);
};

const cargarDataPista = (index) => {
    // p-portada
    // p-artista
    // p-tema
    // p-audio

    let pistaPreview = listSong.data[index];
    console.log(index);
    console.log(pistaPreview);
    portada.src = pistaPreview.album.cover;
    artista.textContent = pistaPreview.artist.name;
    tema.textContent = pistaPreview.title;
    audioPlayer.src = pistaPreview.preview;
    dataIndex.value = index;

    // audioPlayer.removeEventListener('ended', cargarDataPista);

    audioPlayer.addEventListener('ended', function () {
        audioPlayer.pause();
        let dataIndex = document.getElementById('data-audio-index');
        cargarDataPista(parseInt(dataIndex.value) + 1);
        audioPlayer.play();
    });
}

var anterior = document.getElementById('p-controls-anterior');
var comenzarPausar = document.getElementById('p-controls-play-pause');
var siguiente = document.getElementById('p-controls-siguiente');

anterior.addEventListener('click', function () {
    const dataIndex = document.getElementById('data-audio-index');
    if (dataIndex.value == 0) return false;
    audioPlayer.pause();
    cargarDataPista(parseInt(dataIndex.value) - 1);
    audioPlayer.play();
});

comenzarPausar.addEventListener('click', function () {
    if (!this) return false;

    if (this.classList.contains("comenzar")) {
        this.classList.remove("fa-play");
        this.classList.add("fa-pause");
        this.classList.remove("comenzar");
        this.classList.add("pausar");
        audioPlayer.play();
        return true
    }

    if (this.classList.contains("pausar")) {
        this.classList.remove("fa-pause");
        this.classList.add("fa-play");
        this.classList.remove("pausar");
        this.classList.add("comenzar");
        audioPlayer.pause();
        return true
    }
});

siguiente.addEventListener('click', function () {
    audioPlayer.pause();
    let dataIndex = document.getElementById('data-audio-index');

    if ((parseInt(dataIndex.value) + 1) > (listSong.data.length - 1) && listSong.next)
        pistas(listSong.next);

    if (!listSong.next && (parseInt(dataIndex.value) + 1) > (listSong.data.length - 1))
        dataIndex.value = 0;

    cargarDataPista(parseInt(dataIndex.value) + 1);
    audioPlayer.play();
});

window.addEventListener('load', function () {
    pistas();
})