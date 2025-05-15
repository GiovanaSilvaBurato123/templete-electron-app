const { app, BrowserWindow } = require('electron');

function createWindonw() {
    const window = new BrowserWindow({
        width: 800,
        heigth: 600,
    })

    window.loadFile('src/pages/index.html')
}

app.whenReady().then(() => {
    createWindonw()
})



