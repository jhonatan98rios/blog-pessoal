import { CSSProperties } from "react";

export default function NotFound() {
  return (
    <main style={main}>
      <img style={image} src="404.gif" alt="meme john travolta" />
      <h1>404 - Pagina não encontrada</h1>
    </main>
  );
}

const main = {
  height: 'calc(100vh - 160px)',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '32px',
} as CSSProperties

const image = {
  marginBottom: '32px',
  height: '320px'
} as CSSProperties