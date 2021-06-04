# GetYoutube_NodeJS

Đây là source dùng để lấy link file của youtube. Có thể lấy file mp4 hoặc mp3.

1. Cai cac goi: express ejs body-parser ytdl-core

2. Để lấy file mp4 hay mp3 bạn chỉ cần set hai thuộc tính trong 
     element.hasVideo == false && element.hasAudio == true    : lấy file mp3
     element.hasVideo == true && element.hasAudio == true     : lấy file mp4
