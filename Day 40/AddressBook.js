class Contact{

   constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.validateFirstName(firstName);
    this.validateLastName(lastName);
    this.validateAddress(address);
    this.validateCity(city);
    this.validateState(state);
    this.validateZip(zip);
    this.validatePhone(phone);
    this.validateEmail(email);

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
}


    validateFirstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(!nameRegex.test(firstName)){
            throw new Error("First Name is Incorrect");
        }
    }

    validateLastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(!nameRegex.test(lastName)){
            throw new Error("Last Name is Incorrect");

        }
    }

    validateAddress(value) {
        if (value.length < 4) throw new Error("Invalid Address");
    }

    validateCity(value) {
        if (value.length < 4) throw new Error("Invalid City");
    }

    validateState(value) {
        if (value.length < 4) throw new Error("Invalid State");
    }

    validateZip(zip) {
        const pattern = /^[1-9][0-9]{5}$/;
        if (!pattern.test(zip)) throw new Error("Invalid Zip");
    }

    validatePhone(phone) {
        const pattern = /^[6-9][0-9]{9}$/;
        if (!pattern.test(phone)) throw new Error("Invalid Phone");
    }

    validateEmail(email) {
        const pattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(email)) throw new Error("Invalid Email");
    }


}


class AddressBook{
    constructor(){
        this.contacts = [];
    }

    addContact(contact){
    if(!(contact instanceof Contact)){
        throw new Error ("Only contacts objects are allowed!!");
    }
    else{
        this.contacts.push(contact)
    }
}
}



try{
const addressBook  = new AddressBook();

const contact1 = new Contact(
        "Ramm",
        "Kumar",
        "MG Road",
        "Bangalore",
        "Karnataka",
        "560001",
        "9876543210",
        "ravi.kumar@gmail.com"
    );

addressBook.addContact(contact1);
addressBook.displayContacts();
}
catch(ex){
    console.log({name : ex.name , message : ex.message})
}




