const appDiv = document.getElementById('app');
console.log('appDiv: ', appDiv);

appDiv.innerHTML = `<h1>JS Starter</h1>`;

const video = document.createElement('video');
video.width = 640;
video.height = 640;
appDiv.appendChild(video);

navigator.getUserMedia({
    audio: false,
    video: {width: 640, height: 640}
}, (stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
},
(error) => console.warn(error))