import { useState } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
export default function CopyToClipboardComponent() {
  const [text, setText] = useState('')
  const [value, copyToClipboard] = useCopyToClipboard()
  return (
    <>
      <button onClick={() => copyToClipboard(text)}>Copy</button>
      <input type="text" onChange={(evt) => setText(evt.target.value)} />
      <div>Copied value: {value}</div>
    </>
  )
}
