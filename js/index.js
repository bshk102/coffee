const SHOP_ITEMS = document.getElementById('shop__items')

class ShopItems {

    roastRate(roast) {
        switch (roast) {
            case 2:
                return 'icons/buy_lightblend.png'
            case 3:
                return 'icons/buy_naturalblend.png'
            case 4:
                return 'icons/buy_brightblend.png'
            default:
                'icons/buy_brightblend.png'
        }
    }

    chooseGrind({ target, currentTarget }) {
        //state change ratio
        let id = target.closest('.shop__item').id
        let thisProduct
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].ratio = Number(target.getAttribute('data-ratio'))
                thisProduct = state[i]
                break
            }
        }

        //rerender
        let allItems = currentTarget.querySelectorAll('li')
        allItems.forEach(item => item.classList.remove('shop__active'))
        target.classList.add('shop__active')

        //change price
        let priceElement = target.closest('.shop__item').querySelector('.shop__price')
        let price = Math.floor(this.calcPrice(thisProduct.price, thisProduct.weight, thisProduct.ratio))
        priceElement.innerHTML = price + ' ₽'
        thisProduct.currentPrice = price
    }

    chooseWeight({ target, currentTarget }) {
        //state change weight
        let id = target.closest('.shop__item').id
        let thisProduct
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].weight = Number(target.value)
                thisProduct = state[i]
                break
            }
        }

        //rerender
        let allItems = currentTarget.querySelectorAll('li')
        allItems.forEach(item => item.classList.remove('shop__active'))
        target.classList.add('shop__active')

        //change price
        let priceElement = target.closest('.shop__item').querySelector('.shop__price')
        let price = Math.floor(this.calcPrice(thisProduct.price, thisProduct.weight, thisProduct.ratio))
        priceElement.innerHTML = price + ' ₽'
        thisProduct.currentPrice = price
    }

    calcPrice(price, wieght = 50, ratio = 1) {
        switch (wieght) {
            case 50:
                return price / 20 * ratio
            case 100:
                return price / 10 * ratio
            case 500:
                return price / 2 * ratio
            case 1000:
                return price * ratio
            default:
                return price
        }
    }

    render() {

        let htmlIn = ''

        CATALOG.forEach(({ id, name, img, price, roast, tasteDescr, sort, descr }) => {

            htmlIn += `
            <div class="shop__item" id="${id}">
                <div class="shop__itemWrapper">
                    <div class="shop__img">
                        <img src=${img} alt="cofee">
                    </div>
                    <div class="shop__itemDescr">
                        <h2 class="shop__header">
                            ${name}
                        </h2>
                        <div class="shop__roastrate">
                            <img src=${this.roastRate(roast)} alt="blend">
                        </div>
                        <div class="shop__price" data-price="${this.calcPrice(price)}">
                            ${this.calcPrice(price)} ₽
                        </div>
                        <div class="shop__descr">
                            ${tasteDescr} 
                            <br> <br> <br>
                            <span>${sort}</span>
                        </div>
                        <button class="btn shop__btn">
                            Добавить
                        </button>
                    </div>
                </div>
                <div class="shop__weight">
                    <span>Выберите вес:</span>
                    <ul class="shop__chooseweight" onclick="itemsBlock.chooseWeight(event)">
                        <li value="50" class="shop__active">50г</li>
                        <li value="100">100г</li>
                        <li value="500">500г</li>
                        <li value="1000">1000г</li>
                    </ul>
                </div>
                <div class="shop__grind">
                    <span>Выберите помол:</span>
                    <ul class="shop__choosegrind" onclick="itemsBlock.chooseGrind(event)">
                        <li data-ratio="1" class="shop__active">Стандарт</li>
                        <li data-ratio="1.1">Эспрессо</li>
                        <li data-ratio="0.9">Не молоть</li>
                    </ul>
                </div>
                <p>
                    ${descr}
                </p>
            </div>

            <div class="shop__divider"></div>
            `

            state.push({ id, ratio: 1, weight: 50, price, currentPrice: this.calcPrice(price) })
        })
        SHOP_ITEMS.innerHTML += htmlIn


    }

}

const itemsBlock = new ShopItems()
itemsBlock.render()