var fs = require('fs');

var folder  = "E://JWSY9 10-9-19//JWSY9 10-9-19//Chapter14";

fs.readdir( folder, (err, folderContent) => {
    folderContent.forEach( ( file ) => {

        var withoutMp3 = file.slice(0, -4);
        var lastChar = withoutMp3.substr(withoutMp3.length -2);
        console.log(lastChar)

        fs.rename( folder + '//' + file, folder + '//' + 'p0'+ lastChar + '.mp3', function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
    })
})