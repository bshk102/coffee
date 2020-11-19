class Slider {
    constructor(parent, data, buttons, buttonActive, button) {
        this.parent = parent
        this.data = data
        this.buttons = buttons
        this.buttonActive = buttonActive
        this.button = button
    }

    animation() {
        let opacity = 0
        this.parent.style.opacity = opacity
        const opacityTimer = setInterval(() => {
            if (opacity >= 1) clearInterval(opacityTimer)
            else {
                opacity += 0.1
                this.parent.style.opacity = opacity
            }
        }, 50)
        
    }

    listener() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', () => {
                this.buttons[i].src = this.buttonActive
                this.render(i)
                this.animation()
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

        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].src = this.button
        }

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
slider.listener()
slider.render(0)