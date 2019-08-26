const React = require('react');
const {useState} = React;

const Date = ({setResult}) => {
  
  
  const url = '/api/whoami/'
  
  const handleSubmit = e => {
    e.preventDefault();
    
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data)

      setResult(data)
    })
    .catch(error => console.error('Error:', error));
  }
  
  return (
    <div className="submit-click">
      <h3>Who Am I ?</h3>
      
      <div className="form-container">
          <form className="submit-click-form" onSubmit={handleSubmit}>
            <input className="form-submit" type="submit" value="Submit"/>
          </form>
      </div>
    </div>
  )
}

export default Date;