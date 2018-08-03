const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(`${req.method} ${req.url}`);
  //res.end('Hello world! You entered ' + `${req.url}`);
  if (req.method === "GET") {
    console.log(`${req.method} request at ${req.url}`);
    //GET request
    //parse URL with regex
    let parsedURL = req.url.match(/^\/matrix\/([0-9]+)/i);
    if (parsedURL) {
      //pull out number from first capturing group
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        `<body><h1>Spiral Matrix Generator</h1><div><p>Press the generate button to generate an n*n matrix and populate with sequential numbers in a spiral pattern.</p>n =<input type='number' value='${
          parsedURL[1]
        }' id='number' min='1' max='100'><button name='generate' type='button' value='generate' onclick='matrix()'>Generate</button><hr></div>`
      );
      res.write(
        "<style>td {border: 1px solid black;padding: 10px;text-align: center;}</style>"
      );
      res.write(generate(parsedURL[1]));
      res.write(
        "<script>function matrix(){location.href = document.getElementById('number').value;}</script>"
      );
      res.end();
    } else {
      res.writeHead(404);
      res.end("Not found");
    }
  } else {
    console.log(`${req.method} is not supported`);
    res.end("Unsupported request");
  }
});

const port = 8080;
server.listen(port, () => console.log(`Server started on port ${port}`));

function generate(number) {
  const maxNumber = 50;
  // set hard bound for maximum number; safeguard against very high numbers as input
  if (number > maxNumber) {
    number = maxNumber;
  }
  let tableArr = [];
  // create tableArr
  for (let i = 0; i < number; i++) {
    //create new rows
    tableArr[i] = [];
  }
  //populate tableArr
  populate();

  function populate(
    startX = 0,
    endX = number,
    startY = 0,
    endY = number,
    counter = 1
  ) {
    //check if any cells are left to populate
    if (startX >= endX || startY >= endY) {
      return;
    }

    //populate top edge
    for (let i = startX; i < endX; i++) {
      tableArr[startY][i] = counter;
      counter++;
    }
    //populate right edge
    for (let i = startY + 1; i < endY; i++) {
      tableArr[i][endX - 1] = counter;
      counter++;
    }
    //populate bottom edge
    for (let i = endX - 2; i >= startX; i--) {
      tableArr[endY - 1][i] = counter;
      counter++;
    }
    //populate left edge
    for (let i = endY - 2; i >= startY + 1; i--) {
      tableArr[i][startX] = counter;
      counter++;
    }
    //recursively call populate for the inner tableArr minus outer edge
    populate(startX + 1, endX - 1, startY + 1, endY - 1, counter);
  }
  // create html table
  let table = "<div><table>";
  for (let i = 0; i < number; i++) {
    table += "<tr>";
    for (let k = 0; k < number; k++) {
      table += `<td>${tableArr[i][k]}</td>`;
    }
    table += "</tr>";
  }
  table += "</table></div>";
  return table;
}
