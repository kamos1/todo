export const loadState = () => {
  try {
    const serialData = localStorage.getItem('state');
    if(serialData === null) {
      return undefined
    }

    return JSON.parse(serialData)
  }
  catch(err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serialData = JSON.stringify(state)
    localStorage.setItem('state', serialData)    
  }
  catch (err) {
    console.error(err)
  }
}