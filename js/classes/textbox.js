
	class Textbox extends Element {

		constructor(xcoord, ycoord, height, width, rotation) {
			super(xcoord, ycoord, height, width, rotation);
			this._type = 'textbox';	
			this._froalaContainer = null;
			this.$froalaContainer = null;
			this._froalaToolbarContainer = document.getElementById('froala_toolbar_container');

			this.addTextEditor();
			this.makeFroalaNotEditable();
			this.syncState();
		}

		addTextEditor(){
			this._froalaContainer = document.createElement("div");
			this._container.appendChild(this._froalaContainer, this._container);

			this.$froalaContainer = $(this._froalaContainer);

			this.$froalaContainer.froalaEditor({
				toolbarContainer: '#froala_toolbar',
				toolbarButtons: ['|', 'fontSize', '|', 'color', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'lineHeight', 'outdent', 'insertLink', 'indent', 'clearFormatting'],
				charCounterCount: false ,
				initOnClick: true,
				theme: "custom",
				key: 'iD2C1I2C2zA3B2D2A2F4E1D1A10C1A6mvG-10wwcB-21tC-13F-11iG3xzF-7cmcqog1H4dgd==',
				pluginsEnabled: ["align", "charCounter", "codeBeautifier", "codeView", "colors", "draggable", "embedly", "emoticons", "entities", "file", "fontFamily", "fontSize", "fullscreen", "image", "imageManager", "inlineStyle", "lineBreaker", "link", "lists", "paragraphFormat", "paragraphStyle", "quote", "save", "table", "url", "wordPaste"]
			});
		}

		makeFroalaNotEditable(){
			var container = this.$froalaContainer.find(".fr-view");
			container[0].setAttribute("contenteditable","false");
		}

		buildHtmlElement(){
			this._container = document.createElement("div");
			this._container.setAttribute('class', "element textbox draggable");
			this._workarea.appendChild(this._container, this._workarea);
			this.$container = $(this._container);
		}

		applyDefaultsToMissingValues(){
			this._xcoord   = this._xcoord || 100;
			this._ycoord   = this._ycoord || 10;
			this._height   = this._height || 100;
			this._width    = this._width || 100;
			this._rotation = this._rotation || 0;
		}

		syncState() {
			this._container.style.position = "absolute";
			this._container.style.display = "table";
			this._container.style.height = this._height + "px";
			this._container.style.width = this._width + "px";
			this._container.style.left = this._xcoord + "px";
			this._container.style.top = this._ycoord + "px";
			this._container.style.transform = "rotate("+this._rotation+"deg)";
		}
		
	}