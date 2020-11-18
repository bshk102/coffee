const sliderData = [
    {
        p1: '<span>У нас более 45 лет опыта в создании кофе высшего качества.</span> От революционных методов и приверженности качеству до незабываемых успехов, которые сделали Costa Coffee любимой * кофейней британцев, наша история так же уникальна, как и наш кофе.',
        p2: '<span>История Best Coffee началась еще в 1971 году</span>, когда Серджио и Бруно приехали в Лондон, страстно желая сделать вкусный кофе частью повседневной жизни. Основав небольшую обжарочную фабрику на Фенчерч-стрит, они взяли на себя обязательство производить кофе высшего качества.',
        p3: 'Именно здесь братья Коста <span>протестировали вслепую 112 вариантов кофе</span>, прежде чем попробовали один, достойный того, чтобы стать нашим фирменным блендом. Они назвали его <span>«Bright Blend»</span>, и он остается нашим Фирменным Блендом и по сей день.',
        photoUp: 'img/about_photo_up.jpg',
        photoDown: 'img/about_photo_down.jpg'
    },
    {
        p1: 'В 1978 году, по мере роста спроса на COSTA кофе, возникла необходимость в расширении. И братья переехали в Южный Лондон, где превратили огромный пустырь в совершенно новую обжарочную фабрику.',
        p2: 'Новый завод располагался на Олд Парадайз-стрит в Ламбете, где до 2017 года оставалась обжарочная фабрика Costa Coffee.',
        p3: 'Отсюда Серджио и Бруно производили и распространяли свой фирменный бленд в самые уважаемые заведения города.',
        photoUp: 'img/about_photo_up2.jpg',
        photoDown: 'img/about_photo_down2.jpg'
    },
    {
        p1: 'В 1981 году братья открыли свою первую кофейню Costa Coffee на Воксхолл-Бридж-роуд.',
        p2: 'Именно в этой инновационной  кофейне они стали первыми поставщиками кофе в Лондоне, которые подавали Эспрессо и Капучино в фарфоровых чашках, чтобы покупатели могли по-настоящему насладиться кофе.',
        p3: 'Вскоре кофейни начали открываться в трендовых локациях Лондона, становясь местом притяжения модных британцев.',
        photoUp: 'img/about_photo_up3.jpg',
        photoDown: 'img/about_photo_down3.jpg'
    }
]

class Slider {
    constructor(parent, data, buttons, buttonActive, button) {
        this.parent = parent
        this.data = data
        this.buttons = buttons
        this.buttonActive = buttonActive
        this.button = button
    }

    animation() {

    }

    listener() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].src = this.button
            this.buttons[i].addEventListener('click', () => {
                this.render(i)
            })
        }
    }

    render(slideNum) {
        let data = this.data[slideNum]
        let html = `
        <div class="about__slide slide-${slideNum + 1}">
            <div class="about__text">
                <p>
                    ${data.p1}
                </p>
                <br>
                <p>
                    ${data.p2}
                </p>
                <br>
                <p>
                    ${data.p3}
                </p>
                
            </div>

            <div class="about__photos">
                <img src="${data.photoUp}" alt="photo" class="about__photo-up">
                <img src="${data.photoDown}" alt="photo" class="about__photo-down">
            </div>
        </div>
        `
        this.parent.innerHTML = html
        this.listener()
        this.buttons[slideNum].src = this.buttonActive
    }
}

const slider = new Slider(
    document.getElementById('slide'),
    sliderData,
    document.querySelectorAll('.about__bean'),
    'icons/about_bean_active.png',
    'icons/about_bean.png'
)

slider.render(0)