export default function MyMessage({ html, state }) {
  const { store } = state
  const { message='' } = store

  return html`<p>Hey! ${message}</p>`
}