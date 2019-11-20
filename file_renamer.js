var fs = require('fs');

var folder  = `D:\\XAMPPNEW\\htdocs\\JWSY5\\PRODUCTION\\TSG\\Gold\\Chapters\\engine\\pdf`

fs.readdir( folder, ( err, folderContent) => {
    folderContent.forEach( ( file ) => {

        console.log(file)
    })
})