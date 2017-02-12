//this is not compiled so we must use common js and es5


require('babel-register')();

//disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function(){

}
