
fetchQuote=()=>{
  
let randomquoteindex=Math.floor(Math.random()*15)
console.log(randomquoteindex)
fetch('https://type.fit/api/quotes').then((data)=>{
    return data.json()
}).then((quotes)=>{
  document.getElementById('quote').innerText=quotes[randomquoteindex].text
  document.getElementById('author').innerText=quotes[randomquoteindex].author
})
  
}

fetchQuote()
