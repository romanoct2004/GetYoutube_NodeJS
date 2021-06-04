# GetYoutube_NodeJS

Đây là source dùng để lấy link file của youtube. Có thể lấy file mp4 hoặc mp3.

1. Các thư viện sử dụng trong NodeJS: express ejs body-parser ytdl-core

2. Để lấy file mp4 hay mp3 bạn chỉ cần set hai thuộc tính trong ServerGetLink.js
     element.hasVideo == false && element.hasAudio == true    : lấy file mp3
     element.hasVideo == true && element.hasAudio == true     : lấy file mp4
