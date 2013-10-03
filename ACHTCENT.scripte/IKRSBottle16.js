/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

// The constructor
IKRSACHTCENT.ACHTCENT.Bottle16 = function( id ) {
    
    //ACHTCENT.Object.call();

    this.setID( id );
    this.setName( "bottle(16)" );
    this.setDepositValue( 16 );

};

IKRSACHTCENT.ACHTCENT.Bottle16.prototype = new IKRSACHTCENT.ACHTCENT.Depositable();
//IKRSACHTCENT.ACHTCENT.Bottle16.prototype.constructor = ACHTCENT.Bottle16;


// This function should be overridden by subclasses.
IKRSACHTCENT.ACHTCENT.Bottle16.prototype.__getClassName = function() {
    return "ACHTCENT.Bottle16";
};