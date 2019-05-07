// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-dennispintilie');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    var arr = _.filter(array, function(val, loc, col){
        if (array[loc].gender === "male"){
            return true;
        }else{
            return false;
        }
    });
    return arr.length;
};

var femaleCount = function(array) {
    var arr = _.filter(array, function(val, loc, col){
        if (array[loc].gender === "female"){
            return true;
        }else{
            return false;
        }
    });
    return arr.length;
};

var oldestCustomer = function(array){
   
};

var youngestCustomer = function(array){
    
};

var averageBalance = function(array){
    var total = 0;
    _.each(array, function(val, i, col){
        /* 1) get rid of $ and ,
        2) turn string into number
        */
        total += val.balance;
    });
    
    var avg = total / array.length;
    
    return avg;
};

var firstLetterCount = function(array, letter){
    var arr = _.filter(array, function(val, loc, col){
        if(array[loc].name.charAt(0).toUpperCase() === letter.toUpperCase()){
            return true;
        }else if(array[loc].name.charAt(0).toLowerCase() === letter.toUpperCase()){
            return true;
        }else{
            return false;
        }
    });
    
    return arr.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    // first find the customer in the <array> and extract their friends list
    
    
    var arr = _.filter(array, function(val , loc, col){
        if(array[loc].friends.charAt(0).toUpperCase() === letter){
            return true;
        }else if(array[loc].friends.charAt(0).toLowerCase() === letter){
            return true;
        }else{
            return false;
        }
    });
    
    return arr.length;
};

var friendsCount = function(array, name){
    
};

var topThreeTags = function(array){
    
};

var genderCount = function(array){
    var object = {};
    var male = _.filter(array, function(val, loc, col){
        if(array[loc].gender === "male"){
            return true; 
        }
    });
    
    object.male = male.length;
    
    var female = _.filter(array, function(val, loc, col){
        if(array[loc].gender === "female"){
            return true;   
        }
    });
    
    object.female = female.length;
    
    var trans = _.filter(array, function(val, loc, col){
        if(array[loc].gender === "transgender"){
            return true;
        }
    });
    
    object.transgender = trans.length;
    
    
    return object;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
