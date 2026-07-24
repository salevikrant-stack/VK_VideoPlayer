const video = document.getElementById("video");

const openBtn = document.getElementById("openBtn");

openBtn.onclick = async () => {

    const file = await window.electron.openVideo();

    if(file){

        video.src=file;

        video.play();

    }

}
