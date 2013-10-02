/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

ACHTCENT.Inventory = function( id ) {

    ACHTCENT.Object.call();
    
    this.setID( id );
    
    // An array for storing the depositables (bottles, cans, ...)
    this.depositables           = [];
    this.totalDepositValue      = 0;
    
    // TODO (no such class exists yet)
    this.carriables             = [];
    this.totalCarryCapacity     = 0;

    // Decoration stuff    
    this.blingBlings            = [];
}

ACHTCENT.Inventory.prototype = new ACHTCENT.Object( null );
ACHTCENT.Inventory.prototype.constructor = ACHTCENT.Inventory;

/**
 * Get the total depositable value this inventory currently contains.
 **/
ACHTCENT.Inventory.prototype.getTotalDepositValue = function() {
    return this.totalDepositValue;
}

/**
 * Get the total depositable value this inventory currently contains.
 **/
ACHTCENT.Inventory.prototype.getTotalCarryCapacity = function() {
    return this.totalCarryCapacity;
}



/**
 * Adds any item to this inventory.
 * There are three item types:
 *   - depositables
 *   - carriage containers
 *   - bling blings
 **/
ACHTCENT.Inventory.prototype.addItem = function( item ) {

    if( typeof item.getDepositValue == "function" ) {

	this.addDepositable( item );

    } else if( typeof item.getCarryCapacity == "function" ) {

	this.addCarriable( item );

    } else {

	this.addBlingBling( item );

    }

}

/**
 * Adds a new depositable to this inventory.
 * The passed item MUST have a getDepositValue() function.
 **/
ACHTCENT.Inventory.prototype.addDepositable = function( depositable ) {

    // Inventory capacity check
    if( this.getTotalCarryCapacity() <= this.depositables.length ) {
	
	// No more space to carry depositables
	return false;
    }
    // else:

    this.totalDepositValue += depositable.getDepositValue();
    this.depositables.push( depositable );

    return true;
}

/**
 * Adds a new carryable to this inventory.
 * The passed item MUST have a getDepositValue() function.
 **/
ACHTCENT.Inventory.prototype.addCarriable = function( carriable ) {

    // Inventory capacity check?
    // ...

    this.totalCarryCapacity += carriable.getCarryCapacity();
    this.carriables.push( carriable );
    
    return true;

}

ACHTCENT.Inventory.prototype.addBlingBling = function( blingBling ) {

    // Inventory capacity check?
    // ...

    this.blingBlings.push( blingBling );

    return true;

}



ACHTCENT.Inventory.prototype.__getClassName = function() {
    return "ACHTCENT.Inventory";
}

ACHTCENT.Inventory.prototype.__toString = function() {
    return "[" + this.__getClassName() + "]={ " +
	"id=" + this.getID() + 
	", depositables.length=" + this.depositables.length + 
	", totalDepositValue=" + this.totalDepositValue + 
	", carriables.length=" + this.carriables.length + 
	", totalCarryCapacity=" + this.totalCarryCapacity + 
	", blingBlings.length=" + this.blingBlings.length +
	" }";
}