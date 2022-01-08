// JavaScript


var video = document.getElementById('bg-video');
var source = document.createElement('source');

source.setAttribute('src', 'img/beone-video.mp4');
source.setAttribute('type', 'video/mp4');

video.appendChild(source);
video.play();

setTimeout(function() {
    video.pause();

    source.setAttribute('src', 'img/vtv3 Beone.mp4');
    source.setAttribute('type', 'video/mp4');

    video.load();
    video.play();

}, 70000);

btn.onclick = e => vid.play();
btn_btn.onclick = e => vid.pause();
btn_1.onclick = e => vid_1.play();
btn_btn_1.onclick = e => vid_1.pause();