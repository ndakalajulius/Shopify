import React from 'react'


const Footer = () => {
  return (<>
	<div id='social'>

  <a className='fa fa-linked-in' target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/sample-7842b814a'></a>
  <a className='fa fa-github' target='_blank' rel='noopener noreferrer' href='https://github.com/sample'></a>
  <a className='fa fa-google' rel='noopener noreferrer' href="mailto:sample@gmail.com"></a>
  <a className='fa fa-instagram' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/sample/?hl=undefined'></a>

</div>

<div id='elements'>

  <img id='phone' src={phone} />
  <p>+32 696 69 69 69</p>

  <img id='email' src={email} /> <p>sample@gmail.com</p>
  <img id='pin' src={pin} /> <p>Antwerp , Belgium</p>
</div>
</>
  )
}

export default Footer