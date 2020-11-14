const pressedKeys = [];
const secretCode = 'qwe';
window.addEventListener('keyup', (e) => {
    console.log(e.key)
    pressedKeys.push(e.key);
    pressedKeys.splice(secretCode.length - 1, pressedKeys.length - secretCode.length);
    if (pressedKeys.join('').includes(secretCode)) {
        document.body.innerHTML += '<h2> (✿◕‿◕✿) </h2>';
        console.log('Hush')
    }
})
