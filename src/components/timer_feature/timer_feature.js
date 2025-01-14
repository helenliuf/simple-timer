export class TimerFeature {
    constructor() {
        this.loadCSS();
        this.totalSeconds = 0;
        this.timerInterval = null;
    }    

    loadCSS() {
        const styleSheet = document.createElement("link");
        styleSheet.rel = "stylesheet";
        styleSheet.href = "components/timer_feature/timer_feature.css";
        document.head.appendChild(styleSheet);
    }

    getInterval(){
        try{
            const minutes = parseInt(document.getElementById("minute-input").value) || 0;
            const seconds = parseInt(document.getElementById("second-input").value) || 0;

            if (minutes || seconds){
                let totalSeconds = minutes * 60 + seconds;
                if (totalSeconds == 0){
                    alert("Interval must be more than 0 seconds.");
                    return;
                } 
                return totalSeconds;
            }
            alert("Please enter a valid number of minutes and/or seconds!")
            return;
        } catch (e){
            alert(e);
            return;
        }
    }

    updateDisplay(interval){
        try{
            const timerDisplay = document.getElementById("timer");
            if (interval){
                let seconds = interval % 60;
                let minutes = Math.floor(interval / 60);
                timerDisplay.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
            } else {
                timerDisplay.textContent = `${String(0).padStart(2, '0')} : ${String(0).padStart(2, '0')}`;
            }
            return;
        } catch (e){
            console.error(e);
            return;
        }

    }

    playDing(){
        // create audio object
        const audio = new Audio("./resources/audio/ding2.mp3");

        //play audio
        audio.play().catch(e => {
            console.error("error playing ding audio:", e);
        });
    }

    startCountdown(startSeconds, interval){
        let totalSeconds = startSeconds;
        this.timerInterval = setInterval(() => {
            this.totalSeconds = totalSeconds;
            if (totalSeconds <= 0) {
                this.playDing();
                this.changeTimerSize();
                totalSeconds = interval+1;
            }
            totalSeconds--;
            this.updateDisplay(totalSeconds);
            
        }, 1000);
    }

    stopCountdown(){
        clearInterval(this.timerInterval);
    }

    changeTimerSize(){
        const timerDisplay = document.getElementById("timer");
        timerDisplay.style.fontSize = "68px";

        setTimeout(() => {
            timerDisplay.style.fontSize = "60px";
        }, 350)
    }

    render() {
        // full container
        const fullContainer = document.createElement("div");
        fullContainer.id = "full-container"

        // input container
        const inputContainer = document.createElement("div");
        inputContainer.id = "input-container"

        // interval inputs
        const minutesInput = document.createElement("input");
        minutesInput.id = "minute-input";
        minutesInput.type = "number";
        minutesInput.value = 0;
        minutesInput.min = 0;
        minutesInput.max = 60;

        const secondsInput = document.createElement("input");
        secondsInput.id = "second-input";
        secondsInput.type = "number";
        secondsInput.value = 0;
        secondsInput.min = 0;
        secondsInput.max = 60;

        const checkIcon = document.createElement('img');
        checkIcon.id = "check-icon";
        checkIcon.className = "custom-icon";
        checkIcon.src = "./resources/images/checked.png";

        let interval = undefined;
        checkIcon.addEventListener('click', () => {
            interval = this.getInterval();
            if (interval){
                this.updateDisplay(interval);
            }
        });

        inputContainer.appendChild(minutesInput);
        inputContainer.appendChild(secondsInput);
        
        fullContainer.appendChild(inputContainer);
        fullContainer.appendChild(checkIcon);

        // timer container
        const timerDisplay = document.createElement("div");
        timerDisplay.id = "timer";
        timerDisplay.textContent = `${String(0).padStart(2, '0')} : ${String(0).padStart(2, '0')}`;

        fullContainer.appendChild(timerDisplay);

        const controls = document.createElement('div');
        controls.id = "control-container";

        const start = document.createElement('img');
        start.id = "start-icon";
        start.className = "custom-icon";
        start.class = "icons";
        start.src = "./resources/images/play.png";

        let countdown = false;
        start.addEventListener('click', () => {
            if (interval && !countdown){
                countdown = true;
                start.src = "./resources/images/pause.png";
                this.startCountdown(this.totalSeconds > 0 ? this.totalSeconds : interval, interval);
            } else if (countdown){
                countdown = false;
                this.stopCountdown();
                start.src = "./resources/images/play.png";
            }
        })

        const restart = document.createElement('img');
        restart.id = "restart-icon";
        restart.className = "custom-icon";
        restart.src = "./resources/images/refresh.png";

        restart.addEventListener('click', () => {
            if(interval){
                countdown = false;
                start.src = "./resources/images/play.png";
                this.stopCountdown();
                this.updateDisplay(interval)
                this.totalSeconds = 0;
            }
        });

        controls.appendChild(start);
        controls.appendChild(restart);

        const spacer = document.createElement("div");
        spacer.class = "spacer";
        fullContainer.append(spacer);
        fullContainer.appendChild(controls);

        return fullContainer;
    }
}