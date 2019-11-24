
window.onload  = function() {
    let videoFile = document.querySelector('#videoFile');
    let video = document.querySelector('#my_video')
    videoFile.addEventListener('change', extractionFileUploaded, false);
    function extractionFileUploaded() {
        if (this.files.length != 1) {
        return;
        }
        var url = URL.createObjectURL(this.files[0]);
        console.log(url);
        video.src = url;
    }


}