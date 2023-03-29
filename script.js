function syracuse(){
  let number = document.getElementById('num').value
  console.log(number)
  if(number < 1){
    console.log('le chiffre doit être > 0')
    return;
  }
  let count = 0

  while(number != 1){
    if(number%2!=0){
      number = number*3 +1
    }else{
      number = number/2
    }
    console.log(number)
    count++
  }

  console.log('fin : ' + count)
}

