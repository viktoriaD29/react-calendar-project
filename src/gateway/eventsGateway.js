const baseUrl = 'https://60d5f912943aa60017768d3c.mockapi.io/api/v1/events';

export const getEvents = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(() => alert("Internal Server Error. Can't display events"));
};

export const createEvent = (newEvents) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvents),
  }).catch(() => alert("Internal Server Error. Can't display events"));
};

export const deleteEvents = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).catch(() => alert("Internal Server Error. Can't display events"));
}
