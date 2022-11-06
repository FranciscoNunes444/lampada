const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lampada')


function lampOn() {
  if (!isLampBroken()) {
    lampada.src = './img/ligada.jpg'
  }

}

function lampOff() {
  if (!isLampBroken()) {
    lampada.src = './img/desligada.jpg'
  }

}

function lampBroken() {
  lampada.src = './img/quebrada.jpg'
}

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1
}


turnOff.addEventListener('click', lampOff)
turnOn.addEventListener('click', lampOn)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)