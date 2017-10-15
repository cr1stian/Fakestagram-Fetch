fetch('url', {
  headers: {
  }
})
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    console.log(json)
  })
