// function add(x,y)
// {
//     return x+y;
// }

// //module.exports = add;
// module.exports.f1 = add;

// //console.log(module);
// //console.log("sum==",add(2,3));

var log = {
    info: function (info) {
    console.log('Info: ' + info);
    },
    warning:function (warning) {
    console.log('Warning: ' + warning);
    },
    error:function (error) {
    console.log('Error: ' + error);
    }
    };
    var logs = {
    info1: function (info) {
    console.log('Info: ' + info);
    },
    warning1:function (warnings) {
    console.log('Warning: ' + warning);
    },
    error1:function (errors) {
    console.log('Error: ' + error);
    }
    };
    
    module.exports.log = log;
    module.exports.logs=logs;
    
    //2.module.exports = 'Hello world';
    
    module.exports = {
    firstName: 'Anil',
    lastName: 'Kushwaha'
    }