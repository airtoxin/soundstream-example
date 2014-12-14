var Transform = require( 'stream' ).Transform;
var util = require( 'util' );

util.inherits( Music, Transform );
function Music () {
	Transform.call( this, { objectMode: true } );
};

Music.prototype._line = function ( t ) {
	return ( ( ( t >> 2 & 12 & t >> 9 ) | ( t >> 8 | t >> 9 ) & 46 & t >> 8 ) ) ^ ( t & t >> 13 | t >> 6 );
	// return ( t * 5 & t >> 7 ) | ( t * 3 & t >> 10 );
	// return t * ( 3 & t >> 4 | ( t >> 12 | t >> 8 ) & 63 & t >> 4 );
};

Music.prototype._transform = function ( tick, encode, callback ) {
	this.push( this._line( tick ) );
	callback();
};

module.exports = Music;
