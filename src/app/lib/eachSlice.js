const eachSlice = (array, sliceInterval, result=[]) => {
  result.push(
    array.splice(0, sliceInterval)
  )

  return array.length === 0 ? result : eachSlice(array, sliceInterval, result)
}

export default eachSlice
