//LucasGuimaraes07, lguimaraes07, lucas.guimaraesaureliano, RocketSeat , rocketseat

const linksSocialMedia = {
  github: 'LucasGuimaraes07',
  youtube: 'RocketSeat',
  facebook: 'lucas.guimaraesaureliano',
  instagram: 'lguimaraes07',
  twitter: 'rocketseat'
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}` // templateString
  
  //buscar o JSON com fetch;
  fetch(url)
  .then(response => response.json() )    // .then(promisse)->recurso do JavaScript para pegar dados da url
  .then( data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login 

  })
}

getGithubProfileInfos()

//Arrow Functions

/* forma contraida de escrever uma função.
função anonima= coloca o argumento e sem colocar o nome da funçao


Ex: 
 argumento => {}
(argumento, argumento2) => {}
() => {} */
