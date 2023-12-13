import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всі'
        },
        {
          key: 'conditioners',
          name: 'Кондиціонери'
        },
        {
          key: 'heaters',
          name: 'Обігрівачі'
        },
        {
          key: 'humidifiers',
          name: 'Зволожувачі'
        }
      ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories