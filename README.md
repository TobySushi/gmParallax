# gmParallax: Tiled Editor Parallax Support for Gamemaker
**gmParallax makes importing Tiled Editor parallax behavior seamless by offering an extended export option. Say goodbye to hardcoding parallax for all of your layers!**

![Gif showing many layers and parallax behavior in tiled editor.](/images/exampleA.gif)
*Work with layers in real time with Tiled*
![Gif showing the same behavior translated to gamemaker game](/images/exampleB.gif)
*And quickly export parallax behavior to your gamemaker room!*

## Usage
Import the included .yymps package into your Gamemaker Project.

This package includes cont_parallax, you can edit this object to change how the parallax works. The backgroundData array, and its struct children contain the data from Tiled layers.

Import gmParallax.js into your Tiled editors extension folder.
*You can learn where this folder is in the [Tiled documentation.](http://https://doc.mapeditor.org/en/stable/reference/scripting/ "Tiled documentation.")*

### Exporting through tiled
In Tiled, navigate to `'File > Export As"`
In the file explorer, navigate to your gamemaker projects rooms folder.

*I would reccomend first making an empty room to overwrite*

Navigate to the room you wish to overwrite, and open its folder. Overwrite the current .yy room file, and make sure "Save as type: Gamemaker Extended Export (*.yy)" is selected.

**You should now have an exported gamemaker room, and the creation code should create a parallax object with the correct values.**

**CAUTION!: ALWAYS BACK UP YOUR PROJECT BEFORE USING TILED SCRIPTS! This script will overwrite your current room and creation code!**

## Special considerations:
Thanks so much to eishia, who has helped so much with my tiled projects!
Tiled editor is a fantastic program, if you somehow dont know of it, please check it out here: https://www.mapeditor.org/