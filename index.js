addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const resp = await fetch('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`
    }
  })
  const data = await resp.json()
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-type':'application/json'
    }
  });
  // const {query} = await request.json();
  // return new Response(`Your query was ${query}`);
}
