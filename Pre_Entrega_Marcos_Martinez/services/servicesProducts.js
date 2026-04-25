export async function callApi(method, path, body = null) {
  const options = {
    method: method.toUpperCase(),
    headers: { 'Content-Type': 'application/json' }
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`https://fakestoreapi.com/${path}`, options);
  if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
  
  return await response.json();
}