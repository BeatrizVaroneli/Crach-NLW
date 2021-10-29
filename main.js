const linksSocialMedia = {
  github: 'BeatrizVaroneli',
  youtube: 'UCmKjx5eZ9exIL9SXGv4oATQ',
  facebook: 'bea.varonelli',
  instagram: 'bia_varonelli',
  twitter: 'VaroneliBea'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      usePhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
