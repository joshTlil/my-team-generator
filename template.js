// To allows us to put the cards in the array
const html = [];

// create the team
const generateTeam = (team) => {

    // create the manager html
    const generateManager = manager => {
        let managerCard = `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">OfficeNumber: ${manager.officeNumber}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
       
            </ul>
        </div>
    </div>
        `;
        html.push(managerCard);
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        let engineerCard = `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">

            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>

        </ul>
    </div>
</div>
        `;
        html.push(engineerCard);
    };

    // create the html for interns
    const generateIntern = intern => {
      let internCard = `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">School: ${intern.school}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">ID: ${intern.id}</li>
        </ul>
    </div>
</div>
        `;
    html.push(internCard);
    };
    console.log(team);

    for(let i = 0; i < team.length; i++ ) {

   if (team[i].getRole() === "Manager") {
       generateManager(team[i]);
   }
   if (team[i].getRole() === "Intern") {
       generateIntern(team[i]);
   }
   if (team[i].getRole() === "Engineer") {
       generateEngineer(team[i]);
   }

    

};
return html.join("");

};

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};