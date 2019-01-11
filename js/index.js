// your code here
function getRepositories() {
  let username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + username + '/repos');
  req.send();
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(
    r =>
      '<li>' +
        '<a href="https://github.com/' + r.owner.login + '/' + r.name + '">' + r.name + '</a>' +
        ' - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="getCommits(this)">Get Commits</a>' +
        ' - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="getBranches(this)">Get Branches</a>' +
      '</li>'
  )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(i) {
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/' + i.owner.login + '/' + i.name + '/commits');
  req.send();
}

function displayCommits() {
  var commits = JSON.parse(this.responseText);
  console.log(commits);
  const commitList = '<ul>${repos.map(
    c =>
      '<li>' +
      c.author.login + c.commit.author.name + c.commit.message + '</li>'
  ).join('')}</u>';
  document.getElementById('details').innerHTML = commitsList;
}

function getBranches() {

}

function displayBranches() {

}
