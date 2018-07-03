
	class Element {

		constructor(xcoord, ycoord, height, width, rotation) {
			var _self = this;
			this._xcoord   = xcoord || null;
			this._ycoord   = ycoord || null;
			this._height   = height || null;
			this._width    = width || null;
			this._rotation = rotation || null;
			this._workarea = document.getElementById("elements");

			this.applyDefaultsToMissingValues();
			this.buildHtmlElement();
			this.bindEventListeners();

			// Init draganddrop. Dragging does not yet sync state.
			this._dragAndDrop = new DragAndDrop(this._container);
		}

		loadValuesIntoTextProperties() {
			var width_input    = document.getElementById('tp_width');
			var height_input   = document.getElementById('tp_height');
			var rotation_input = document.getElementById('tp_rotation');

			width_input.value    = this._width;
			height_input.value   = this._height;
			rotation_input.value = this._rotation;
		}

		bindEventListeners() {
		 	var _self = this;
		 	
		 	// Make element draggable
			this._container.addEventListener("mouseover", makeDraggable);
			function makeDraggable() {
				if(_self._container.classList.contains("draggable")){
					_self._dragAndDrop.dragElement();
				}
			}
			
			this._container.addEventListener("click", function(event) {

				// Get the mouse down and up X/Y. Used to check if dragging or clicking.
				_self._container.addEventListener("mouseup", function(event) { 
					this._mouseUpX = event.clientX; 
					this._mouseUpY = event.clientY; 
				});
				_self._container.addEventListener("mousedown", function(event) { 
					this._mouseDownX = event.clientX;
					this._mouseDownY = event.clientY; 
				});
				// If textbox is already selected and the user clicks without dragging...
				if ( _self._container.classList.contains("selected") && 
					this._mouseDownX == this._mouseUpX && 
					this._mouseDownY == this._mouseUpY )
				{
					// Enter editing mode
					_self._container.classList.remove("draggable");
					_self._container.classList.add("editing");
					_self._froalaToolbarContainer.style.display = "block";
				}


				// The froala container won't always be as large as the textbox container. This transfer the click focus to the froala container to start editing, even if the user clicks on a part of the textbox without the froala container. 
				if(_self._container.classList.contains("selected") && _self._container.classList.contains("editing")){
					var container = _self.$froalaContainer.find(".fr-view");
					container[0].setAttribute("contenteditable","true");
					_self.$froalaContainer.froalaEditor('events.focus');
				}


				// If the element is not selected, select it.
				if(!_self._container.classList.contains("selected")){
					// Anything that fires BEFORE this statement will be after the element is clicked, but before the "selected" class is assigned.

					_self.loadValuesIntoTextProperties();
					_self._container.classList.add("selected");

					// Add new listener to wait for deselect. Removes itself once complete
					document.addEventListener("mousedown", waitForDeselect);
				}


				// Show tab pane for textbox/ text propertes. Note does not move the toolbar icon and so a new textbox will not be generated on click.
				if(_self._container.classList.contains("selected")){
					//**NOTE** this should be handled cleaner
					document.getElementById("tab_select").classList.remove("active");
					document.getElementById("tab_c").classList.remove("active");
					document.getElementById("tab_d").classList.remove("active");
					document.getElementById("tab_text").classList.add("active");
					document.getElementById("tp_edit_properties").style.display = "block";
				}
			});
 
 			// Removes selected class from element.
			function waitForDeselect(event) {
				var isDesc = isDescendant(_self._container, event.target);

				var rightContainer = document.getElementById('right_container');
				var isrightContainerDesc = isDescendant(rightContainer, event.target);

				if(event.target != _self._container && !isDesc && event.target != rightContainer && !isrightContainerDesc){
					_self._container.classList.remove("selected");
					_self._container.classList.remove("editing");
					_self._froalaToolbarContainer.style.display = "none";
					var container = _self.$froalaContainer.find(".fr-view");
					container[0].setAttribute("contenteditable","false");
					_self._container.classList.add("draggable");

					// Switch the tab pane back to select
					document.getElementById("tab_c").classList.remove("active");
					document.getElementById("tab_d").classList.remove("active");
					document.getElementById("tab_text").classList.remove("active");
					document.getElementById("tab_select").classList.add("active");

					// Hide edit text properties section of text pane/tab.
					document.getElementById("tp_edit_properties").style.display = "none";

					document.removeEventListener("mousedown", waitForDeselect);
				} 
			}

			// On width change
			$("#tp_width").on( "spinstop", function( event, ui ) {
				if(_self._container.classList.contains("selected")){
					_self._width = $(this).spinner("value"); 
					_self.syncState();
				}
			});

			// On height change
			$("#tp_height").on( "spinstop", function( event, ui ) {
				if(_self._container.classList.contains("selected")){
					_self._height = $(this).spinner("value");
					_self.syncState();
				}
			});

			// On rotation change
			$("#tp_rotation").on( "spinstop", function( event, ui ) {
				if(_self._container.classList.contains("selected")){
					_self._rotation = $(this).spinner("value"); // Get ending val
					_self.syncState();
				}
			});
			

		}

	}