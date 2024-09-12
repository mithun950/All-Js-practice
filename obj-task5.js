let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(const people in myObject){
        if(myObject.hasOwnProperty(people)){
            console.log(`key: ${people}  | type: ${typeof myObject[people]}`);
            
        }
    }