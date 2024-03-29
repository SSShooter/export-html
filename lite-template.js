/* eslint-disable import/no-webpack-loader-syntax */
import js from 'mind-elixir/lite?raw'

export default data => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>${data.nodeData.topic}</title>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
      }
      #map {
        height: 100%;
        width: 100%;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>${js}</script>
    <script>
      let mind = new MindElixirLite({el: '#map'})
      mind.init(${JSON.stringify(data)})
    </script>
  </body>
</html>`
