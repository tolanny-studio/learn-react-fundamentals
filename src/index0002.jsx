import ReactDOM from 'react-dom/client' 

const EventExample =()=>{
  const handleFormInput =(event)=>{
    console.log(event.target.name);
  }

  const handleButtonClick = (event) => {
    event.preventDefault()
    console.log(event);
    
  }

  
  return (
    <form action="" onSubmit={handleButtonClick}>
      <h2>Typical Form</h2>
      <input type="text" onChange={handleFormInput} />
      <button>Click</button>
    </form>
  )
}



ReactDOM.createRoot(document.querySelector('#root')).render(<EventExample />)