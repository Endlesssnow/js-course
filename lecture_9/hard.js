import Filter from './filter.js';

const filter = new Filter();

const appDiv = document.getElementById('app');

const sepiaBtn = document.createElement('button');
sepiaBtn.type = 'button';
sepiaBtn.innerText = 'Sepia';
sepiaBtn.addEventListener('click', () => {
    filter.apply(canvas, filter.sepia);
})
appDiv.appendChild(sepiaBtn);

const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 380;
canvas.style.display = 'none';
appDiv.appendChild(canvas);
canvas.addEventListener('click', onCanvasClick);

const video = document.createElement('video');
video.width = 640;
video.height = 380;
appDiv.appendChild(video);
video.addEventListener('click', snap);

navigator.getUserMedia({
    audio: false,
    video: {width: 640, height: 380}
}, (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
},
(error) => console.warn(error))

function snap() {
    video.style.display = 'none';
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    console.log(canvas.toDataURL())
}

function onCanvasClick() {
    video.style.display = 'block';
    canvas.style.display = 'none';
}