/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/
 
 // capacity=-1 implies infinite space
 IKRSACHTCENT.ACHTCENT.ArraySet = function( capacity ) {
 
	this.elements = [];
	if( typeof capacity == "undefined" )
		this.capacity = -1;
	else
		this.capacity = capacity;
 };
 
 IKRSACHTCENT.ACHTCENT.ArraySet.prototype = new IKRSACHTCENT.ACHTCENT.Object();
 //IKRSACHTCENT.ACHTCENT.ArraySet.prototype.constructor = IKRSACHTCENT.ACHTCENT.ArraySet;
 
 
 IKRSACHTCENT.ACHTCENT.ArraySet.prototype.setCapacity = function( capacity,
													 truncate 
													 ) {
	if( capacity < -1 || capacity == 0 )
		throw "Cannot set ArraySet capacity to negative values or to zero.";
		
	this.capacity = capacity;
	if( this.cpacity == -1 )
		return;
		
	// Truncate?
	if( this.elements.length <= this.capacity )
		return;
		
		
	this.elements.splice( this.capacity, 
							this.elements.length - this.capacity
							);
 };
 
 IKRSACHTCENT.ACHTCENT.ArraySet.prototype.removeElement = function( elem ) {
	
	for( var i = 0; i < this.elements.length; i++ ) {
			
		if( this.elements[i].getID() == elem.getID() )
			return this.removeElementAt(i);
			
	}
	
	return false;
 };
 
 IKRSACHTCENT.ACHTCENT.ArraySet.prototype.removeElement = function( index ) {
 
	if( index < 0 || index >= this.elements.length )
		return false;
		
	this.elements.splice( index, 1 );
	return true;
 };