let counter = document.querySelector(".counter");
let count = 0;

setInterval(() => 
{
    if (count < 10)
    {
        count += 1;
        counter.innerText = count;
    }
    else
    {
        clearInterval()
        // counter.innerText = "Finished!";
    }
}, 1000)
