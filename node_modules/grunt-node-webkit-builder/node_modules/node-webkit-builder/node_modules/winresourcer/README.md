node-winresourcer
==============

Node module to edit windows executable resources (icons, ...)
This is a simple node wrapper of [Anolis Resourcer](http://www.anol.is/resourcer/)


### Requirements

##### Windows

- .NET framework 2.0


##### Linux & Mac OS X

- [wine](http://www.winehq.org/)
- Require .NET framework 2.0 (or equivalent)
- Require a X server (Gnome, KDE, ...). You can also use [Xvfb](http://en.wikipedia.org/wiki/Xvfb)


### Usage examples

##### Command line

```shell
npm install -g winresourcer
```

```shell
winresourcer --operation=Update --exeFile=path/to/your/file.exe --resourceType=Icongroup --resourceName:IDR_MAINFRAME --lang: 1033 --resourceFile:path/to/your/resource.ico
```

##### Node JS

```shell
npm install winresourcer
```

```javascript
require("winresourcer")({
			operation: "Update", // one of Add, Update, Extract or Delete
			exeFile: "path/to/your/file.exe",
			resourceType: "Icongroup",
			resourceName: "IDR_MAINFRAME",
			lang: 1033, // Required, except when updating or deleting 
			resourceFile: "path/to/your/resource.ico" // Required, except when deleting
		}, function(error) {
			// callback
		});
```

##### Grunt

```shell
npm install winresourcer --save-dev
```

```javascript
grunt.loadNpmTasks('winresourcer');
...
grunt.initConfig({
	...
	"winresourcer": {
		your_target: {
			operation: "Update", // one of Add, Update, Extract or Delete
			exeFile: "path/to/your/file.exe",
			resourceType: "Icongroup",
			resourceName: "IDR_MAINFRAME",
			lang: 1033, // Required, except when updating or deleting 
			resourceFile: "path/to/your/resource.ico" // Required, except when deleting
		}
	}
	...
});
```

### Options

##### operation (Required)

Value: `Add`, `Delete`, `Extract` or `Delete`

The operation to perform


##### exeFile (Required)

Value: `Path to a file`

The Win32 PE or RES file to modify or extract resources from.


##### resourceType (Required)

Value: `Resource type identifier`

Identifies the type of resource to work with. For string and integer identifiers just putting the value is sufficient. Note that some string values are synonymous with some integer values. Consult the table below.

| Type              | Integer  | Synonyms                              | Notes                                                                                                                                                                                   |
| ----------------- | -------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cursor Sub-Image  | 1        |                                       | Cursors rarely have more than 1 sub-image. Replace cursors by altering the directory, not the individual subimages.                                                                     |
| Bitmap Data       | 2        | "Bitmap", "BMP"                       | Only *.bmp files can be read into a bitmap resource, you must convert from JPEG, GIF, or PNG first.                                                                                     |
| Icon Sub-Image    | 3        |                                       | Icons contain many subimages. It is not advisable to replace them directly. If you are going to replace them, ensure you have the right DIB format (dimensions and pixelformat) first.  |
| Cursor Directory  | 12       | "Cursor", "Cursordir", "Cursorgroup"  |                                                                                                                                                                                         |
| Icon Directory    | 14       | "Icon", "Icondir", "Icongroup"        |                                                                                                                                                                                         |


##### resourceName (Required)

Value: `Resource name identifier`

Identifies the name of resource to work with. For string and integer identifiers just putting the value is sufficient. If a resource has a numeric string identifier then prefix the number with \" (backslash, followed by a double-quote) E.g.: -name:\"0. If a resource identifier starts with a double-quote symbol (unlikely) prefix it with \"\".


##### lang (Required, except when updating or deleting)

Value: `Unsigned 16-bit number`

This argument is required for adding and extracting, but optional for deleting and updating. If this argument is ommited then all matching resources will be deleted or replaced with the contents of the specified file.


##### resourceFile (Required, except when deleting)

Value: `Path to a file`

When adding or updating a resource the data is retrieved from this file. When extracting the resource is saved to this file. When deleting this argument is ignored.


### Contribute

Feel free to [report issues](https://github.com/felicienfrancois/node-winresourcer/issues)
[Pull requests](https://github.com/felicienfrancois/node-winresourcer/pulls) are welcome


### Licence

[GPLv2](https://github.com/felicienfrancois/node-winresourcer/blob/master/LICENSE)


### Credits

Thanks to [Anolis](http://www.anol.is) for their work on [Anolis Resourcer](http://www.anol.is/resourcer/)