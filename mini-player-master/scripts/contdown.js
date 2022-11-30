const min = document.getElementById('min')
const sec = document.getElementById('sec')
const minInput = document.getElementById('min-input')
const secInput = document.getElementById('sec-input')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')
localStorage.score = 0;
const mapQiuzAns = {
    Quiz1:[
        "20Hz","50Hz","80Hz","110Hz","140Hz","170Hz"
    ],
    Quiz2:[
        "20Hz","50Hz","80Hz","110Hz","140Hz","170Hz"
    ],
    Quiz3:[
        "20Hz","50Hz","80Hz","110Hz","140Hz","170Hz"
    ],
    Quiz4:[
        "20Hz","50Hz","80Hz","110Hz","140Hz","170Hz"
    ],
    Quiz5:[
        "20Hz","50Hz","80Hz","110Hz","140Hz","170Hz"
    ],
    Quiz6:[
        "20Hz","50Hz","80Hz","110Hz","140Hz","170Hz"
    ],
    Quiz7:[
        "200Hz","230Hz","250Hz","300Hz","350Hz","400Hz"
    ],
    Quiz8:[
        "200Hz","230Hz","250Hz","300Hz","350Hz","400Hz"
    ],
    Quiz9:[
        "200Hz","230Hz","250Hz","300Hz","350Hz","400Hz"
    ],
    Quiz10:[
        "200Hz","230Hz","250Hz","300Hz","350Hz","400Hz"
    ],
    Quiz11:[
        "200Hz","230Hz","250Hz","300Hz","350Hz","400Hz"
    ],
    Quiz12:[
        "200Hz","230Hz","250Hz","300Hz","350Hz","400Hz"
    ],
    Quiz13:[
        "450Hz","500Hz","550Hz","600Hz","650Hz","700Hz"
    ],
    Quiz14:[
        "450Hz","500Hz","550Hz","600Hz","650Hz","700Hz"
    ],
    Quiz15:[
        "450Hz","500Hz","550Hz","600Hz","650Hz","700Hz"
    ],
    Quiz16:[
        "450Hz","500Hz","550Hz","600Hz","650Hz","700Hz"
    ],
    Quiz17:[
        "450Hz","500Hz","550Hz","600Hz","650Hz","700Hz"
    ],
    Quiz18:[
        "450Hz","500Hz","550Hz","600Hz","650Hz","700Hz"
    ],
    Quiz19:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz20:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz21:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz22:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz23:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz24:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz25:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz26:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz27:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz28:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz29:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz30:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz31:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz32:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz33:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz34:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz35:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz36:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz37:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz38:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz39:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    Quiz40:[
        "750Hz","1KHz","1.25KHz","1.5KHz","1.75KHz","2KHz"
    ],
    //มาเพิ่มตรงนี้ต่อ
}
let countQuiz = 0

const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const stopBtn = document.getElementById('stop')

let seconds=(minInput.valueAsNumber*60)+secInput.valueAsNumber
let step=1

setQuizBuyton()

minInput.addEventListener('input',({target:{value}})=>{
  seconds=(+value*60) + (+secInput.value)
  min.innerText=Math.floor(seconds/60).toString().padStart(2,'0')
  sec.innerText=(seconds%60).toString().padStart(2,'0')
})
secInput.addEventListener('input',({target:{value}})=>{
  seconds=(+minInput.value*60) + (+value)
  min.innerText=Math.floor(seconds/60).toString().padStart(2,'0')
  sec.innerText=(+value%60).toString().padStart(2,'0')
})

min.innerText=Math.floor(seconds/60).toString().padStart(2,'0')
sec.innerText=(seconds%60).toString().padStart(2,'0')

function initTimer(step=1){
  let intervalId=null;
  function startTimer(){
    if(!intervalId){
      intervalId=setInterval(()=>{
        seconds-=step
        min.innerText=Math.floor(seconds/60).toString().padStart(2,'0')
        sec.innerText=(seconds%60).toString().padStart(2,'0')
        if(seconds===0)stopTimer()
      },1000)
    }
  }

  function pauseTimer(){
    if(!intervalId)startTimer()
    else{    
      clearInterval(intervalId)
      intervalId=null
    }
  }

  function stopTimer(){
    clearInterval(intervalId)
    intervalId=null
    seconds=(minInput.valueAsNumber*60)+secInput.valueAsNumber
    min.innerText=Math.floor(seconds/60).toString().padStart(2,'0')
    sec.innerText=(seconds%60).toString().padStart(2,'0')
    startBtn.removeAttribute('disabled')
    pauseBtn.setAttribute('disabled',true)
    stopBtn.setAttribute('disabled',true)
    alert("คะแนนของคุณ "+localStorage.score +"/ 10")
    //เพิ่ม link ไปหน้าที่จะไป
  }

  return {startTimer,pauseTimer,stopTimer}
}

const timerObj=initTimer(step);

startBtn.addEventListener('click',()=>{
  startQuiz()
})
stopBtn.addEventListener('click',()=>{
  timerObj.stopTimer()
  minInput.style.display='block'
  secInput.style.display='block'
})

function setQuizBuyton (){
    let quiz = document.getElementById('quiz').innerHTML
    let nums = [1,2,3,4,5,6]
    for(let i=0;i<6;i++)
    {
        let rand = Math.floor(Math.random() * nums.length)
        document.getElementById('c'+(i+1)).innerHTML = mapQiuzAns[quiz][nums[rand]-1]
        document.getElementById('c'+(i+1)).style.backgroundColor = "white"
        nums.splice(rand,1)
    }
}

c1.addEventListener('click',()=>{
    const ans = document.getElementById('ans').innerHTML
    c1.style.backgroundColor = "gray"
    if(ans == c1.innerHTML)
    {
        localStorage.score++
    }
})

c2.addEventListener('click',()=>{
    const ans = document.getElementById('ans').innerHTML
    c2.style.backgroundColor = "gray"
    if(ans == c2.innerHTML)
    {
        localStorage.score++
    }
})
c3.addEventListener('click',()=>{
    const ans = document.getElementById('ans').innerHTML
    c3.style.backgroundColor = "gray"
    if(ans == c3.innerHTML)
    {
        localStorage.score++
    }
})
c4.addEventListener('click',()=>{
    const ans = document.getElementById('ans').innerHTML
    c4.style.backgroundColor = "gray"
    if(ans == c4.innerHTML)
    {
        localStorage.score++
    }
})
c5.addEventListener('click',()=>{
    const ans = document.getElementById('ans').innerHTML
    c5.style.backgroundColor = "gray"
    if(ans == c5.innerHTML)
    {
        localStorage.score++
    }
})
c6.addEventListener('click',()=>{
    const ans = document.getElementById('ans').innerHTML
    c6.style.backgroundColor = "gray"
    if(ans == c6.innerHTML)
    {
        localStorage.score++
    }
})
document.getElementById('quiz').addEventListener('DOMSubtreeModified',()=>{
    if(countQuiz == 10)
    {
        alert("คะแนนของคุณ "+localStorage.score +"/ 10")
        //เพิ่ม link ไปหน้าที่จะไป
    }
    else
    {
        countQuiz++
        setQuizBuyton ()
    }
})
function startQuiz()
{
  startBtn.setAttribute('disabled',true)
  pauseBtn.removeAttribute('disabled')
  stopBtn.removeAttribute('disabled')
  c1.removeAttribute('disabled')
  c2.removeAttribute('disabled')
  c3.removeAttribute('disabled')
  c4.removeAttribute('disabled')
  c5.removeAttribute('disabled')
  c6.removeAttribute('disabled')
  timerObj.startTimer()
  minInput.style.display='none'
  secInput.style.display='none'
}

