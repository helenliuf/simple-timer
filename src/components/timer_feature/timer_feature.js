export class TimerFeature {
    constructor() {
        this.loadCSS();
    }    

    loadCSS() {
        const styleSheet = document.createElement("link");
        styleSheet.rel = "stylesheet";
        styleSheet.href = "components/timer_feature/timer_feature.css";
        document.head.appendChild(styleSheet);
    }

    setInterval(){
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
            if (interval){
                let seconds = interval % 60;
                let minutes = Math.floor(interval / 60);
    
                const timerDisplay = document.getElementById("timer");
                timerDisplay.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
                return;
            }
            alert("Please enter a valid interval.");
            return;
        } catch (e){
            console.error(e);
            return;
        }

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
        checkIcon.src = "./resources/images/checked.png";
        //TODO: move to css
        checkIcon.style.cursor = "pointer";
        checkIcon.style.width = "25px";
        checkIcon.style.height = "25px";

        let interval = undefined;
        checkIcon.addEventListener('click', () => {
            interval = this.setInterval();
            if (interval){
                this.updateDisplay(interval);
            }
        });

        inputContainer.append(minutesInput);
        inputContainer.append(secondsInput);
        inputContainer.append(checkIcon);

        fullContainer.appendChild(inputContainer);

        // timer container
        const timerContainer = document.createElement("div");
        timerContainer.id = "timer";
        timerContainer.textContent = `${String(0).padStart(2, '0')} : ${String(0).padStart(2, '0')}`;

        fullContainer.append(timerContainer);


        return fullContainer;
    }
}