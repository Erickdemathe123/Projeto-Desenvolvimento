const API_URL = process.env.NEXT_PUBLIC_API_URL;

const register = async ({ name, email, password }) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message ?? 'Erro ao criar conta');
  }

  return res.json();
};

export { register };
