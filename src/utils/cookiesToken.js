const getCookieToken = () => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
  const tokenCookie = cookies.find((cookie) => cookie.startsWith('token='));

  return tokenCookie ? tokenCookie.substring(6) : null;
};

export default getCookieToken;
