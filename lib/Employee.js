

class Employee {
    constructor(id, name, email,) {
        this.id = id
        this.name = name
        this.email = email
        
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Employee;