// JSON: javascript object notation
// key value pair format
// key: value
//{'name':abdulla,'age':24 }

let personOBJ=[{
    name:'abdulla',
     age:24,
     gender:'male',
     location: "abu dhabi"
    },
    {
    name:'ahmad',
    age:25,
    gender:'male',
    location: "abu dhabi"
   },
   {
   name:'ahmad',
   age:25,
   gender:'male',
   location: "abu dhabi"
  },
  {
  name:'ahmad',
  age:25,
  gender:'male',
  location: "abu dhabi"
 },
 {
 name:'ahmad',
 age:25,
 gender:'male',
 location: "abu dhabi"
}


]
    //array json object 

  //  console.log(personOBJ)

//personOBJ.contactnumber="0501234567"

//console.log(personOBJ)

//console.log(personOBJ.age)

//let keys= Object.keys(personOBJ)

//console.log(keys)

//let val= Object.values(personOBJ)

//console.log(val)

//for (const key in personOBJ) {
//        const value = personOBJ[key];
//        for(const ikey in value){
//        console.log("key:", key, "ikey:", ikey,"value:", value[ikey])
//        }
        
    
//}

//personOBJ.forEach((e)=>console.log(e))

let result= personOBJ.map((e)=> e.name)
console.log(result)

