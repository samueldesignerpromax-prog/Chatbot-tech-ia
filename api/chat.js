export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    let reply = '';

    if (message.toLowerCase().includes('preço')) {
      reply = 'Nossos serviços começam a partir de R$97.';
    } else if (message.toLowerCase().includes('site')) {
      reply = 'Criamos sites profissionais para sua empresa.';
    } else if (message.toLowerCase().includes('chatbot')) {
      reply = 'Temos chatbots automatizados para vendas e atendimento.';
    } else {
      reply = 'Olá! Sou o assistente da Samuel Tech IA. Como posso te ajudar?';
    }

    res.status(200).json({ reply });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
