// alert('How are you');
const showAlert = () =>{
    alert('Taka de');
}

const lendMoney = () => {
  const result = confirm('Will you lend me some money?');
  console.log(result);
  if(result === true){
    alert('Tui amar janer dosto');
  }
  else{
    console.log('dure giye mor!')
  }
}

const getInfo = () =>{
    //alert
    //confirm
    const name = prompt('Tell me your name?');
    console.log(name);
    if( name === null){
        alert('name na dile kam hobe na!')
    }
    else{
        console.log(name, 'Welcome to the world!')
    }
}