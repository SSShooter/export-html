import { saveAs } from 'file-saver'
import HTMLtemplate from './lite-template'

export function data2Html(data) {
  return new Blob([HTMLtemplate(data)])
}

export default function (me) {
  me.exportHtml = function () {
    const data = me.getData()
    return data2Html(data)
  }
  me.exportHtmlFile = function (fileName) {
    const data = me.getData()
    const file = data2Html(data)
    saveAs(file, (fileName || data.nodeData.topic) + '.html')
  }
}
