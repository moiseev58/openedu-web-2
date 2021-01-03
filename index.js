require('http').Server((req, res) => {
  res.writeHead(200, {
    'X-Author': 'itmo287700',
    'Content-Type': 'text/plain; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  })

  if (req.url === '/login/') {
    return res.end('itmo287700')
  }

  if (req.url === '/sample/') {
    function task(x) {
      const sqrt = this ** 2
      return x * sqrt
    }

    return res.end(String(task))
  }
  res.end('itmo287700')
})
.listen(process.env.PORT)