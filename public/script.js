async function sendMessage() {
  const input = document.getElementById('input');
  const chat = document.getElementById('chat');

  const message = input.value;

  if (!message) return;

  chat.innerHTML += `<p><b>Você:</b> ${message}</p>`;

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  chat.innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;

  input.value = '';
}
