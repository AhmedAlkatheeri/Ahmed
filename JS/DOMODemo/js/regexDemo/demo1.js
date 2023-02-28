//reg ex 

// pattern : a-z or A-Z or 0-9 or special symbols: S#%etc.

//const regExName= new RegExp(/^[0-9]{2}\/[0-9]{3}$/);
//console.log(regExName.test("09/123"));       

//const regEx2= new RegExp(/^[0-3]{1}|[a-d]{1}$/);
//console.log(regEx2.test("a1"));       

//const regEx2= new RegExp(/^(0[1-9])|(1[0-2])$/);
//console.log(regEx2.test("01"));  
//console.log(regEx2.test("16"));  
//console.log(regEx2.test("11"));  


// Mounths and years 
//const regEx2= new RegExp(/^((0[1-9])|(1[0-2]))\/([0-9]{4})$/);
//console.log(regEx2.test("01/1234"));  
//console.log(regEx2.test("11/2020"));  
//console.log(regEx2.test("11/2023"));

// for phone numbers 
//const regEx2= new RegExp(/^([0-9]){10}$/);
//console.log(regEx2.test("0582222995"));  
//console.log(regEx2.test("11/2020"));  
//console.log(regEx2.test("11/2023"));

// for phone numbers but the diffrent we add (/d) 
//const regEx2= new RegExp(/^\d{9}$/);
//console.log(regEx2.test("582222995"));  

// // for phone numbers but the diffrent we add (/d) and seaprete the numbers
//const regEx3= new RegExp(/^(\d{3})(\d{3})(\d{3})$/);
//console.log(regEx3.test("582222995"));  


//const regEx4= new RegExp(/^(\w{3})(\w{3})(\w{3})$/);
//console.log("w result: ",regEx4.test("ABC"));  
//console.log("w result: ",regEx4.test("wwwwwwwww"));      

// email example 
const regEx4= new RegExp (/^[a-z,0-9]{2,30}@(fab.com|fab.ae)$/);
console.log("w result: ",regEx4.test("ahmedalkatheeri@fab.com")); 

