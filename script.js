const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', function(event){
  const input = event.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  if(blurValue<0)
  {
    alert("Password Strength is good")
  }
  background.style.filter = `blur(${blurValue}px)`
})
