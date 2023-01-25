addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const CLIENT_ID = "7ALlNHok-GGsQTEFsWl5P7Lsc7oF7BhXEIkPfzfGUyw"
  const resp = await fetch('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`
    }
  })
  const data = await resp.json()
  return new Response(JSON.stringify(data));
  // const {query} = await request.json();
  // return new Response(`Your query was ${query}`);
}
