const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

let win;

function createWindow() {

    win = new BrowserWindow({

        width: 1400,

        height: 900,

        minWidth: 1000,

        minHeight: 700,

        autoHideMenuBar: true,

        webPreferences: {

            preload: path.join(__dirname, "preload.js"),

            contextIsolation: true,

            nodeIntegration: false

        }

    });

    win.loadFile("src/index.html");
}

app.whenReady().then(createWindow);

ipcMain.handle("open-video", async () => {

    const result = await dialog.showOpenDialog({

        properties: ["openFile"],

        filters: [

            {

                name: "Videos",

                extensions: [

                    "mp4",

                    "mkv",

                    "mov",

                    "avi",

                    "webm"

                ]

            }

        ]

    });

    return result.filePaths[0];

});
