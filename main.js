const { app, BrowserWindow, Tray} = require('electron');
let win;
function createWindow() {
    
    win = new BrowserWindow({ show: false, fullscreen: true, icon: 'public/icone.png'});
    win.loadFile('src/index.html');
    win.setMenu(null);
    //win.loadURL(`http://localhost:4200`);
    win.maximize();
    win.show();
    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});