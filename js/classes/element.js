
	class Element {

		constructor(xcoord, ycoord, height, width, rotation) {
			var _self = this;
			this._xcoord   = xcoord || null;
			this._ycoord   = ycoord || null;
			this._height   = height || null;
			this._width    = width || null;
			this._rotation = rotation || null;
			this._name = "Test";
			this._workarea = document.getElementById("elements");

			this.applyDefaultsToMissingValues();
			
			this.buildHtmlElement();
			this.bindEventListeners();
			this._dragAndDrop = new DragAndDrop(this._container);
		}


		bindEventListeners() {
		 	var _self = this;
		 	
			this._container.addEventListener("mouseover", function(event) {
				_self.makeDraggable(event);
			});
		}

		makeDraggable(event) {
			var self = this;
		    var element = event.target;

	    	if(element.classList.contains("draggable")){
	    		self._dragAndDrop.dragElement(element);
		    }
		}

	}

	