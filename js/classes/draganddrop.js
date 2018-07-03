
	class DragAndDrop {

		constructor(target) {
			this._target = target;
			this._pos1 = 0;
			this._pos2 = 0;
			this._pos3 = 0;
			this._pos4 = 0;
		}

		dragElement(){
			var _self = this;

			this._target.onmousedown = function(e){
				// get the mouse cursor position at startup:
				_self._pos3 = e.clientX;
				_self._pos4 = e.clientY;

				document.onmousemove = function(e){
					// calculate the new cursor position:
					_self._pos1 = _self._pos3 - e.clientX;
					_self._pos2 = _self._pos4 - e.clientY;
					_self._pos3 = e.clientX;
					_self._pos4 = e.clientY;

					// set the element's new position:
					if(_self._target.classList.contains("draggable")){
						_self._target.style.top = (_self._target.offsetTop - _self._pos2) + "px";
						_self._target.style.left = (_self._target.offsetLeft - _self._pos1) + "px";
					}
				}

				document.onmouseup = function(e){
					//stop moving when mouse button is released:
					document.onmouseup = null;
					document.onmousemove = null;
				}
			}
		}
	}