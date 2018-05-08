export default function getTemplate (cb) {
  if (window.location.hash) {
    return fetch('/api/getTemplate?id=' + window.location.hash.slice(1), {
      method: 'GET',
      credentials: "include"
    })
      .then(res => res.json())
      .then(res => cb(res));
  } else {
    return [];
  }
}