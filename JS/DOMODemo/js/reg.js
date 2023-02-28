// console.log("Hello from reg");
//const element = document.getElementById ("idH");
// element : is used to hold hte specific element from the html page in javascript 
// document : it is a dom tree for your page. 
// getElementById : function : 
// it will help us to get the element on the basis of id. 
// tagname, css class, etc.

//to all h1 tags
//let h1Element  = document.getElementsByTagName("h1")
//console.log(h1Element.length)
//h1Element[0].innerHTML= "EIBFS";
//h1Element[1].innerHTML= "ADIB/FAB";


//let element1 = document.getElementById ("idH"); 
//element.innerHTML= "RegisterPage";
// <startTag> innerHTML </endTag> 

//console.log("hello"); 

var data = [];
var selectedRow = null;
const onFormSubmit =()=>{

    let fullName = document.getElementById('fullName').value;
    console.log("fullName: " + fullName);
    
    let email = document.getElementById('email').value;
    console.log("email: " + email);
    
    let salary = document.getElementById('salary').value;
    console.log("salary: " + salary);

    let city = document.getElementById('city').value;
    console.log("city: " + city);

    if(validate ()) {
        let formData = readFormData();
        //data.push(formData);
        if(selectedRow== null){
            insertNewRecord(formData);
            resetForm();

        } else {

        updateRecord(formData);
    }

    } else { 
        console.log("failed validation");
    }
}; 


// validation of data. 
const validate = () => {
    let isValid = true; 

    if (document.getElementById ("fullName").value =="") {
        isValid= false
        document.getElementById("fullNameValidationError"). classList.remove("hide");
    } else {
        isValid = true;
        if (
            !document 
            .getElementById
            ("fullNameValidationError")
            .classList.contains("hide")
        ) {

        }
    }
   

    if (document.getElementById ("email").value =="") {
        isValid= false
        document.getElementById("emailValidationError"). classList.remove("hide");
    } else {
        isValid = true;
        if (
            !document 
            .getElementById
            ("fullNameValidationError")
            .classList.contains("hide")
        ) {
            
        }
    }
   

    if (document.getElementById ("salary").value =="") {
        isValid= false
        document.getElementById("salaryValidationError"). classList.remove("hide");
    } else {
        isValid = true;
        if (
            !document 
            .getElementById
            ("fullNameValidationError")
            .classList.contains("hide")
        ) {
            
        }
    }
  

    if (document.getElementById ("city").value =="") {
        isValid= false
        document.getElementById("cityValidationError"). classList.remove("hide");
    } else {
        isValid = true;
        if (
            !document 
            .getElementById
            ("fullNameValidationError")
            .classList.contains("hide")
        ) {
            
        }
    }

    return isValid;
}; 

const readFormData =() => {

    // to get the data from all input fields. 
    var formData = {};

    formData.fullName = document. 
    getElementById("fullName").value;

    formData.email = document. 
    getElementById("email").value;

    formData.salary = document. 
    getElementById("salary").value;

    formData.city = document. 
    getElementById("city").value;
    
    return formData;
}; 

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = ""; 
}

const insertNewRecord=(obj) => {
data.push(obj);
displayRecords();

};

// used to display the infore. 
// print the array of json objects (data)

const displayRecords =()=>{ 
    var table=document.getElementById("employeeList");
var tableBody=table.getElementsByTagName("tbody")[0];
var newRow=tableBody.insertRow(tableBody.length);

cell1=newRow.insertCell(0);
cell1.innerHTML=data[data.length-1].fullName;

cell2=newRow.insertCell(1);
cell2.innerHTML=data[data.length-1].email;

cell3=newRow.insertCell(2);
cell3.innerHTML=data[data.length-1].salary;

cell4=newRow.insertCell(3);
cell4.innerHTML=data[data.length-1].city;

cell5=newRow.insertCell(4);
cell5.innerHTML= ` <a onClick="onEdit(this)" class = "edit-btn">Edit</a> <a onClick="onDelete(this)" class = "delete-btn">Delete</a>`;

data.forEach((e) => console.log(e)); } 

const onDelete= (td)  =>{
    if (confirm("Are you sure you want to delete this record?")){
        console.log("delete")
    let row = td.parentElement.parentElement
//    td.parentElement.parentElement.remove();
document.getElementById("employeeList").deleteRow(row.rowIndex);
console.log(" record deleted");

         } else {
            console.log(" not deleted");
         }
    //console.log(row);
}; 

const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
document.getElementById("email").value = selectedRow.cells[1].innerHTML;
document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}; 

const updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
  };