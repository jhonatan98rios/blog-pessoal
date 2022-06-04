export default function NotFound() {
  return (
    <main style={main}>
      <img style={image} src="404.gif" alt="meme john travolta" />
      <h1>404 - Pagina não encontrada</h1>
    </main>
  );
}

const main = {
  'height': 'calc(100vh - 160px)',
  'width': '100vw',
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'flex-direction': 'column',
  'padding-top': '32px',
}

const image = {
  'margin-bottom': '32px',
  'height': '320px'
}