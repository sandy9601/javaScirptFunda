fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch