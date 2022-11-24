# @mind-elixir/export-html

`@mind-elixir/export-html` is a plugin of [mind-elixir-core](https://github.com/ssshooter/mind-elixir-core). You can use `@mind-elixir/export-html` to export a `.html` file.

## Install

```
npm i @mind-elixir/export-html file-saver
```

## How To Use

### Use As A Plugin

```javascript
import MindElixir from 'mind-elixir'
import exportHtml from '@mind-elixir/export-html'

const mind = new MindElixir(options)
mind.install(exportHtml)
mind.init(data)

const blob = await mind.exportHtml() // get blob

mind.exportHtmlFile(fileName) // download file
```

### MindElixir Data To Xmind

```javascript
import { data2Html } from '@mind-elixir/export-html'
// use this way to avoid creating instance
const blob = await data2Html(JSON.parse(JSON.stringify(data))) // data returned by getAllData()
```
