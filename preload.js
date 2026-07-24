const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {

    openVideo: () => ipcRenderer.invoke("open-video")

});
