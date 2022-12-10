import useScript from '../hooks/useScript'

export default function ScriptComponent() {
  const status = useScript('https://code.jquery.com/jquery-3.6.0.min.js')

  return (
    <>
      <div>Script status: {status}</div>
      {status === 'ready' && (
        <div>Your windows size: {window.$(window).width()}</div>
      )}
    </>
  )
}
