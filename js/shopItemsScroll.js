class ItemsScroll {
    constructor(prev, next, item, range) {
        this.prevArrow = prev
        this.nextArrow = next
        this.item = item
        this.range = range
        this.translateX = 0
        let screenWidth = screen.width
    }

    move(e) {
        let showedItems = 3
        let screenWidth = screen.width
        if (screenWidth <= 1660) {
            showedItems = 2;
        }

        const checkArrows = () => {
            if (this.translateX === 0) {
                this.prevArrow.classList.remove('shop__arrowActive')
            }
            if (this.translateX === this.range * (CATALOG.length - showedItems)) {
                this.nextArrow.classList.remove('shop__arrowActive')
            }
        }
        

        const nextItem = () => {
            checkArrows()
            if (this.translateX !== this.range * (CATALOG.length - showedItems)) {
                this.translateX += this.range
                this.item.forEach(item => item.style.transform = `translateX(-${this.translateX}px)`)
                this.prevArrow.classList.add('shop__arrowActive')
                checkArrows()
            }
        }

        const prevItem = () => {
            checkArrows()
            if (this.translateX !== 0) {
                this.translateX -= this.range
                this.item.forEach(item => item.style.transform = `translateX(-${this.translateX}px)`)
                this.nextArrow.classList.add('shop__arrowActive')
                checkArrows()
            }            
        }

        e.target == this.nextArrow ? nextItem() : prevItem()
    
    }

    listener() {
        this.nextArrow.addEventListener('click', (e) => this.move(e))
        this.prevArrow.addEventListener('click', (e) => this.move(e))
    }
}

const shopItemsScroll = new ItemsScroll(
    document.querySelector('.shop__prevArrow'),
    document.querySelector('.shop__nextArrow'),
    document.querySelectorAll('.shop__item'),
    489
)

shopItemsScroll.listener()
console.log(screen.width)