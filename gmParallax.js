// useful functions, thanks eishiya!
let imageLayers = [];

function getImageLayers(currentLayer) {
    if(currentLayer.isImageLayer) {
        imageLayers.push(currentLayer);
    } else if(currentLayer.isGroupLayer || currentLayer.isTileMap) {
        var layers = currentLayer.layerCount;
        for(var layerID = 0; layerID < layers; layerID++) {
            getImageLayers(currentLayer.layerAt(layerID));
        }
    }
}

// this export generates a room creation code file for gamemaker with the relevant parallax stuff
tiled.registerMapFormat("gmExtended", {
    name: "Gamemaker Extended Export",
    extension: "yy",

    write: (map, filename) => {

        // create .gml file
        var filePath = FileInfo.path(filename) + '/';
        var file = new TextFile(filePath + "RoomCreationCode.gml", TextFile.WriteOnly);
        
        // erase file content- this avoids unwanted code being leftover
        file.truncate();

        // All we need to do is make the room create a parallax object with the correct values
        // begin instance creation code
        file.writeLine("// THIS IS AUTO GENERATED CODE FOR TILED PARALLAX //////////////");
        file.writeLine("instance_create_depth(0, 0, 0, cont_parallax, {");
        file.writeLine("    backgroundData: [");  

        // write structs for each background
        getImageLayers(map);
        for(var i = 0; i < imageLayers.length; i++) {

            var thisLayer = imageLayers[i];

            // write to file
            file.writeLine('        { title: "' + thisLayer.name + '", xFactor: ' + thisLayer.parallaxFactor.x + ', yFactor: ' + thisLayer.parallaxFactor.y + ' },');

        }

        imageLayers = [];

        // write end of instance creation code
        file.writeLine("    ]");  
        file.writeLine("});");  
        file.writeLine("////////////////////////////////////////////////////"); 

        file.commit();

        // write the actual gamemaker room
        let format = tiled.mapFormat("yy");
        format.write(map,filename);
    
    }

});