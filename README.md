# Smart Life

## Install ZMP CLI
Checkout this [page](https://mini.zalo.me/devtools/cli/intro/).

## How to dev without using Zalo Mini App Studio 
As the GUI of ZMAS is sucks, I recommend using vscode or any other IDE you like to dev! 
* Step 0: Pull the code (of course).

* Step 1: Login using command ```zmp login```. Scan QR code or doing anything as in the instructions will get u through this. 

* Step 2: Add dependencies. Use ```npm i```.
* Step 3: To start the application, type ```zmp start```. 
* Step 4: Access the address ```localhost:3000``` (default port). 
* Step 5: <Mark>Use browser dev tool (F12). Toogle device toolbar to get the mobile device resolution.</Mark>

## ZMP CLI Options

ZMP app created with following options:

```
{
  "cwd": "D:\\232\\zalo-smart-life\\smart-life",
  "name": "Smart Life",
  "framework": "react-typescript",
  "cssPreProcessor": "css",
  "includeTailwind": true,
  "package": "zmp-ui",
  "stateManagement": "recoil",
  "newProject": true,
  "template": "single-view",
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false,
    "useUiKits": true
  }
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🙏 `deploy` - deploy mini app for production