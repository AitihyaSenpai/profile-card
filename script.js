const circles = document.querySelectorAll(".circle")

const getRandomPosition = () => {
    const value = Math.random() * 100
    const multiplier = Math.round(Math.random()) === 0 ? -1 : 1

    return value * multiplier
}

function wiggle() {
    circles.forEach((circle) => {
        const keyframes = [
            {
                transform: `translate(0, 0)`,
            },
            {
                transform: `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`,
            },
            {
                transform: `translate(0, 0)`,
            },
        ]

        const options = {
            duration: 10000,
            iterations: 1,
        }

        circle.animate(keyframes, options)
    })
}

wiggle()

setInterval(wiggle, 10000)
