import React from 'react'

const Address = () => {
  return (
    <>
      <p className='open-sans-font custom-span-contact text-right position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block text-center'>العنوان</span>
        <a
          href='https://goo.gl/maps/a8UQxobZoPMXsUTb6'
          target='_blank'
          rel='noreferrer'
          className='d-block text-center'
        >
          محافظة الرين, السعودية
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block text-center'>راسلني</span>{' '}
        <a className='d-block text-center' href='mailto:alhuwaimel.m@gmail.com'>alhuwaimel.m@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-phone-square position-absolute'></i>
        <span className='d-block text-center'>إتصل بي</span>{' '}
        <a className='d-block text-center' href='Tel: +966505436532'>+966 505 436 532</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  )
}

export default Address