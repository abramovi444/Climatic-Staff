import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кондиціонер Gorenje',
          img: 'con_gor.webp',
          desc: 'Кондиціонери цієї серії мають лаконічний дизайн, високу продуктивність і великий набір функцій і режимів, завдяки чому легко можна створити вдома оптимальний мікроклімат.',
          category: 'conditioners',
          price: '16500.00'
        },
        {
          id: 2,
          title: 'Кондиціонер COOPER&HUNTER',
          img: 'con_coop.webp',
          desc: 'Кондиціонери цієї серії мають лаконічний дизайн, високу продуктивність і великий набір функцій і режимів, завдяки чому легко можна створити вдома оптимальний мікроклімат.',
          category: 'conditioners',
          price: '27000.00'
        },
        {
          id: 3,
          title: 'Кондиціонер Samsung',
          img: 'con_sam.webp',
          desc: 'Кондиціонери цієї серії мають лаконічний дизайн, високу продуктивність і великий набір функцій і режимів, завдяки чому легко можна створити вдома оптимальний мікроклімат.',
          category: 'conditioners',
          price: '17500.00'
        },
        {
          id: 4,
          title: 'Конвектор COOPER&HUNTER',
          img: 'conv_coop.webp',
          desc: 'Унікальний аеродинамічний дизайн корпусу сприяє швидкому поширенню теплого повітря по всьому приміщенню та ефективності конвекційної тяги.',
          category: 'heaters',
          price: '2500.00'
        },
        {
          id: 5,
          title: 'Керамічна панель AFRICA',
          img: 'conv_afr.webp',
          desc: 'Керамічний обігрівач AFRICA A1300 є обігрівачем гібридного типу, який поєднує в собі переваги інфрачервоних теплових панелей та електричних конвекторів.',
          category: 'heaters',
          price: '6500.00'
        },
        {
          id: 6,
          title: 'Теплова гармата SIAL',
          img: 'conv_sial.webp',
          desc: 'Теплова гармата SIAL D15 - це переносне джерело тепла, призначене для обігріву таких приміщень, як майстерні, гаражі, домогосподарства, магазини.',
          category: 'heaters',
          price: '10850.00'
        },
        {
          id: 7,
          title: 'Зволожувач повітря Philips',
          img: 'uv_phi.jpg',
          desc: 'Зволожувач повітря Philips 2000 Series. Вільне дихання та міцний сон. Гігієнічне зволоження повітря вдень та вночі.',
          category: 'humidifiers',
          price: '4500.00'
        },
        {
          id: 8,
          title: 'Зволожувач повітря ELECTROLUX',
          img: 'uv_ele.jpg',
          desc: 'Створіть здоровий мікроклімат у своєму домі за допомогою зволожувачів Electrolux.',
          category: 'humidifiers',
          price: '3000.00'
        },
        {
          id: 9,
          title: 'Зволожувач повітря Xiaomi SmartMi',
          img: 'uv_xia.webp',
          desc: 'Інтелектуальна конструкція випарного зволожувача повітря SmartMi Pure Humidifier 2 дозволяє безперервно контролювати рівень води за допомогою вбудованих датчиків, забезпечуючи оновлення рівня води в резервуарі в режимі реального часу.',
          category: 'humidifiers',
          price: '4300.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
