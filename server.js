const ytdl = require('ytdl-core');

async function getInforVideo(){
    let info = await ytdl.getInfo("oQXgDshfQ0s");
    //let format = ytdl.chooseFormat(info.formats, { quality: '134' });
    console.log(info);
}

getInforVideo();