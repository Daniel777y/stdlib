'use strict';

function foo() {
	var x;
	var i;

	x = 0;
	for ( i = 0; i < 100; i++ ) {
		x += i;
	}
	if ( x !== x ) {
		throw new Error( 'something went wrong' );
	}
}


// EXPORTS //

module.exports = foo;
