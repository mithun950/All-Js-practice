// const products = [
//     { name: "Laptop", price: 50000, available: true },
//     { name: "Mobile", price: 20000, available: false },
//     { name: "Headphones", price: 3000, available: true }
//   ];
   
// function checkAvailability(productName) {
//     for(const product of productName){
//         if (product.name=== productName){
//             if(product.available){
//                 return `${productName} is available`
//             }
//             else{
//                 return `${productName} is not available`

//             }
//         }
//     }
//     return `${productName} not found in product`

//   }
  
//   const result =checkAvailability("laptop");
//   console.log(result)

// function checkPasswordStrength(password) {
//     if(password.length>=8){
//         return "Very good! it was a strong password "
//     }
//     else{
//         return "Error!it was a weak password. Please write a strong password"
//     }
//   }
//   const yourPass = checkPasswordStrength("abc123")
//   console.log(yourPass)


const employees = [
    { name: "Alice", hourlyRate: 100, hoursWorked: 160 },
    { name: "Bob", hourlyRate: 120, hoursWorked: 150 },
    { name: "Charlie", hourlyRate: 110, hoursWorked: 170 }
  ];
  

// function calculateSalary(employees) {
//     for(const person of employees){
        
//     let monthlySalary = person.hoursWorked * person.hourlyRate;
//     console.log(`${person.name}: ${monthlySalary}`);
        
    
//     }
//   }

//    calculateSalary(employees)
  

// function checkEmailDomain(email) {
//     if (email==="gmail.com"){
//         return "Gmail User"
//     }
//     else {
//         return "Other email provider"
//     }
//   }
//   checkEmailDomain("gmail.com")


const products = [
    { name: 'Laptop', price: 800 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 150 }
];

function cheakPrice (products){
    for(const item of products){
        if(item.price>150){
            console.log(`${item.name}:${item.price}`);
        }
    }
}

cheakPrice(products);