import {useEffect, useState} from 'react'

// keep track of progress of any async function
export const useAsync = (asyncFunc) => {
  const [isLoading, setLoading] = useState(false)

  // toggle isLoading state before and after async function call
  async function asyncFuncWrap() {
    setLoading(true)
    await asyncFunc()
    setLoading(false)
  }

  // define hook
  useEffect(() => {
    asyncFuncWrap()
  }, [])

  return isLoading
}
