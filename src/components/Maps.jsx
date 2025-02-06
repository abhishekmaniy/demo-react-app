import React from 'react'

const Maps = () => {
  const cars = [
    { id: 1, name: 'Tata', model: 'Tigor', price: '10L', color: 'Red' },
    { id: 2, name: 'Hyuday', model: 'i10', price: '11L', color: 'Black' },
    { id: 3, name: 'Honda', model: 'city', price: '12L', color: 'white' },
    { id: 4, name: 'Mahindra', model: 'xuv500', price: '13L', color: 'Green' },
    { id: 5, name: 'Maruti', model: 'dzire', price: '14L', color: 'Pink' }
  ]

  return (
    <div>
      <ul>
        {cars.map(car => {
          return (
            <li>
              Data: {car.id}
              <br />
              Color:{car.color} <br /> Model:{car.model} <br /> Name:{car.name}{' '}
              <br /> Price:
              {car.price} <br />
              <br />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Maps
