
	class Textbox extends Element {

		constructor(name) {
			super(name);
			this._type = 'textbox';	

			this.syncState();
		}

		buildHtml(){
			console.log("x: " + this._xcoord);
		}

		// Example
		changeClass(){
			this._container.setAttribute('class', "updated");
			console.log("The class is changed.");
		}

		// Example
		changeDivText(){
			this._content = document.createTextNode("This is my new content!");
			this._container.appendChild(this._content);
			console.log("The name is changed.");
		}

		buildHtmlElement(){
			this._container = document.createElement("div");
			this._container.setAttribute('class', "element textbox draggable");
			this._container.setAttribute('id', "qwe");
			this._content = document.createTextNode("Hi there and greetings!"); 
			this._container.appendChild(this._content);
			this._workarea.appendChild(this._container, this._workarea);
		}

		applyDefaultsToMissingValues(){
			this._xcoord   = this._xcoord || 100;
			this._ycoord   = this._ycoord || 100;
			this._height   = this._height || 100;
			this._width    = this._width || 100;
			this._rotation = this._rotation || 0;
		}

		syncState() {
			console.log("Set state");
			this._container.style.position = "absolute";
			this._container.style.display = "table";
			this._container.style.outline = "rgb(218, 218, 218) dotted 1px";
			this._container.style.height = this._height + "px";
			this._container.style.width = this._width + "px";
			this._container.style.left = this._xcoord + "px";
			this._container.style.top = this._ycoord + "px";
			this._container.style.transform = "rotate("+this._rotation+"deg)";
		}
		
	}