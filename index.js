
function cardCreator(arg1, arg2, arg3) {
    // creating a div and giving it a class name
    let newSongCard = document.createElement("div") // created a div
    newSongCard.classList.add("song-card") // given it a class
  
    // creating img tag setting the "src" to the imageLink
    let newImage = document.createElement("img")
    newImage.src = arg1
  
    // creating h4 tag and setting the text to songTitle
    let newSongTitle = document.createElement("h4")
    newSongTitle.textContent = arg2
  
    // creating a p tag and setting the text to artistName
    let newArtist = document.createElement("p")
    newArtist.textContent = arg3
  
    // creating add button
    let addButton = document.createElement("button")
    addButton.textContent = "add to playlist"
 
  
    newSongCard.appendChild(newImage)
    newSongCard.appendChild(newSongTitle)
    newSongCard.appendChild(newArtist)
    newSongCard.appendChild(addButton)
  
    // console.log(newSongCard);
  
    let body = document.querySelector("body")
  
    body.appendChild(newSongCard)

  
  }
  
  
  fetch("https://itunes.apple.com/us/rss/topalbums/limit=15/json")
  .then(response => response.json())
  .then(data => {
  
  
    let resultArray = data.feed.entry
    
    resultArray.forEach(element => {
  
      let songTitle = element["im:name"]["label"] // h4
      let imageLink = element["im:image"][2]["label"] //img
      let artistName = element["im:artist"]["label"] //p
      
      cardCreator(imageLink, songTitle, artistName)
  
    })
  })
  
  
  
  // this event listener is for adding to playlist
  document.addEventListener("click", event => {

    if (event.target.nodeName === "BUTTON") {
      let songCard = event.target.parentNode
  
      //created a list item
      let newList = document.createElement("li")
      newList.textContent = `${songCard.childNodes[1].textContent} - ${songCard.childNodes[2].textContent}`
  
      // created a delete button
      let deleteButton = document.createElement("button")
      deleteButton.id = "delete"
      deleteButton.textContent = "X"
      newList.appendChild(deleteButton)
  
  
      //appended the list item to the mother list
      let motherList = document.getElementById("mother-list")
      motherList.appendChild(newList)
  
    }
    //alert("Song was added to playlist!")-not working well
    
  }) 

  // this event listener is for deleting from playlist
  document.addEventListener("click", event => {
  
    if (event.target.id === "delete") {
      event.target.parentNode.remove()
    }
   //alert("Song was removed from playlist!")-ask where to put it

  })



 // this event listener is to submit a song you would like to see in the list
 const form = document.getElementById("form")
  
function resultGetter() {
    const result = document.getElementById("input").value
    const resultPage = document.getElementById("log")
    const currentResult = document.createElement("li")
    currentResult.textContent = result
    resultPage.appendChild(currentResult)
}  

 