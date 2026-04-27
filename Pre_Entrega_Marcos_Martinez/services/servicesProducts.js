export async function callApi(method, path, body = null) {
  const options = {
    method: method.toUpperCase(),
    headers: { 'Content-Type': 'application/json' }
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`https://fakestoreapi.com/${path}`, options);


  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  
  const text = await response.text();

  if (!text || text === 'null') {
    throw new Error('No content: El item solicitado no existe');
  }

  return JSON.parse(text);
}