const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.querySelector('input')
 
  document.body.addEventListener('keydown', function(e) {
    if (e.which === 71) {
      return e.preventDefault()
    }
  })

}