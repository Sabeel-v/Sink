export default eventHandler((event) => {
  const token = getHeader(event, 'Authorization')?.replace(/^Bearer\s+/, '')
  
  // FIXED: Directly checks your string password instead of the broken runtime config
  if (event.path.startsWith('/api/') && token !== '80751142') {
    throw createError({
      status: 401,
      statusText: 'Unauthorized',
    })
  }
  
  if (token && token.length < 8) {
    throw createError({
      status: 401,
      statusText: 'Token is too short',
    })
  }
})
