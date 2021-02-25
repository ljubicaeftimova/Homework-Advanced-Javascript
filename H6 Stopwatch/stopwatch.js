
let timer = document.getElementById("timer");
function myTimer (seconds, minutes,hours){
    timer.innerHTML = `${hours} : ${minutes} : ${seconds}`; 
}


let stopWatch = {
seconds : 0,
minutes : 0,
hours : 0,
intValId: null,

    start: function () {
        this.intValId = setInterval(() => {
            this.seconds++;
            if (this.seconds < 10 || this.seconds == 0) {
                this.seconds = '0' + this.seconds;}
            myTimer (this.seconds,this.minutes,this.hours)
            if(this.seconds==60){
                this.seconds=0;
                this.minutes++;
                if (this.minutes < 10 ||this.minutes == 0) {
                    this.minutes = '0' + this.minutes;}
                
            }
            if(this.minutes==60){
                this.minutes=0;
                this.hours++;
                if (this.hours < 10 || this.hours == 0) {
                    this.hours = '0' + this.hours; 
                }
            } 
        }, 500);
    },
    
    stop: function () {
        clearInterval(this.intValId);
        this.intValId = null;
    },
    reset: function () {
        if (this.intValId) {
            clearInterval(this.intValId);
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;}
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;}
    }


document.getElementById("start").addEventListener("click", () => {
    stopWatch.start();
})
document.getElementById("stop").addEventListener("click", () => {
    stopWatch.stop();
})
document.getElementById("reset").addEventListener("click", () => {
    stopWatch.reset();
})

