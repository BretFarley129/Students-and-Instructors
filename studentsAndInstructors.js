var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
}

function printObjArr(arr){
    for (var i = 0; i < arr.length; i ++){
        var strLength = arr[i].first_name.length + arr[i].last_name.length;
        console.log("",i+1, "-", arr[i].first_name, arr[i].last_name, "-", strLength);
    }
}
console.log("Students:");
printObjArr(users.Students);
console.log("Instructors:");
printObjArr(users.Instructors);
