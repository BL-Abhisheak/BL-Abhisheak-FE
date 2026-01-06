class Contact {
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

    validateFirstName(firstName) {
        const regex = /^[A-Z][a-z]{2,}$/;
        if (!regex.test(firstName)) {
            throw new Error("First Name is Incorrect");
        }
    }

    validateLastName(lastName) {
        const regex = /^[A-Z][a-z]{2,}$/;
        if (!regex.test(lastName)) {
            throw new Error("Last Name is Incorrect");
        }
    }

    validateAddress(value) {
        if (value.length < 4) {
            throw new Error("Invalid Address");
        }
    }

    validateCity(value) {
        if (value.length < 4) {
            throw new Error("Invalid City");
        }
    }

    validateState(value) {
        if (value.length < 4) {
            throw new Error("Invalid State");
        }
    }

    validateZip(zip) {
        const pattern = /^[1-9][0-9]{5}$/;
        if (!pattern.test(zip)) {
            throw new Error("Invalid Zip");
        }
    }

    validatePhone(phone) {
        const pattern = /^[6-9][0-9]{9}$/;
        if (!pattern.test(phone)) {
            throw new Error("Invalid Phone");
        }
    }

    validateEmail(email) {
        const pattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(email)) {
            throw new Error("Invalid Email");
        }
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (!(contact instanceof Contact)) {
            throw new Error("Only Contact objects are allowed");
        }

        if (this.contacts.some(c => c.email === contact.email)) {
            throw new Error("Contact with this email already exists");
        }

        this.contacts.push(contact);
    }

    displayContacts() {
        console.log(this.contacts);
        console.log("*********************");
    }

    editContactByFirstName(firstName, updatedData) {
        const contact = this.contacts.find(c => c.firstName === firstName);

        if (!contact) {
            throw new Error("Contact not found with first name: " + firstName);
        }

        if (updatedData.firstName) {
            contact.validateFirstName(updatedData.firstName);
            contact.firstName = updatedData.firstName;
        }
        if (updatedData.lastName) {
            contact.validateLastName(updatedData.lastName);
            contact.lastName = updatedData.lastName;
        }
        if (updatedData.address) {
            contact.validateAddress(updatedData.address);
            contact.address = updatedData.address;
        }
        if (updatedData.city) {
            contact.validateCity(updatedData.city);
            contact.city = updatedData.city;
        }
        if (updatedData.state) {
            contact.validateState(updatedData.state);
            contact.state = updatedData.state;
        }
        if (updatedData.zip) {
            contact.validateZip(updatedData.zip);
            contact.zip = updatedData.zip;
        }
        if (updatedData.phone) {
            contact.validatePhone(updatedData.phone);
            contact.phone = updatedData.phone;
        }
        if (updatedData.email) {
            contact.validateEmail(updatedData.email);
            contact.email = updatedData.email;
        }
    }

    deleteContactByFirstName(firstName) {
        const index = this.contacts.findIndex(c => c.firstName === firstName);

        if (index === -1) {
            throw new Error("Contact not found with first name: " + firstName);
        }

        this.contacts.splice(index, 1);
    }
}


try {
    const addressBook = new AddressBook();

    const contact1 = new Contact(
        "Abhisheak",
        "Bhaskaran",
        "Bommanahalli",
        "Bangalore",
        "Karnataka",
        "560001",
        "9876543210",
        "abhi.bhaskaran@gmail.com"
    );


    const contact2 = new Contact(
        "Ravi",
        "Kumar",
        "Bommanahalli",
        "Bangalore",
        "Karnataka",
        "560001",
        "9876543210",
        "ravi.kumar@gmail.com"
    );

    addressBook.addContact(contact1);
    addressBook.displayContacts();

    addressBook.editContactByFirstName("Ravi", {
        address: "Brigade Road",
        city: "Mysore",
        phone: "9123456789"
    });

    addressBook.displayContacts();

    addressBook.deleteContactByFirstName("Ravi");
    addressBook.displayContacts();

} catch (ex) {
    console.log({ name: ex.name, message: ex.message });
}
