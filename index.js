let card = document.getElementById("cardModal")

async function getCardInfo(col,cardID){
 try {
    const response = await fetch("./board.json")
    if (!response.ok){
console.log("uh oh big problem")
return null
    }

    const data = await response.json()
    const cardData = data.colums[col].cards.find(c => c.id == cardID)

    return cardData
    
} catch(err) {
    console.log(err)
    return null
}

}

async function openCard(col, cardID){
    const cardI = await getCardInfo(col, cardID)
document.getElementById("title").innerHTML = cardI.title
document.getElementById("disc").innerHTML = cardI.desc

card.style.display = "block"
}

window.onclick = function(event){
    if (event.target == card){
        card.style.display = "none"
    }
}