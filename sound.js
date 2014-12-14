var Count   = require(  './lib/count' );
var Music   = require( './lib/music' );
var Repeat  = require( './lib/repeat' );
var Int2Bin = require( './lib/int2bin' );

var count = new Count();
var music = new Music();
var repeat = new Repeat();
var int2bin = new Int2Bin();

count.pipe( music ).pipe( int2bin ).pipe( process.stdout )
