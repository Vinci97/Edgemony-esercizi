import myJson from "./mock.json" assert {type: "json"}
const cE = (type) => document.createElement(type);
const qS = (element)=> document.querySelector(element);
const bodyEl = qS("body");
const timeEl= cE("h1")
const btnStopEl = cE("button")
btnStopEl.textContent= "stop";
bodyEl.append(timeEl,btnStopEl)

let timeout = 10;
const interval=setInterval(() => {
  if (timeout === 0) {
    bodyEl.style.backgroundColor = "rgb(0, 255, 234)";
    timeEl.remove();
  } else {
    timeout--;
    timeEl.textContent = timeout;
  }
}, 1000);

btnStopEl.addEventListener("click", () =>clearInterval(interval))



const bloodGroupBarGen = (value, bloodGroup) => {
    const wrapper = cE("div");
    const textEl = cE("h4");
    const statusEl = cE("div");

    wrapper.className = "bloodGroup-status-bar";
    textEl.textContent = value;
    statusEl.className = "bloodGroup-status-bar__status";
    statusEl.style.height = `${bloodGroup * 10}px`;

    wrapper.append(textEl,statusEl)
    return wrapper;
} 
  const wrapper = cE("div")
  wrapper.className=("wrapper")

 const bloodGroupUs= myJson.users.map((item)=> item.bloodGroup);
 