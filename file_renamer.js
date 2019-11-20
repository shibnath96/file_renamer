var fs = require('fs');

var folder  = "E://JWSY9 10-9-19//JWSY9 10-9-19//Chapter14";

fs.readdir( folder, ( err, folderContent) => {
    folderContent.forEach( ( file ) => {

        console.log(file)
    })
})