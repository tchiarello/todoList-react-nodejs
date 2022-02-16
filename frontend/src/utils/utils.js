export async function fetchItems() {
  const response = await fetch('http://localhost:3001/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();
  return json;
}
