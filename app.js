const btn=document.querySelector("#btn");
const advice=document.querySelector("#advice");
const resetbtn=document.querySelector("#resetbtn");
const tweet=document.querySelector("#tweet")

btn.addEventListener(("click") , ()=>{
    btn.style.display="none";
    getadvice();
});
    
const getadvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const advobj = data.slip;
        advice.innerHTML = `${advobj.advice}`;
      }) 
      .catch(error => {
        console.log(error);
      });
  };
  
  tweet.addEventListener("click", () => {
    const tweetText = encodeURIComponent(advice.innerText);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  });

  resetbtn.addEventListener("click", () => {
    advice.innerHTML = "Some Random Advice"; // or your default message
    btn.style.display = "inline-block";      // show Get Advice button
  });

function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString();
    document.getElementById("datetime").textContent = formatted;
  };
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
