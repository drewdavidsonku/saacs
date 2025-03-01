export default eventHandler(async (event) => {
  const { credentials, key } = await readBody(event)
  const { data } = await requireAuthSession(event)

  // console.log(username, credentials);

  await updateUserByUsername(data.username, { credentials, key })
  return {
    message: 'Successfully Updated',
  }
})
