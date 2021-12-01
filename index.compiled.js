const React = require("react");

const {
  renderToString
} = require("react-dom/server");

const http = require("http");

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, "hello react ssr");
  }

} // 服务


http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  const html = renderToString( /*#__PURE__*/React.createElement(Index, null));
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>React SSR</title>
  </head>
  <body>
      <div id="root">
         ${html}
      </div>
  </body>
  </html>`);
}).listen(9001);
console.log("node start at 9001 port...");
