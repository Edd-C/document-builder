
	class Editor {

		constructor() {
			this._elementsContainer = document.getElementById("elements");
			this.bindEventLsiteners();

			// A design flaw. Should re-work design to not require this. 
			// Caused by either A) setting the "left/top" style attribute, or B) having fixed container divs to the left and right.
			this._xOffsetDiv = 200;
			this._yOffsetDiv = 49;
		}

		bindEventLsiteners(){
			var _self = this;
			this._elementsContainer.addEventListener("click", function(e) {
				var activeTab = _self.getActiveToolbarTab();

				if(activeTab == 1){
					var x = (e.clientX - _self._elementsContainer.offsetLeft) - _self._xOffsetDiv;
					var y = (e.clientY - _self._elementsContainer.offsetTop) - _self._yOffsetDiv;

					app.elements.textboxes.push(new Textbox(x, y, 100, 100, 0)); // Should bind these literals to default constants or something.
					_self.resetToolbarTab();
				}
			});
		}

		resetToolbarTab(){
			$('[href="#tab_select"]').tab('show');
		}

		getActiveToolbarTab(){
			var pills = document.getElementsByClassName("toolbar_pill");

			for(var i=0; i<pills.length; i++) {
				if(pills[i].classList.contains("active")) {
					return i;	
				}
			}
		}

	}