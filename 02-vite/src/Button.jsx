import { useState } from 'react';

function Button({ children }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <button onClick={() => setEnabled(!enabled)}>
      {children} {enabled && '✅'}
    </button>
  )
}

export default Button
