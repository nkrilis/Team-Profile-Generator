// --- Helper js to hold functions ---

function starterHtml ()
{
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

      <title>Team Profiles</title>
    </head>
    <body>
      <header class="container-fluid bg-danger p-5 mb-5">
          <div class="text-center">
              <h1 class="text-white">My Team</h1>
          </div>
      </header>

      <section class="container d-flex justify-content-center" id="team">
      `;
}

function closeHtml ()
{
  return `
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
  </html>
  `;
}


function createCard(obj)
{
  if(obj.getRole() === 'Manager')
  {
    return `
    <div class="card m-2 h-100" style="width: 17rem;">
            <div class="card-header text-white bg-primary">
                <h3>${obj.getName()}</h3>
                <h5><i class="bi bi-cup-fill"></i>  ${obj.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${obj.officeNumber} </li>
              </ul>
            </div>
        </div>
        `;
  }

  else if(obj.getRole() === 'Engineer')
  {
    return `
    <div class="card m-2 h-100" style="width: 17rem;">
            <div class="card-header text-white bg-primary">
                <h3>${obj.getName()}</h3>
                <h5><i class="bi bi-eyeglasses"></i>  ${obj.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${obj.getGithub()}">${obj.getGithub()}</a> </li>
              </ul>
            </div>
        </div>
        `;
  }
  
  else if(obj.getRole() === 'Intern')
  {
    return `
    <div class="card m-2 h-100" style="width: 17rem;">
            <div class="card-header text-white bg-primary">
                <h3>${obj.getName()}</h3>
                <h5><i class="bi bi-mortarboard-fill"></i>  ${obj.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a> </li>
                <li class="list-group-item">School: ${obj.getSchool()} </li>
              </ul>
            </div>
        </div>
        `;
  }
}

module.exports = 
{
  createCard,
  starterHtml,
  closeHtml,
}