function iconsAtTwoSizes(iconID, size) {
    const iconSizes = [16, 32, 48, 64, 128, 256, 512];

    if (!iconSizes.includes(size)) {
        console.error("Invalid size. Using the default (16x16).");
        size = 16;
    }

    const iconPaths = {
        "0HH1": {
            16: "./A/System64/Images/Icons/0HH1-16x16.png",
            32: "./A/System64/Images/Icons/0HH1-32x32.png",
            48: "./A/System64/Images/Icons/0HH1-48x48.png"
        },
        "0HN0": {
            16: "./A/System64/Images/Icons/0HN0-16x16.png",
            32: "./A/System64/Images/Icons/0HN0-32x32.png",
            48: "./A/System64/Images/Icons/0HN0-48x48.png"
        },
        "2048": {
            16: "./A/System64/Images/Icons/2048-16x16.png",
            256: "./A/System64/Images/Icons/2048-256x256.png",
            32: "./A/System64/Images/Icons/2048-32x32.png",
            48: "./A/System64/Images/Icons/2048-48x48.png"
        },
        "2D": {
            16: "./A/System64/Images/Icons/2D-16x16.png",
            32: "./A/System64/Images/Icons/2D-32x32.png"
        },
        "3d-mode": {
            32: "./A/System64/Images/Icons/3d-mode-32x32.png"
        },
        "4": {
            16: "./A/System64/Images/Icons/4-16x16.png",
            32: "./A/System64/Images/Icons/4-32x32.png",
            512: "./A/System64/Images/Icons/4-512x512.png"
        },
        64: {
            16: "./A/System64/Images/Icons/64-16x16.png",
            32: "./A/System64/Images/Icons/64-32x32.png",
            48: "./A/System64/Images/Icons/64-48x48.png"
        },
        "aaronos": {
            16: "./A/System64/Images/Icons/aaronos-16x16.png",
            32: "./A/System64/Images/Icons/aaronos-32x32.png",
            48: "./A/System64/Images/Icons/aaronos-48x48.png"
        },
        "About": {
            32: "./A/System64/Images/Icons/About-32x32.png",
            48: "./A/System64/Images/Icons/About-48x48.png"
        },
        "AcidBox": {
            16: "./A/System64/Images/Icons/AcidBox-16x16.png",
            32: "./A/System64/Images/Icons/AcidBox-32x32.png",
            48: "./A/System64/Images/Icons/AcidBox-48x48.png",
            512: "./A/System64/Images/Icons/AcidBox-512x512.png"
        },
        "audio-nope": {
            16: "./A/System64/Images/Icons/audio-nope-16x16.png"
        },
        "audio-okay": {
            16: "./A/System64/Images/Icons/audio-okay-16x16.png"
        },
        "Baldi": {
            16: "./A/System64/Images/Icons/Baldi-16x16.png",
            32: "./A/System64/Images/Icons/Baldi-32x32.png",
            48: "./A/System64/Images/Icons/Baldi-48x48.png",
            64: "./A/System64/Images/Icons/Baldi-64x64.png"
        },
        "Batman": {
            16: "./A/System64/Images/Icons/Batman-16x16.png",
            32: "./A/System64/Images/Icons/Batman-32x32.png",
            48: "./A/System64/Images/Icons/Batman-48x48.png",
            512: "./A/System64/Images/Icons/Batman-512x512.png"
        },
        "Battery": {
            16: "./A/System64/Images/Icons/Battery-16x16.png",
            32: "./A/System64/Images/Icons/Battery-32x32.png",
            512: "./A/System64/Images/Icons/Battery-512x512.png"
        },
        "Box": {
            128: "./A/System64/Images/Icons/Box-128x128.png",
            16: "./A/System64/Images/Icons/Box-16x16.png",
            32: "./A/System64/Images/Icons/Box-32x32.png"
        },
        "Brain": {
            16: "./A/System64/Images/Icons/Brain-16x16.png",
            32: "./A/System64/Images/Icons/Brain-32x32.png"
        },
        "Brutal": {
            16: "./A/System64/Images/Icons/Brutal-16x16.png",
            32: "./A/System64/Images/Icons/Brutal-32x32.png"
        },
        "BTSX": {
            16: "./A/System64/Images/Icons/BTSX-16x16.png",
            32: "./A/System64/Images/Icons/BTSX-32x32.png"
        },
        "Button": {
            16: "./A/System64/Images/Icons/Button-16x16.png",
            32: "./A/System64/Images/Icons/Button-32x32.png"
        },
        "calculator": {
            16: "./A/System64/Images/Icons/calculator-16x16.png",
            32: "./A/System64/Images/Icons/calculator-32x32.png"
        },
        "Calculator": {
            48: "./A/System64/Images/Icons/Calculator-48x48.png"
        },
        "Castle": {
            16: "./A/System64/Images/Icons/Castle-16x16.png",
            32: "./A/System64/Images/Icons/Castle-32x32.png"
        },
        "Chat": {
            16: "./A/System64/Images/Icons/Chat-16x16.png",
            32: "./A/System64/Images/Icons/Chat-32x32.png",
            48: "./A/System64/Images/Icons/Chat-48x48.png"
        },
        "Chex": {
            16: "./A/System64/Images/Icons/Chex-16x16.png",
            32: "./A/System64/Images/Icons/Chex-32x32.png"
        },
        "Chex2": {
            16: "./A/System64/Images/Icons/Chex2-16x16.png",
            32: "./A/System64/Images/Icons/Chex2-32x32.png"
        },
        "Chex3": {
            16: "./A/System64/Images/Icons/Chex3-16x16.png",
            32: "./A/System64/Images/Icons/Chex3-32x32.png"
        },
        "chm": {
            16: "./A/System64/Images/Icons/chm-16x16.png",
            32: "./A/System64/Images/Icons/chm-32x32.png",
            48: "./A/System64/Images/Icons/chm-48x48.png"
        },
        "Clock": {
            16: "./A/System64/Images/Icons/Clock-16x16.png",
            32: "./A/System64/Images/Icons/Clock-32x32.png"
        },
        "clouddesk": {
            16: "./A/System64/Images/Icons/clouddesk-16x16.png"
        },
        "Contranoid": {
            16: "./A/System64/Images/Icons/Contranoid-16x16.png",
            32: "./A/System64/Images/Icons/Contranoid-32x32.png",
            48: "./A/System64/Images/Icons/Contranoid-48x48.png"
        },
        "Contranoid-Dell-7480": {
            48: "./A/System64/Images/Icons/Contranoid-48x48-Dell-7480.png"
        },
        "convert-audio": {
            16: "./A/System64/Images/Icons/convert-audio-16x16.png",
            32: "./A/System64/Images/Icons/convert-audio-32x32.png"
        },
        "convert-video": {
            16: "./A/System64/Images/Icons/convert-video-16x16.png",
            32: "./A/System64/Images/Icons/convert-video-32x32.png"
        },
        "Cookie": {
            16: "./A/System64/Images/Icons/Cookie-16x16.png",
            32: "./A/System64/Images/Icons/Cookie-32x32.png",
            48: "./A/System64/Images/Icons/Cookie-48x48.png"
        },
        "Dario": {
            16: "./A/System64/Images/Icons/Dario-16x16.png",
            32: "./A/System64/Images/Icons/Dario-32x32.png"
        },
        "desktop": {
            16: "./A/System64/Images/Icons/desktop-16x16.png",
            32: "./A/System64/Images/Icons/desktop-32x32.png",
            48: "./A/System64/Images/Icons/desktop-48x48.png"
        },
        "Dino": {
            16: "./A/System64/Images/Icons/Dino-16x16.png",
            32: "./A/System64/Images/Icons/Dino-32x32.png",
            48: "./A/System64/Images/Icons/Dino-48x48.png"
        },
        "doc": {
            16: "./A/System64/Images/Icons/doc-16x16.png",
            32: "./A/System64/Images/Icons/doc-32x32.png"
        },
        "document": {
            16: "./A/System64/Images/Icons/document-16x16.png",
            32: "./A/System64/Images/Icons/document-32x32.png",
            48: "./A/System64/Images/Icons/document-48x48.png"
        },
        "Doom": {
            16: "./A/System64/Images/Icons/Doom-16x16.png",
            32: "./A/System64/Images/Icons/Doom-32x32.png",
            48: "./A/System64/Images/Icons/Doom-48x48.png"
        },
        "Doom2": {
            16: "./A/System64/Images/Icons/Doom2-16x16.png",
            32: "./A/System64/Images/Icons/Doom2-32x32.png",
            48: "./A/System64/Images/Icons/Doom2-48x48.png"
        },
        "doomguy": {
            16: "./A/System64/Images/Icons/doomguy-16x16.gif"
        },
        "Drift": {
            128: "./A/System64/Images/Icons/Drift-128x128.png",
            16: "./A/System64/Images/Icons/Drift-16x16.png",
            256: "./A/System64/Images/Icons/Drift-256x256.png",
            32: "./A/System64/Images/Icons/Drift-32x32.png",
            512: "./A/System64/Images/Icons/Drift-512x512.png",
            64: "./A/System64/Images/Icons/Drift-64x64.png"
        },
        "Duke": {
            16: "./A/System64/Images/Icons/Duke-16x16.png",
            32: "./A/System64/Images/Icons/Duke-32x32.png",
            48: "./A/System64/Images/Icons/Duke-48x48.png"
        },
        "emuos": {
            16: "./A/System64/Images/Icons/emuos-16x16.png",
            32: "./A/System64/Images/Icons/emuos-32x32.png",
            48: "./A/System64/Images/Icons/emuos-48x48.png"
        },
        "error-8bpp": {
            16: "./A/System64/Images/Icons/error-16x16-8bpp.png",
            32: "./A/System64/Images/Icons/error-32x32-8bpp.png"
        },
        "error": {
            16: "./A/System64/Images/Icons/error-16x16.png",
            32: "./A/System64/Images/Icons/error-32x32.png",
            48: "./A/System64/Images/Icons/error-48x48.png"
        },
        "error-1bpp": {
            32: "./A/System64/Images/Icons/error-32x32-1bpp.png"
        },
        "favorites": {
            16: "./A/System64/Images/Icons/favorites-16x16.png",
            32: "./A/System64/Images/Icons/favorites-32x32.png",
            48: "./A/System64/Images/Icons/favorites-48x48.png"
        },
        "favorites-folder": {
            16: "./A/System64/Images/Icons/favorites-folder-16x16.png",
            32: "./A/System64/Images/Icons/favorites-folder-32x32.png",
            48: "./A/System64/Images/Icons/favorites-folder-48x48.png"
        },
        "FDoom": {
            16: "./A/System64/Images/Icons/FDoom-16x16.png",
            32: "./A/System64/Images/Icons/FDoom-32x32.png"
        },
        "file": {
            16: "./A/System64/Images/Icons/file-16x16.png",
            32: "./A/System64/Images/Icons/file-32x32.png",
            48: "./A/System64/Images/Icons/file-48x48.png"
        },
        "find-computer": {
            16: "./A/System64/Images/Icons/find-computer-16x16.png",
            32: "./A/System64/Images/Icons/find-computer-32x32.png"
        },
        "find-file": {
            16: "./A/System64/Images/Icons/find-file-16x16.png",
            32: "./A/System64/Images/Icons/find-file-32x32.png",
            48: "./A/System64/Images/Icons/find-file-48x48.png"
        },
        "find-folder": {
            16: "./A/System64/Images/Icons/find-folder-16x16.png",
            32: "./A/System64/Images/Icons/find-folder-32x32.png",
            48: "./A/System64/Images/Icons/find-folder-48x48.png"
        },
        "folder": {
            16: "./A/System64/Images/Icons/folder-16x16.png",
            32: "./A/System64/Images/Icons/folder-32x32.png",
            48: "./A/System64/Images/Icons/folder-48x48.png"
        },
        "folder-open": {
            16: "./A/System64/Images/Icons/folder-open-16x16.png",
            32: "./A/System64/Images/Icons/folder-open-32x32.png",
            48: "./A/System64/Images/Icons/folder-open-48x48.png"
        },
        "fonts-folder": {
            16: "./A/System64/Images/Icons/fonts-folder-16x16.png",
            32: "./A/System64/Images/Icons/fonts-folder-32x32.png",
            48: "./A/System64/Images/Icons/fonts-folder-48x48.png"
        },
        "FPS": {
            128: "./A/System64/Images/Icons/FPS-128x128.png",
            16: "./A/System64/Images/Icons/FPS-16x16.png",
            256: "./A/System64/Images/Icons/FPS-256x256.png",
            32: "./A/System64/Images/Icons/FPS-32x32.png",
            512: "./A/System64/Images/Icons/FPS-512x512.png",
            64: "./A/System64/Images/Icons/FPS-64x64.png"
        },
        "FreeDoom": {
            16: "./A/System64/Images/Icons/FreeDoom-16x16.png",
            32: "./A/System64/Images/Icons/FreeDoom-32x32.png"
        },
        "friend": {
            16: "./A/System64/Images/Icons/friend-16x16.png"
        },
        "Funky": {
            128: "./A/System64/Images/Icons/Funky-128x128.png",
            16: "./A/System64/Images/Icons/Funky-16x16.png",
            32: "./A/System64/Images/Icons/Funky-32x32.png",
            48: "./A/System64/Images/Icons/Funky-48x48.png"
        },
        "Funky-Grey": {
            32: "./A/System64/Images/Icons/Funky-Grey-32x32.png"
        },
        "Gore": {
            16: "./A/System64/Images/Icons/Gore-16x16.png",
            32: "./A/System64/Images/Icons/Gore-32x32.png"
        },
        "GTA": {
            16: "./A/System64/Images/Icons/GTA-16x16.png",
            32: "./A/System64/Images/Icons/GTA-32x32.png",
            48: "./A/System64/Images/Icons/GTA-48x48.png"
        },
        "hard-disk-drive-higher-color": {
            16: "./A/System64/Images/Icons/hard-disk-drive-16x16-higher-color.png",
            32: "./A/System64/Images/Icons/hard-disk-drive-32x32-higher-color.png",
            48: "./A/System64/Images/Icons/hard-disk-drive-48x48-higher-color.png"
        },
        "hard-disk-drive": {
            16: "./A/System64/Images/Icons/hard-disk-drive-16x16.png",
            32: "./A/System64/Images/Icons/hard-disk-drive-32x32.png",
            48: "./A/System64/Images/Icons/hard-disk-drive-48x48.png"
        },
        "help": {
            16: "./A/System64/Images/Icons/help-16x16.png",
            32: "./A/System64/Images/Icons/help-32x32.png",
            48: "./A/System64/Images/Icons/help-48x48.png"
        },
        "Heretic": {
            16: "./A/System64/Images/Icons/Heretic-16x16.png",
            32: "./A/System64/Images/Icons/Heretic-32x32.png"
        },
        "Heretic2": {
            16: "./A/System64/Images/Icons/Heretic2-16x16.png",
            32: "./A/System64/Images/Icons/Heretic2-32x32.png"
        },
        "Hex": {
            128: "./A/System64/Images/Icons/Hex-128x128.png",
            16: "./A/System64/Images/Icons/Hex-16x16.png",
            256: "./A/System64/Images/Icons/Hex-256x256.png",
            32: "./A/System64/Images/Icons/Hex-32x32.png",
            64: "./A/System64/Images/Icons/Hex-64x64.png"
        },
        "Hexen": {
            16: "./A/System64/Images/Icons/Hexen-16x16.png",
            32: "./A/System64/Images/Icons/Hexen-32x32.png"
        },
        "Hextris": {
            16: "./A/System64/Images/Icons/Hextris-16x16.png",
            32: "./A/System64/Images/Icons/Hextris-32x32.png",
            48: "./A/System64/Images/Icons/Hextris-48x48.png"
        },
        "html": {
            16: "./A/System64/Images/Icons/html-16x16.png",
            32: "./A/System64/Images/Icons/html-32x32.png",
            48: "./A/System64/Images/Icons/html-48x48.png"
        },
        "Ice": {
            16: "./A/System64/Images/Icons/Ice-16x16.png",
            32: "./A/System64/Images/Icons/Ice-32x32.png"
        },
        "image-gif": {
            16: "./A/System64/Images/Icons/image-gif-16x16.png",
            32: "./A/System64/Images/Icons/image-gif-32x32.png"
        },
        "image-jpeg": {
            16: "./A/System64/Images/Icons/image-jpeg-16x16.png",
            32: "./A/System64/Images/Icons/image-jpeg-32x32.png"
        },
        "image-kodak": {
            16: "./A/System64/Images/Icons/image-kodak-16x16.png",
            32: "./A/System64/Images/Icons/image-kodak-32x32.png"
        },
        "image-old-gif": {
            16: "./A/System64/Images/Icons/image-old-gif-16x16.png",
            32: "./A/System64/Images/Icons/image-old-gif-32x32.png"
        },
        "image-old-jpeg": {
            16: "./A/System64/Images/Icons/image-old-jpeg-16x16.png",
            32: "./A/System64/Images/Icons/image-old-jpeg-32x32.png"
        },
        "image-other": {
            16: "./A/System64/Images/Icons/image-other-16x16.png",
            32: "./A/System64/Images/Icons/image-other-32x32.png"
        },
        "image-png": {
            16: "./A/System64/Images/Icons/image-png-16x16.png",
            32: "./A/System64/Images/Icons/image-png-32x32.png",
            48: "./A/System64/Images/Icons/image-png-48x48.png"
        },
        "image-wmf": {
            16: "./A/System64/Images/Icons/image-wmf-16x16.png",
            32: "./A/System64/Images/Icons/image-wmf-32x32.png"
        },
        "info-8bpp": {
            16: "./A/System64/Images/Icons/info-16x16-8bpp.png",
            32: "./A/System64/Images/Icons/info-32x32-8bpp.png"
        },
        "info": {
            16: "./A/System64/Images/Icons/info-16x16.png",
            32: "./A/System64/Images/Icons/info-32x32.png"
        },
        "info-1bpp": {
            32: "./A/System64/Images/Icons/info-32x32-1bpp.png"
        },
        "internet-explorer": {
            16: "./A/System64/Images/Icons/internet-explorer-16x16.png",
            32: "./A/System64/Images/Icons/internet-explorer-32x32.png",
            48: "./A/System64/Images/Icons/internet-explorer-48x48.png"
        },
        "internet-folder": {
            16: "./A/System64/Images/Icons/internet-folder-16x16.png",
            32: "./A/System64/Images/Icons/internet-folder-32x32.png",
            48: "./A/System64/Images/Icons/internet-folder-48x48.png"
        },
        "joystick": {
            16: "./A/System64/Images/Icons/joystick-16x16.png",
            32: "./A/System64/Images/Icons/joystick-32x32.png"
        },
        "kodak-imaging": {
            16: "./A/System64/Images/Icons/kodak-imaging-16x16.png",
            32: "./A/System64/Images/Icons/kodak-imaging-32x32.png"
        },
        "kodak-imaging-file": {
            16: "./A/System64/Images/Icons/kodak-imaging-file-16x16.png",
            32: "./A/System64/Images/Icons/kodak-imaging-file-32x32.png"
        },
        "logoff": {
            16: "./A/System64/Images/Icons/logoff-16x16.png",
            32: "./A/System64/Images/Icons/logoff-32x32.png",
            48: "./A/System64/Images/Icons/logoff-48x48.png"
        },
        "mail": {
            16: "./A/System64/Images/Icons/mail-16x16.png",
            32: "./A/System64/Images/Icons/mail-32x32.png"
        },
        "Mario": {
            16: "./A/System64/Images/Icons/Mario-16x16.png",
            32: "./A/System64/Images/Icons/Mario-32x32.png",
            48: "./A/System64/Images/Icons/Mario-48x48.png"
        },
        "Master": {
            16: "./A/System64/Images/Icons/Master-16x16.png",
            32: "./A/System64/Images/Icons/Master-32x32.png"
        },
        "media-player": {
            16: "./A/System64/Images/Icons/media-player-16x16.png",
            32: "./A/System64/Images/Icons/media-player-32x32.png"
        },
        "microphone": {
            16: "./A/System64/Images/Icons/microphone-16x16.png",
            32: "./A/System64/Images/Icons/microphone-32x32.png"
        },
        "microphone-volume-control": {
            32: "./A/System64/Images/Icons/microphone-volume-control-32x32.png"
        },
        "Minecraft": {
            16: "./A/System64/Images/Icons/Minecraft-16x16.png",
            32: "./A/System64/Images/Icons/Minecraft-32x32.png",
            48: "./A/System64/Images/Icons/Minecraft-48x48.png"
        },
        "minesweeper": {
            16: "./A/System64/Images/Icons/minesweeper-16x16.png",
            32: "./A/System64/Images/Icons/minesweeper-32x32.png",
            48: "./A/System64/Images/Icons/minesweeper-48x48.png"
        },
        "msdos": {
            16: "./A/System64/Images/Icons/msdos-16x16.png",
            32: "./A/System64/Images/Icons/msdos-32x32.png",
            48: "./A/System64/Images/Icons/msdos-48x48.png"
        },
        "my-computer": {
            16: "./A/System64/Images/Icons/my-computer-16x16.png",
            32: "./A/System64/Images/Icons/my-computer-32x32.png",
            48: "./A/System64/Images/Icons/my-computer-48x48.png"
        },
        "my-documents": {
            16: "./A/System64/Images/Icons/my-documents-16x16.png",
            32: "./A/System64/Images/Icons/my-documents-32x32.png",
            48: "./A/System64/Images/Icons/my-documents-48x48.png"
        },
        "my-documents-folder": {
            16: "./A/System64/Images/Icons/my-documents-folder-16x16.png",
            32: "./A/System64/Images/Icons/my-documents-folder-32x32.png",
            48: "./A/System64/Images/Icons/my-documents-folder-48x48.png"
        },
        "network": {
            16: "./A/System64/Images/Icons/network-16x16.png",
            32: "./A/System64/Images/Icons/network-32x32.png",
            48: "./A/System64/Images/Icons/network-48x48.png"
        },
        "news": {
            16: "./A/System64/Images/Icons/news-16x16.png",
            32: "./A/System64/Images/Icons/news-32x32.png"
        },
        "NoGame": {
            16: "./A/System64/Images/Icons/NoGame-16x16.png",
            32: "./A/System64/Images/Icons/NoGame-32x32.png"
        },
        "notepad": {
            16: "./A/System64/Images/Icons/notepad-16x16.png",
            32: "./A/System64/Images/Icons/notepad-32x32.png",
            48: "./A/System64/Images/Icons/notepad-48x48.png"
        },
        "notepad-file": {
            16: "./A/System64/Images/Icons/notepad-file-16x16.png",
            32: "./A/System64/Images/Icons/notepad-file-32x32.png",
            48: "./A/System64/Images/Icons/notepad-file-48x48.png"
        },
        "nuke": {
            32: "./A/System64/Images/Icons/nuke-32x32.png"
        },
        "offline-8bpp": {
            32: "./A/System64/Images/Icons/offline-32x32-8bpp.png"
        },
        "offline": {
            32: "./A/System64/Images/Icons/offline-32x32.png"
        },
        "os-js": {
            16: "./A/System64/Images/Icons/os-js-16x16.png",
            32: "./A/System64/Images/Icons/os-js-32x32.png",
            48: "./A/System64/Images/Icons/os-js-48x48.png"
        },
        "outlook-express": {
            16: "./A/System64/Images/Icons/outlook-express-16x16.png",
            32: "./A/System64/Images/Icons/outlook-express-32x32.png",
            48: "./A/System64/Images/Icons/outlook-express-48x48.png"
        },
        "Pacman": {
            16: "./A/System64/Images/Icons/Pacman-16x16.png",
            32: "./A/System64/Images/Icons/Pacman-32x32.png"
        },
        "paint": {
            16: "./A/System64/Images/Icons/paint-16x16.png",
            32: "./A/System64/Images/Icons/paint-32x32.png",
            48: "./A/System64/Images/Icons/paint-48x48.png"
        },
        "paint-file-higher-color": {
            16: "./A/System64/Images/Icons/paint-file-16x16-higher-color.png",
            32: "./A/System64/Images/Icons/paint-file-32x32-higher-color.png",
            48: "./A/System64/Images/Icons/paint-file-48x48-higher-color.png"
        },
        "paint-file": {
            16: "./A/System64/Images/Icons/paint-file-16x16.png",
            32: "./A/System64/Images/Icons/paint-file-32x32.png",
            48: "./A/System64/Images/Icons/paint-file-48x48.png"
        },
        "pinball": {
            16: "./A/System64/Images/Icons/pinball-16x16.png",
            32: "./A/System64/Images/Icons/pinball-32x32.png",
            48: "./A/System64/Images/Icons/pinball-48x48.png"
        },
        "pipes": {
            16: "./A/System64/Images/Icons/pipes-16x16.png",
            32: "./A/System64/Images/Icons/pipes-32x32.png",
            48: "./A/System64/Images/Icons/pipes-48x48.png"
        },
        "Plutonia": {
            16: "./A/System64/Images/Icons/Plutonia-16x16.png",
            32: "./A/System64/Images/Icons/Plutonia-32x32.png"
        },
        "Plutonia2": {
            16: "./A/System64/Images/Icons/Plutonia2-16x16.png",
            32: "./A/System64/Images/Icons/Plutonia2-32x32.png"
        },
        "Pong": {
            16: "./A/System64/Images/Icons/Pong-16x16.png",
            32: "./A/System64/Images/Icons/Pong-32x32.png"
        },
        "printer": {
            16: "./A/System64/Images/Icons/printer-16x16.png",
            32: "./A/System64/Images/Icons/printer-32x32.png",
            48: "./A/System64/Images/Icons/printer-48x48.png"
        },
        "printers-folder": {
            16: "./A/System64/Images/Icons/printers-folder-16x16.png",
            32: "./A/System64/Images/Icons/printers-folder-32x32.png",
            48: "./A/System64/Images/Icons/printers-folder-48x48.png"
        },
        "programs": {
            16: "./A/System64/Images/Icons/programs-16x16.png",
            32: "./A/System64/Images/Icons/programs-32x32.png",
            48: "./A/System64/Images/Icons/programs-48x48.png"
        },
        "programs-folder": {
            16: "./A/System64/Images/Icons/programs-folder-16x16.png",
            32: "./A/System64/Images/Icons/programs-folder-32x32.png",
            48: "./A/System64/Images/Icons/programs-folder-48x48.png"
        },
        "Python": {
            16: "./A/System64/Images/Icons/Python-16x16.png",
            32: "./A/System64/Images/Icons/Python-32x32.png",
            48: "./A/System64/Images/Icons/Python-48x48.png"
        },
        "Q1M": {
            128: "./A/System64/Images/Icons/Q1M-128x128.png",
            16: "./A/System64/Images/Icons/Q1M-16x16.png",
            256: "./A/System64/Images/Icons/Q1M-256x256.png",
            32: "./A/System64/Images/Icons/Q1M-32x32.png",
            512: "./A/System64/Images/Icons/Q1M-512x512.png",
            64: "./A/System64/Images/Icons/Q1M-64x64.png"
        },
        "Quake": {
            16: "./A/System64/Images/Icons/Quake-16x16.png",
            32: "./A/System64/Images/Icons/Quake-32x32.png",
            48: "./A/System64/Images/Icons/Quake-48x48.png"
        },
        "Quake2": {
            16: "./A/System64/Images/Icons/Quake2-16x16.png",
            32: "./A/System64/Images/Icons/Quake2-32x32.png",
            48: "./A/System64/Images/Icons/Quake2-48x48.png"
        },
        "Quento": {
            16: "./A/System64/Images/Icons/Quento-16x16.png",
            32: "./A/System64/Images/Icons/Quento-32x32.png",
            48: "./A/System64/Images/Icons/Quento-48x48.png"
        },
        "question-1bpp": {
            32: "./A/System64/Images/Icons/question-32x32-1bpp.png"
        },
        "question-8bpp": {
            32: "./A/System64/Images/Icons/question-32x32-8bpp.png"
        },
        "recycle-bin": {
            16: "./A/System64/Images/Icons/recycle-bin-16x16.png",
            32: "./A/System64/Images/Icons/recycle-bin-32x32.png",
            48: "./A/System64/Images/Icons/recycle-bin-48x48.png"
        },
        "recycle-bin-full": {
            16: "./A/System64/Images/Icons/recycle-bin-full-16x16.png",
            32: "./A/System64/Images/Icons/recycle-bin-full-32x32.png",
            48: "./A/System64/Images/Icons/recycle-bin-full-48x48.png"
        },
        "recycle-bin-stuff": {
            32: "./A/System64/Images/Icons/recycle-bin-stuff-32x32.png"
        },
        "Rekkr": {
            16: "./A/System64/Images/Icons/Rekkr-16x16.png",
            32: "./A/System64/Images/Icons/Rekkr-32x32.png"
        },
        "Rioluvania": {
            128: "./A/System64/Images/Icons/Rioluvania-128x128.png",
            16: "./A/System64/Images/Icons/Rioluvania-16x16.png",
            256: "./A/System64/Images/Icons/Rioluvania-256x256.png",
            32: "./A/System64/Images/Icons/Rioluvania-32x32.png"
        },
        "Rocket": {
            16: "./A/System64/Images/Icons/Rocket-16x16.png",
            32: "./A/System64/Images/Icons/Rocket-32x32.png",
            48: "./A/System64/Images/Icons/Rocket-48x48.png"
        },
        "run": {
            16: "./A/System64/Images/Icons/run-16x16.png",
            32: "./A/System64/Images/Icons/run-32x32.png",
            48: "./A/System64/Images/Icons/run-48x48.png"
        },
        "Sans": {
            16: "./A/System64/Images/Icons/Sans-16x16.png",
            32: "./A/System64/Images/Icons/Sans-32x32.png"
        },
        "School": {
            16: "./A/System64/Images/Icons/School-16x16.png",
            32: "./A/System64/Images/Icons/School-32x32.png"
        },
        "settings": {
            16: "./A/System64/Images/Icons/settings-16x16.png",
            32: "./A/System64/Images/Icons/settings-32x32.png",
            48: "./A/System64/Images/Icons/settings-48x48.png"
        },
        "shortcut": {
            16: "./A/System64/Images/Icons/shortcut-16x16.png",
            32: "./A/System64/Images/Icons/shortcut-32x32.png"
        },
        "shutdown": {
            16: "./A/System64/Images/Icons/shutdown-16x16.png",
            32: "./A/System64/Images/Icons/shutdown-32x32.png",
            48: "./A/System64/Images/Icons/shutdown-48x48.png"
        },
        "sleep": {
            16: "./A/System64/Images/Icons/sleep-16x16.png",
            32: "./A/System64/Images/Icons/sleep-32x32.png",
            48: "./A/System64/Images/Icons/sleep-48x48.png"
        },
        "solitaire": {
            16: "./A/System64/Images/Icons/solitaire-16x16.png",
            32: "./A/System64/Images/Icons/solitaire-32x32.png"
        },
        "Solitaire": {
            48: "./A/System64/Images/Icons/Solitaire-48x48.png"
        },
        "sound-higher-color": {
            16: "./A/System64/Images/Icons/sound-16x16-higher-color.png",
            32: "./A/System64/Images/Icons/sound-32x32-higher-color.png"
        },
        "sound": {
            16: "./A/System64/Images/Icons/sound-16x16.png",
            32: "./A/System64/Images/Icons/sound-32x32.png",
            48: "./A/System64/Images/Icons/sound-48x48.png"
        },
        "Space": {
            16: "./A/System64/Images/Icons/Space-16x16.png",
            32: "./A/System64/Images/Icons/Space-32x32.png"
        },
        "speaker": {
            16: "./A/System64/Images/Icons/speaker-16x16.png",
            32: "./A/System64/Images/Icons/speaker-32x32.png",
            48: "./A/System64/Images/Icons/speaker-48x48.png"
        },
        "speaker-volume-control": {
            32: "./A/System64/Images/Icons/speaker-volume-control-32x32.png"
        },
        "Spear": {
            16: "./A/System64/Images/Icons/Spear-16x16.png",
            32: "./A/System64/Images/Icons/Spear-32x32.png"
        },
        "Spelunky": {
            16: "./A/System64/Images/Icons/Spelunky-16x16.png",
            32: "./A/System64/Images/Icons/Spelunky-32x32.png"
        },
        "StarDoom": {
            16: "./A/System64/Images/Icons/StarDoom-16x16.png",
            32: "./A/System64/Images/Icons/StarDoom-32x32.png",
            48: "./A/System64/Images/Icons/StarDoom-48x48.png",
            512: "./A/System64/Images/Icons/StarDoom-512x512.png"
        },
        "start-menu-programs": {
            32: "./A/System64/Images/Icons/start-menu-programs-32x32.png"
        },
        "start-settings": {
            16: "./A/System64/Images/Icons/start-settings-16x16.png",
            32: "./A/System64/Images/Icons/start-settings-32x32.png"
        },
        "Starwars": {
            16: "./A/System64/Images/Icons/Starwars-16x16.png",
            32: "./A/System64/Images/Icons/Starwars-32x32.png"
        },
        "Store": {
            128: "./A/System64/Images/Icons/Store-128x128.png",
            16: "./A/System64/Images/Icons/Store-16x16.png",
            256: "./A/System64/Images/Icons/Store-256x256.png",
            32: "./A/System64/Images/Icons/Store-32x32.png",
            48: "./A/System64/Images/Icons/Store-48x48.png",
            512: "./A/System64/Images/Icons/Store-512x512.png",
            64: "./A/System64/Images/Icons/Store-64x64.png"
        },
        "Strife": {
            16: "./A/System64/Images/Icons/Strife-16x16.png",
            32: "./A/System64/Images/Icons/Strife-32x32.png"
        },
        "Surf": {
            16: "./A/System64/Images/Icons/Surf-16x16.png",
            32: "./A/System64/Images/Icons/Surf-32x32.png"
        },
        "system": {
            16: "./A/System64/Images/Icons/system-16x16.png"
        },
        "task": {
            16: "./A/System64/Images/Icons/task-16x16.png",
            32: "./A/System64/Images/Icons/task-32x32.png"
        },
        "task-scheduler": {
            16: "./A/System64/Images/Icons/task-scheduler-16x16.png"
        },
        "TBOI": {
            16: "./A/System64/Images/Icons/TBOI-16x16.png",
            32: "./A/System64/Images/Icons/TBOI-32x32.png",
            48: "./A/System64/Images/Icons/TBOI-48x48.png"
        },
        "Tetris": {
            16: "./A/System64/Images/Icons/Tetris-16x16.png",
            32: "./A/System64/Images/Icons/Tetris-32x32.png"
        },
        "themes-higher-color": {
            16: "./A/System64/Images/Icons/themes-16x16-higher-color.png",
            32: "./A/System64/Images/Icons/themes-32x32-higher-color.png",
            48: "./A/System64/Images/Icons/themes-48x48-higher-color.png"
        },
        "themes": {
            16: "./A/System64/Images/Icons/themes-16x16.png",
            32: "./A/System64/Images/Icons/themes-32x32.png",
            48: "./A/System64/Images/Icons/themes-48x48.png"
        },
        "tools-folder": {
            16: "./A/System64/Images/Icons/tools-folder-16x16.png",
            32: "./A/System64/Images/Icons/tools-folder-32x32.png",
            48: "./A/System64/Images/Icons/tools-folder-48x48.png"
        },
        "Trail": {
            16: "./A/System64/Images/Icons/Trail-16x16.png",
            32: "./A/System64/Images/Icons/Trail-32x32.png",
            48: "./A/System64/Images/Icons/Trail-48x48.png"
        },
        "Turbo": {
            16: "./A/System64/Images/Icons/Turbo-16x16.png"
        },
        "UD2": {
            16: "./A/System64/Images/Icons/UD2-16x16.png",
            32: "./A/System64/Images/Icons/UD2-32x32.png"
        },
        "unknown-printer": {
            16: "./A/System64/Images/Icons/unknown-printer-16x16.png",
            32: "./A/System64/Images/Icons/unknown-printer-32x32.png",
            48: "./A/System64/Images/Icons/unknown-printer-48x48.png"
        },
        "Update": {
            32: "./A/System64/Images/Icons/Update-32x32.png"
        },
        "url": {
            16: "./A/System64/Images/Icons/url-16x16.png",
            32: "./A/System64/Images/Icons/url-32x32.png",
            48: "./A/System64/Images/Icons/url-48x48.png"
        },
        "video": {
            16: "./A/System64/Images/Icons/video-16x16.png",
            32: "./A/System64/Images/Icons/video-32x32.png"
        },
        "virtualdesktop.org": {
            16: "./A/System64/Images/Icons/virtualdesktop.org-16x16.png"
        },
        "VLC": {
            16: "./A/System64/Images/Icons/VLC-16x16.png",
            48: "./A/System64/Images/Icons/VLC-48x48.png"
        },
        "vue-win3.1": {
            16: "./A/System64/Images/Icons/vue-win3.1-16x16.png",
            32: "./A/System64/Images/Icons/vue-win3.1-32x32.png"
        },
        "WadCMD": {
            128: "./A/System64/Images/Icons/WadCMD-128x128.png",
            16: "./A/System64/Images/Icons/WadCMD-16x16.png",
            256: "./A/System64/Images/Icons/WadCMD-256x256.png",
            32: "./A/System64/Images/Icons/WadCMD-32x32.png",
            48: "./A/System64/Images/Icons/WadCMD-48x48.png",
            512: "./A/System64/Images/Icons/WadCMD-512x512.png",
            64: "./A/System64/Images/Icons/WadCMD-64x64.png"
        },
        "warning-8bpp": {
            16: "./A/System64/Images/Icons/warning-16x16-8bpp.png",
            32: "./A/System64/Images/Icons/warning-32x32-8bpp.png"
        },
        "warning": {
            16: "./A/System64/Images/Icons/warning-16x16.png",
            32: "./A/System64/Images/Icons/warning-32x32.png"
        },
        "warning-1bpp": {
            32: "./A/System64/Images/Icons/warning-32x32-1bpp.png"
        },
        "webdesktop": {
            16: "./A/System64/Images/Icons/webdesktop-16x16.png"
        },
        "winamp2": {
            16: "./A/System64/Images/Icons/winamp2-16x16.png",
            32: "./A/System64/Images/Icons/winamp2-32x32.png",
            48: "./A/System64/Images/Icons/winamp2-48x48.png"
        },
        "windows-1bpp": {
            16: "./A/System64/Images/Icons/windows-16x16-1bpp.png"
        },
        "windows-8bpp": {
            32: "./A/System64/Images/Icons/windows-32x32-8bpp.png"
        },
        "windows-93": {
            16: "./A/System64/Images/Icons/windows-93-16x16.png",
            32: "./A/System64/Images/Icons/windows-93-32x32.png",
            48: "./A/System64/Images/Icons/windows-93-48x48.png"
        },
        "windows-update": {
            16: "./A/System64/Images/Icons/windows-update-16x16.png",
            32: "./A/System64/Images/Icons/windows-update-32x32.png",
            48: "./A/System64/Images/Icons/windows-update-48x48.png"
        },
        "winxp-doge": {
            16: "./A/System64/Images/Icons/winxp-doge-16x16.png"
        },
        "Wolf": {
            16: "./A/System64/Images/Icons/Wolf-16x16.png",
            32: "./A/System64/Images/Icons/Wolf-32x32.png",
            48: "./A/System64/Images/Icons/Wolf-48x48.png"
        },
        "Youtube": {
            16: "./A/System64/Images/Icons/Youtube-16x16.png",
            32: "./A/System64/Images/Icons/Youtube-32x32.png"
        },
        "Zamboni": {
            16: "./A/System64/Images/Icons/Zamboni-16x16.png",
            32: "./A/System64/Images/Icons/Zamboni-32x32.png",
            48: "./A/System64/Images/Icons/Zamboni-48x48.png"
        },
        "Zero": {
            16: "./A/System64/Images/Icons/Zero-16x16.png",
            32: "./A/System64/Images/Icons/Zero-32x32.png",
            48: "./A/System64/Images/Icons/Zero-48x48.png"
        },
        "zone-internet": {
            16: "./A/System64/Images/Icons/zone-internet-16x16.png",
            32: "./A/System64/Images/Icons/zone-internet-32x32.png"
        }
    };

    if (iconPaths[iconID] && iconPaths[iconID][size]) {
        console.log(iconPaths[iconID][size]);
        return iconPaths[iconID][size];
    } else {
        console.log(iconID + " " + size + " not found.");
    }
}