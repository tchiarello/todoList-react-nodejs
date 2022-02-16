export async function getItems() {
  const response = await fetch('http://localhost:3001/tasks');
  const json = await response.json();
  return json;
}

export async function postItems(task) {
  const response = await fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const json = await response.json();
  return json;
}

export async function updateItem(id, task) {
  const response = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const json = await response.json();
  return json;
}

export async function deleteItem(id) {
  const response = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();
  return json;
}
