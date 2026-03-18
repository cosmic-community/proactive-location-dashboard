const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', 'out')
const scriptTag = '<script src="/dashboard-console-capture.js"></script>'

function injectScript(filePath) {
  const html = fs.readFileSync(filePath, 'utf8')
  if (html.includes(scriptTag)) return
  const updated = html.replace('</head>', `${scriptTag}</head>`)
  fs.writeFileSync(filePath, updated)
}

if (fs.existsSync(outDir)) {
  const files = fs.readdirSync(outDir)
  files.forEach((file) => {
    if (file.endsWith('.html')) {
      injectScript(path.join(outDir, file))
    }
  })
}