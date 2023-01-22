export async function fileUpload(file: string | Blob) {

  const body = new FormData();
  body.append('file', file);

  try {
    const res = await fetch('http://localhost:3333/post/image/', { method: 'POST', body })
    const data = await res.json()
    const image = data

    console.log(image)
    return image;

  } catch (error) {

    console.log('error')
    console.log(error)
  }
}
