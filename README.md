# Focus Timer 

An easy to use timer destop Application.


## Installation

<br>

Install dependencies using [pnpm](https://pnpm.io/) or [yarn](https://www.npmjs.com/package/yarn) or [npm](https://www.npmjs.com/) :

```bash
# using pnpm
pnpm install

# or using yarn
yarn install

# or using npm
npm install
```

<br />

## Start : Development

To get started with development and run your app, just use this command:

```bash
yarn start
```

<br />

## Lint : Development

To lint your application’s source code with ESLint, run this:

```bash
yarn lint
```

<br />

## Package : Production

Package your Electron app into OS-specific bundles (.app, .exe, etc) like this:

```bash
yarn package
```

<br />

## Make : Production

Making takes your packaged app and creates platform-specific distributables, like DMG, EXE, or Flatpak files (and more).

```bash
yarn make
```

<br />

## Publish : Production

Publishing takes the artifacts generated by the `make` command and uploads them to a service, so you can distribute or use them for updates (like an update server or an S3 bucket).

```bash
yarn publish
```

<br />

## Packager & Makers Configuration

This makes it easy to configure your packaged app and create platform-specific distributables, like DMG, EXE, or Flatpak files.

This configurations file is available in :

```bash
tools/forge/forge.config.js
```

For further information about packager, you can visit [Electron Forge Configuration](https://www.electronforge.io/configuration)
