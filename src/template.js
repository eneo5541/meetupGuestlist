// html skeleton provider
function template(title, initialState = {}, content = "") {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <link href="assets/index.css" rel="stylesheet">
      </head>
      <body>
        <div class="content">
          <div id="app" class="wrap-inner">
            ${content}
          </div>
        </div>
        <script>
          window.__STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="assets/client.js"></script>
      </body>
    </html>
  `;
}

module.exports = template;
