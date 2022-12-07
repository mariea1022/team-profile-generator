// function to generate the html page, using employees array as the argument/parameter
// used font awesome for the icons
// used bootstrap for the cards
function generateTeamProfile(data) {
    console.log(data);
    let html = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/992b8b8f31.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header><h1>My Team</h1></header>
    <div class="mainContainer">`; 

    for(let i = 0; i<data.length; i++) {
        let employeeType = data[i];
        console.log(data[i])
        if (employeeType.getRole() === "Manager") {
        html += `<div class="cardContainer">
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h2>${data[i].name}</h2> 
        <h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                <li class="list-group-item">Office number: ${data[i].officeNumber}</li>
            </ul>
         </div>
         </div>`
        } else if (employeeType.getRole() === "Engineer") {
            // html+= 
            html += `<div class="cardContainer">
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h2>${data[i].name}</h2> 
            <h3><i class="fa-solid fa-glasses"></i> Engineer</h3>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https:github.com/${data[i].github}">${data[i].github}</a></li>
                </ul>
            </div>
            </div>`
        } else if(employeeType.getRole() === "Intern") {
            // html+= 
            html += `<div class="cardContainer">
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h2>${data[i].name}</h2> 
            <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                    <li class="list-group-item">School: ${data[i].school}</li>
                </ul>
            </div>
            </div>`
        }
    }

    // the rest of the html
    html += `</div>
    </body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>
    `; 

    return html;


}

module.exports = generateTeamProfile;