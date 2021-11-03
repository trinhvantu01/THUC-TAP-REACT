var array = [1,2,4,5,2,3,4];
 var aryResult = {};
 for (var i = 0; i < arr.length; i++){
     var key = arr [i];
     if(aryResult[key] == undefined){
         aryResult[key] = 0;
     }
     aryResult[key] = aryResult[key] + 1;
 }
 console.log(aryResult);