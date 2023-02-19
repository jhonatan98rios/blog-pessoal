export function parseError(data) {

  const errors = []

  if (data?.length > 0) {
    data.forEach(e => {
      e.errors.issues.forEach(issue => {
        errors.push(issue.message)
      })
    })
  }

  if (data?.message) {
    errors.push(data.message)
  }

  return errors
}
