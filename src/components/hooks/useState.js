import { useEffect, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count}`
  }, [count])

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick = {() => setCount (count + 1)}>click</button>
    </div>
  )
}


















































