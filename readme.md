# Web 107 Node Server
[Nodemon](https://github.com/remy/nodemon) is an actively maintained project that will reload our server for us automatically on file changes.

You can use `nodemon` in a couple of ways. You can install the tool globally or just for a single project.

## Use Globally

```bash
# let's make sure we are on the latest version of npm
npm install -g npm

# install nodemon
npm install -g nodemon
```

### Usage
`cd` to your project root directory and run the command below.

```bash
nodemon server.js
```

## Use for a Single Project

Start from this GitHub repo as a template.

```bash
cd project-dir
git clone https://github.com/njmaeff/web-107-node-server.git .
```

### Install
```bash
npm install
```

### Commands

```bash
# starting the server in reload mode
npm run serve

# bonus using browser-sync to refresh the browser automatically
# install browser-sync
npm install -D browser-sync
# run the script
npm run sync
```