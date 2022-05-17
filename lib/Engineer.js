const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(id, name, email)
        this.github = github;
    }

    getGithub() {
        return <a href ="https://github.com/${this.username}" target="_blank">https://github.com/${this.username}</a>
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;