/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/
 


IKRSACHTCENT.ACHTCENT.Inventory = function( id ) {

    //ACHTCENT.Object.call();
    
    this.setID( id );
    
    // An array for storing the depositables (bottles, cans, ...)
    this.depositables           = [];
    this.totalDepositValue      = 0;
    
    // TODO (no such class exists yet)
    this.carriages              = [];
    this.totalCarryCapacity     = 0;

    // Decoration stuff    
    this.blingBlings            = [];
};

IKRSACHTCENT.ACHTCENT.Inventory.prototype = new IKRSACHTCENT.ACHTCENT.Object( null );
//ACHTCENT.Inventory.prototype.constructor = ACHTCENT.Inventory;

/**
 * Get the total depositable value this inventory currently contains.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.getTotalDepositValue = function() {
    return this.totalDepositValue;
};

/**
 * Get the total depositable value this inventory currently contains.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.getTotalCarryCapacity = function() {
    return this.totalCarryCapacity;
};



/**
 * Adds any item to this inventory.
 * There are three item types:
 *   - depositables
 *   - carriage containers
 *   - bling blings
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.addItem = function( item ) {

    if( typeof item.getDepositValue == "function" ) {

	return this.addDepositable( item );

    } else if( typeof item.getCarryCapacity == "function" ) {

	return this.addCarriage( item );

    } else {

	return this.addBlingBling( item );

    }

};

/**
 * Removes the passed item.
 * There are three item types:
 *   - depositables
 *   - carriage containers
 *   - bling blings
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeItem = function( item ) {

    if( typeof item.getDepositValue == "function" ) {

	return this.removeDepositable( item );

    } else if( typeof item.getCarryCapacity == "function" ) {

	return this.removeCarriage( item );

    } else {

	return this.removeBlingBling( item );

    }

};

/**
 * Adds a new depositable to this inventory.
 * The passed item MUST have a getDepositValue() function.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.addDepositable = function( depositable ) {

    // Inventory capacity check
    if( this.getTotalCarryCapacity() <= this.depositables.length ) {
	
	// No more space to carry depositables
	return false;
    }
    // else:

    this.totalDepositValue += depositable.getDepositValue();
    this.depositables.push( depositable );

    return true;
};

/**
 * Removes the passed depositable and decreases the total deposit value.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeDepositable = function( depositable ) {

    // Locate carriage by id
    for( var i = 0; i < this.depositables.length; i++ ) {
	
	if( this.depositables[i].getID() == depositable.getID() )
	    return this.removeDepositableAt(i);

    }
    
    // Loop terminated -> element not found
    return false;
};

/**
 * Removes the depositable at the given array index and decreases the total deposit value.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeDepositableAt = function( index ) {

    if( index < 0 || index >= this.depositables.length )
	return false;

    //window.alert( "Before: " + JSON.stringify(this.depositables) );
    var depositable = this.depositables[ index ];
    this.depositables.splice( index, 1 );
    //window.alert( "After: " + JSON.stringify(this.depositables) );
    
    this.totalDepositValue = Mathf.max( 0, 
				       this.totalDepositValue - depositable.getDepositValue() 
				     );
    
    return true;
};

/**
 * Adds a new carryable to this inventory.
 * The passed item MUST have a getDepositValue() function.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.addCarriage = function( carriage ) {

    // Inventory capacity check?
    // ...

    this.totalCarryCapacity += carriage.getCarryCapacity();
    this.carriages.push( carriage );
    
    return true;

};

/**
 * Removes the passed carriage and decreases the total carry capacity.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeCarriage = function( carriage ) {

    // Locate carriage by id
    for( var i = 0; i < this.carriages.length; i++ ) {
	
	if( this.carriages[i].getID() == carriage.getID() )
	    return this.removeCarriageAt(i);

    }
    
    // Loop terminated -> element not found
    return false;
};

/**
 * Removes the carriage at the given array index and decreases the total carry capacity.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeCarriageAt = function( index ) {

    if( index < 0 || index >= this.carriages.length )
	return false;

    var carriage = this.carriages[ index ];
    this.carriages.splice( index, 1 );
    
    this.totalCarryCapacity = Mathf.max( 0, 
					this.totalCarryCapacity - carriage.getCarryCapacity() 
				      );

    // Drop depositables that do not fit!
    while( this.depositables.length > this.totalCarryCapacity ) {
	this.removeDepositableAt( this.depositables.length-1 );
    }
    
    return true;
};

IKRSACHTCENT.ACHTCENT.Inventory.prototype.addBlingBling = function( blingBling ) {

    // Inventory capacity check?
    // ...

    this.blingBlings.push( blingBling );

    return true;

};

/**
 * Removes the passed bling bling.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeBlingBling = function( blingBling ) {

    // Locate carriage by id
    for( var i = 0; i < this.blingBlings.length; i++ ) {
	
	if( this.blingBlings[i].getID() == blingBling.getID() )
	    return this.removeBlingBlingAt(i);

    }
    
    // Loop terminated -> element not found
    return false;
};

/**
 * Removes the bling bling at the given array index.
 **/
IKRSACHTCENT.ACHTCENT.Inventory.prototype.removeBlingBlingAt = function( index ) {

    if( index < 0 || index >= this.blingBlings.length )
	return false;

    this.blingBlingss.splice( index, 1 );   
    return true;
};



IKRSACHTCENT.ACHTCENT.Inventory.prototype.__getClassName = function() {
    return "ACHTCENT.Inventory";
};

IKRSACHTCENT.ACHTCENT.Inventory.prototype.__toString = function() {
    return "[" + this.__getClassName() + "]={ " +
	"id=" + this.getID() + 
	", depositables.length=" + this.depositables.length + 
	", totalDepositValue=" + this.totalDepositValue + 
	", carriages.length=" + this.carriages.length + 
	", totalCarryCapacity=" + this.totalCarryCapacity + 
	", blingBlings.length=" + this.blingBlings.length +
	" }";
};