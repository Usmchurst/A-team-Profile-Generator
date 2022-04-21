const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require("fs");
const generateTeam = require("./src/generateTeam");


team = [];
const employeeQuestions = () => {
    inquirer.prompt([
        {

            type: "input",
            name: "name",
            message: "What is the employee name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the employee id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee email?",
        },
        {
             type: "input",
             name: "getId",
             message: "What is the employee getId?",

        },
        {
            type: "input",
            name: "getEmail",
            message: "What is the employee getEmail?",
        },
        {
            type: "list",
            name: "addMember",
            message: "What choice of employee would you like to add?",
            choices: ["Engineer", "Intern", "Manager","I do not want to add more members"],

        
        }
    ])

      .then((employeeAnswers) => {
          
        const employee = new Employee(employeeAnswers.id, employeeAnswers.name, employeeAnswers.email, employeeAnswers.officeNumber)
        team.push(employee)
        switch(employeeAnswers.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            case "Manager":
                managerQuestions();    
            default: 
            writeToFile("dist/index.html", generateTeam(team))

        }
    })  
};

const engineerQuestions = () => {
    inquirer.prompt([
        {

            type: "input",
            name: "name",
            message: "What is the engineer name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the engineer id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer email?",
        },
        {
             type: "input",
             name: "getId",
             message: "What is the engineer getId?",

        },
        {
            type: "input",
            name: "getEmail",
            message: "What is the engineer getEmail?",
        },
        {
            type: "list",
            name: "addMember",
            message: "What choice of employee would you like to add?",
            choices: ["Engineer", "Intern", "Manager","I do not want to add more members"],

        
        }
    
        
    ])

    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: 
            writeToFile("dist/index.html", generateTeam(team))
        }
    })
};


const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern school?"
        },
        {
            type: "list",
            name: "addMember",
            message: "What choice of team member would you like to add?",
            choices: ["Engineer", "Intern", "Manager","I dont want to add any more team members"],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default:
                writeToFile("dist/index.html", generateTeam(team))
        }
    })
}
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager office number?",
        },
        {
            type: "list",
            name: "addMember",
            message: "What choice of team member would you like to add?",
            choices: ["Engineer", "Intern", "I dont want to add any more team members"],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: 
            writeToFile("dist/index.html", generateTeam(team))
        }
    });
};

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log("file saved")
    });
};