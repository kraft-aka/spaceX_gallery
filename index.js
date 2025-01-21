

const endpoint = 'https://api.spacexdata.com/v4/rockets'

const spaceData = []
const list = document.querySelector('#data-container')
fetch(endpoint)
.then(blob => blob.json())
.then(data => {
  spaceData.push(...data);
  displayData(data)
})

console.log(spaceData)

function displayData(spaceData) {
  const html = spaceData?.map(data => {
    const imgUrl = data.flickr_images && data.flickr_images.length > 0 ? data.flickr_images[0] : ''
    return `
      <li class='card'>
        <img src=${imgUrl} alt='rocket'/>
        <h4>${data.company}</h4>
        <p>${data.description}</p>
        <p>${data.country}</p>
        <p>${data.name}</p>
        </li>
    `
  }).join('')
  list.innerHTML = html
}

//window.addEventListener('load',()=>displayData(spaceData))
