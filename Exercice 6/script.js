
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let text= ""
  for (const key in details){
    text = text + " " + key + " " + details[key]
  }
  console.log(text)