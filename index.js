

const endpoint = 'https://api.spacexdata.com/v4/rockets'

const spaceData = []
const list = document.querySelector('.data')
fetch(endpoint).then(blob => blob.json()).then(data => spaceData.push(data))

console.log(spaceData, list)

function displayData() {
  const html = spaceData.map(data => {
    return `
      <li class='card'>
        <img src=${data.flickr_images} width='500' height='auto' alt='rocket'/>
        <h4>${data.company}</h4>
        </li>
    `
  }).join('')
  list.innerHTML = html
  console.log(html)
}

//displayData(); 





