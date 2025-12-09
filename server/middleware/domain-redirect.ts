export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host');
  const url = getRequestURL(event);

  if (host === 'nirvati.at' || host === 'www.nirvati.at') {
    const newUrl = `https://nirvati.de${url.pathname}${url.search}${url.hash}`;
    return sendRedirect(event, newUrl, 301);
  }
  
  if (host === 'nirvati.org' || host === 'www.nirvati.org') {
    const newUrl = `https://nirvati.eu${url.pathname}${url.search}${url.hash}`;
    return sendRedirect(event, newUrl, 301);
  }
});
