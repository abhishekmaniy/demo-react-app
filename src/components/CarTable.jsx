import React from 'react'

const CarTable = () => {
  const cars = [
    { id: 1, name: 'Tata', model: 'Tigor', price: '10L', color: 'Red' },
    { id: 2, name: 'Hyuday', model: 'i10', price: '11L', color: 'Black' },
    { id: 3, name: 'Honda', model: 'city', price: '12L', color: 'white' },
    { id: 4, name: 'Mahindra', model: 'xuv500', price: '13L', color: 'Green' },
    { id: 5, name: 'Maruti', model: 'dzire', price: '14L', color: 'Pink' }
  ]
  return (
    <div>
      <table border={1} cellPadding={10}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Model</th>
          <th>Price</th>
          <th>Color</th>
        </tr>
        {cars.map(car => (
          <tr>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>{car.model}</td>
            <td>{car.price}</td>
            <td>{car.color}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default CarTable
