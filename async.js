const countdown= document.getElementById("guru")
// const num = 10;

    setTimeout(() => {
        countdown.innerHTML=10;
   console.log(10)
   setTimeout(()=>{
    countdown.innerHTML=9;
console.log(9)
setTimeout(() => {
    countdown.innerHTML=8;
    console.log(8)
    setTimeout(() => {
        countdown.innerHTML=7;
        console.log(7)
        setTimeout(() => {
            countdown.innerHTML=6;
            console.log(6)
            setTimeout(() => {
                countdown.innerHTML=5;
                console.log(5)
                setTimeout(() => {
                    countdown.innerHTML=4;
                    console.log(4)
                    setTimeout(() => {
                        countdown.innerHTML=3;
                        console.log(3)
                        setTimeout(() => {
                            countdown.innerHTML=2;
                            console.log(2)
                            setTimeout(() => {
                                countdown.innerHTML=1;
                                console.log(1)
                                console.log("Happy Independence Day")
                               setTimeout(() => {
                                countdown.innerHTML="Happy Independence Day 🎉🎉🎉🎉🎉🎉"
                                
                               }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
   },1000) 
}, 1000);


