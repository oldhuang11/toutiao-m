const setItem = (key, data) => {
  typeof data === 'object'
    ? window.localStorage.setItem(key, JSON.stringify(data))
    : window.localStorage.setItem(key, data)
}

const getItem = (key) => {
  const val = window.localStorage.getItem(key)
  try {
    return JSON.parse(val)
  } catch (error) {
    console.error('转换对象错误', error)
    return val
  }
}

const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

export {
  setItem, getItem, removeItem
}
