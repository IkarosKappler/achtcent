/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

//import s00_ACHTCENT;

//GUI.Label (Rect (10, 50, 500, 200), System.DateTime.UtcNow.ToString("HH:mm dd MMMM, yyyy")); 

//this.enabled = false;
//enabled = false;

// Constructor
IKRSACHTCENT.ACHTCENT.Object = function( id ) { 

    this.id = id;

};

//function Start() {
	// Define prototype
	IKRSACHTCENT.ACHTCENT.Object.prototype = new IKRSACHTCENT.ACHTCENT.Object();
	//IKRSACHTCENT.ACHTCENT.Object.prototype.constructor = ACHTCENT.Object;
	
	// This function sets the object's ID.
	IKRSACHTCENT.ACHTCENT.Object.prototype.setID = function( newID ) {
	    this.id = newID;
	};
	
	// This function simply returns the object's ID.
	IKRSACHTCENT.ACHTCENT.Object.prototype.getID = function() {
	    return this.id;
	};
	
	// This function should be overridden by subclasses.
	IKRSACHTCENT.ACHTCENT.Object.prototype.__getClassName = function() {
	    return "ACHTCENT.Object";
	};
	
	// A function for string serialization.
	IKRSACHTCENT.ACHTCENT.Object.prototype.__toString = function() {
	    return "[" + this.__getClassName() + "]={ id=" + this.id + " }";
	};

//}