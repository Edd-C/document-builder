
Array.prototype.contains = function(obj) {
	var i = this.length;
	while (i--) {
	    if (this[i] == obj) {
	        return true;
	    }
	}
	return false;
}

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
