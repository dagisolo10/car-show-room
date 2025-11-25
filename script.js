const searchBars = document.querySelectorAll('.search-bar')

searchBars.forEach(button => {
    button.addEventListener('click', () => {
        const searchInput = document.getElementById('search-input')
        searchInput.style.display = 'block'
        searchInput.style.visibility = 'visible'
        searchInput.style.animation = 'slideUp .5s ease forwards'
        searchInput.focus()
    })
})

const cars = {
    bmw: [
        {
            model: 'M3 Competition',
            brand: 'BMW',
            img: 'Pins/1.jpg',
            keyword: 'bmw',
            id: 101,
            price: 73000,
            type: 'Sedan',
            horsepower: 503,
            year: 2023,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'The BMW M3 Competition delivers track-level performance with a luxury sedan design and aggressive handling.'
        },
        {
            model: 'X5 M',
            brand: 'BMW',
            img: 'Pins/2.jpg',
            keyword: 'bmw',
            id: 102,
            price: 90000,
            type: 'SUV',
            horsepower: 600,
            year: 2022,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'A powerful luxury SUV blending everyday usability with M-level performance.'
        },
        {
            model: 'i8',
            brand: 'BMW',
            img: 'Pins/3.jpg',
            keyword: 'bmw',
            id: 103,
            price: 145000,
            type: 'Hybrid',
            horsepower: 369,
            year: 2020,
            fuel: 'Hybrid',
            transmission: 'Automatic',
            description: 'Futuristic hybrid sports car with lightweight carbon fiber and an iconic design.'
        },
        {
            model: 'M5 CS',
            brand: 'BMW',
            img: 'Pins/4.jpg',
            keyword: 'bmw',
            id: 104,
            price: 142000,
            type: 'Sedan',
            horsepower: 627,
            year: 2023,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'The ultimate M-series sedan with supercar performance and everyday practicality.'
        },
        {
            model: 'Z4 Roadster',
            brand: 'BMW',
            img: 'Pins/5.jpg',
            keyword: 'bmw',
            id: 105,
            price: 65000,
            type: 'Convertible',
            horsepower: 382,
            year: 2022,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'Stylish convertible offering a balance between performance and comfort.'
        }
    ],

    lamborghini: [
        {
            model: 'Aventador SVJ',
            brand: 'Lamborghini',
            img: 'Pins/lambo1.jpg',
            keyword: 'lambo',
            id: 201,
            price: 517000,
            type: 'Supercar',
            horsepower: 759,
            year: 2023,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'Flagship Lamborghini with brutal power and a V12 that screams performance.'
        },
        {
            model: 'Huracán EVO',
            brand: 'Lamborghini',
            img: 'Pins/lambo2.jpg',
            keyword: 'lambo',
            id: 202,
            price: 261000,
            type: 'Supercar',
            horsepower: 631,
            year: 2022,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'A perfect blend of precision and performance with modern aerodynamics.'
        },
        {
            model: 'Urus',
            brand: 'Lamborghini',
            img: 'Pins/lambo3.jpg',
            keyword: 'lambo',
            id: 203,
            price: 230000,
            type: 'SUV',
            horsepower: 657,
            year: 2023,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'The world’s first Super SUV that combines luxury and performance.'
        },
        {
            model: 'Gallardo LP560',
            brand: 'Lamborghini',
            img: 'Pins/lambo4.jpg',
            keyword: 'lambo',
            id: 204,
            price: 200000,
            type: 'Supercar',
            horsepower: 552,
            year: 2013,
            fuel: 'Petrol',
            transmission: 'Manual',
            description: 'Classic Lamborghini known for its balance, power, and raw driving experience.'
        },
        {
            model: 'Reventón',
            brand: 'Lamborghini',
            img: 'Pins/lambo5.jpg',
            keyword: 'lambo',
            id: 205,
            price: 1500000,
            type: 'Hypercar',
            horsepower: 650,
            year: 2008,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'Extremely rare Lamborghini inspired by fighter jets, limited to 20 units worldwide.'
        }
    ],

    ferrari: [
        {
            model: 'F8 Tributo',
            brand: 'Ferrari',
            img: 'Pins/ferrari1.jpg',
            keyword: 'ferrari',
            id: 401,
            price: 275000,
            type: 'Supercar',
            horsepower: 710,
            year: 2023,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'Breathtaking design with a twin-turbo V8 producing exceptional performance.'
        },
        {
            model: 'SF90 Stradale',
            brand: 'Ferrari',
            img: 'Pins/ferrari2.jpg',
            keyword: 'ferrari',
            id: 402,
            price: 507000,
            type: 'Hybrid Supercar',
            horsepower: 986,
            year: 2024,
            fuel: 'Hybrid',
            transmission: 'Automatic',
            description: 'Ferrari’s most powerful production car combining hybrid tech and racing DNA.'
        },
        {
            model: '812 Superfast',
            brand: 'Ferrari',
            img: 'Pins/ferrari3.jpg',
            keyword: 'ferrari',
            id: 403,
            price: 335000,
            type: 'Grand Tourer',
            horsepower: 789,
            year: 2022,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'A V12 grand tourer that blends Ferrari performance with long-distance comfort.'
        },
        {
            model: 'Portofino M',
            brand: 'Ferrari',
            img: 'Pins/ferrari4.jpg',
            keyword: 'ferrari',
            id: 404,
            price: 226000,
            type: 'Convertible',
            horsepower: 612,
            year: 2023,
            fuel: 'Petrol',
            transmission: 'Automatic',
            description: 'Elegant and powerful convertible offering an open-air Ferrari experience.'
        },
        {
            model: 'LaFerrari',
            brand: 'Ferrari',
            img: 'Pins/ferrari5.jpg',
            keyword: 'ferrari',
            id: 405,
            price: 1500000,
            type: 'Hypercar',
            horsepower: 950,
            year: 2015,
            fuel: 'Hybrid',
            transmission: 'Automatic',
            description: 'Ferrari’s legendary hybrid hypercar — an engineering masterpiece limited in production.'
        }
    ],

    tesla: [
        {
            model: 'Model S Plaid',
            brand: 'Tesla',
            img: 'Pins/tesla1.jpg',
            keyword: 'tesla',
            id: 301,
            price: 109000,
            type: 'Sedan',
            horsepower: 1020,
            year: 2024,
            fuel: 'Electric',
            transmission: 'Single-Speed',
            description: 'The quickest production car ever made, with futuristic features and zero emissions.'
        },
        {
            model: 'Model 3',
            brand: 'Tesla',
            img: 'Pins/tesla2.jpg',
            keyword: 'tesla',
            id: 302,
            price: 49000,
            type: 'Sedan',
            horsepower: 480,
            year: 2023,
            fuel: 'Electric',
            transmission: 'Single-Speed',
            description: 'Affordable electric sedan with long range and cutting-edge technology.'
        },
        {
            model: 'Model X',
            brand: 'Tesla',
            img: 'Pins/tesla3.jpg',
            keyword: 'tesla',
            id: 303,
            price: 99900,
            type: 'SUV',
            horsepower: 1020,
            year: 2023,
            fuel: 'Electric',
            transmission: 'Single-Speed',
            description: 'Tesla’s luxury SUV with Falcon Wing doors and unmatched performance.'
        },
        {
            model: 'Model Y',
            brand: 'Tesla',
            img: 'Pins/tesla4.jpg',
            keyword: 'tesla',
            id: 304,
            price: 52000,
            type: 'SUV',
            horsepower: 455,
            year: 2024,
            fuel: 'Electric',
            transmission: 'Single-Speed',
            description: 'Compact electric SUV that combines practicality with Tesla performance.'
        },
        {
            model: 'Cybertruck',
            brand: 'Tesla',
            img: 'Pins/tesla5.jpg',
            keyword: 'tesla',
            id: 305,
            price: 69900,
            type: 'Truck',
            horsepower: 800,
            year: 2025,
            fuel: 'Electric',
            transmission: 'Single-Speed',
            description: 'Bold stainless-steel pickup designed for durability, performance, and futuristic looks.'
        }
    ]
};



const searchForm = document.getElementById('search-form')
const showRoom = document.querySelector('.show-room')
const carsContainer = document.querySelector('.cars-container')
const intro = document.querySelector('.intro')
const notFound = document.querySelector('.not-found')

const logo = document.querySelector('.logo')
const overlay = document.querySelector('.overlay')
const links = document.querySelectorAll('.nav-bar a')

searchForm.addEventListener('submit', searchCar)

let foundCars = []
let searchedCar = ''

function searchCar(e) {
    e.preventDefault()
    const searchInput = document.getElementById('search-input')
    if (!searchInput.value) {

        carsContainer.innerHTML = ''
        showRoom.classList.remove('active')
        intro.classList.add('active')

        document.body.style.backdropFilter = 'blur(0)'
        showRoom.style.background = 'transparent'

        return
    }

    foundCars = []

    const carSearch = searchInput.value.trim()
    let found = false

    Object.keys(cars).forEach(brand => {
        if (brand.startsWith(carSearch)) {
            searchedCar = carSearch
            document.body.style.backdropFilter = 'blur(3px)'
            cars[brand].forEach(car => {
                foundCars.push(car)
                found = true
            })

            logo.classList.remove('active')
            links[0].classList.remove('active')
            displayCars()
        }
    })

    if (!found) {
        carsContainer.innerHTML = ''
        intro.classList.add('active')
        showRoom.classList.remove('active')
        document.body.style.backdropFilter = 'blur(0)'
        showRoom.style.background = 'transparent'

        notFound.style.opacity = 1
        notFound.style.visibility = 'visible'
        document.getElementById('search-input').value = ''
        document.getElementById('search-input').focus()
        setTimeout(() => {
            notFound.opacity = 0
            notFound.style.visibility = 'hidden'
        }, 2000)
    }

}


function displayCars() {
    showRoom.classList.add('active')
    showRoom.style.background = 'hsl(0, 0%, 0%, 50%)'
    intro.classList.remove('active')

    showRoom.innerHTML = `<p class="search-result">Search Result: ${foundCars.length} Cars Found for '<span>${searchedCar}</span>'</p>`

    carsContainer.innerHTML = foundCars.map(car => `
        <div class="car">
            <div class="img">
                <img src="${car.img}" alt="">
            </div>
            <div class="desc">
                <h1 style="grid-area: brand;">${car.brand}</h1>
                <h1 style="grid-area: model;">${car.model}</h1>
                <p style="grid-area: price;"><span>Price</span>: $${car.price}</p>
                <p style="grid-area: type;"><span>Type</span>: ${car.type}</p>
                <p style="grid-area: hp;"><span>Horsepower</span>: ${car.horsepower}</p>
                <p style="grid-area: year;"><span>Year</span>: ${car.year}</p>
                <p style="grid-area: fuel;"><span>Fuel</span>: ${car.fuel}</p>
                <p style="grid-area: tran;"><span>Transmission</span>: ${car.transmission}</p>
                <p style="grid-area: desc;"><span>Description</span>: ${car.description}</p>
            </div>
        </div>`
    ).join('')

    showRoom.append(carsContainer)
}



logo.addEventListener('click', () => {
    if (!intro.classList.contains('active')) {

        setTimeout(() => {
            resetAllActive()
            intro.classList.add('active')

        }, 1000)

        overlay.style.top = 0
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'

        setTimeout(() => {
            overlay.style.opacity = 0
            overlay.style.visibility = 'hidden'
        }, 1000)
        setTimeout(() => {

            overlay.style.top = '-100%'
        }, 2000)
    }
})

links[0].addEventListener('click', () => {
    if (!intro.classList.contains('active')) {
        resetAllActive()
        intro.classList.add('active')

        overlay.style.top = 0
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'

        setTimeout(() => {
            overlay.style.opacity = 0
            overlay.style.top = '-100%'
            overlay.style.visibility = 'hidden'
        }, 1000)
    }
})


function resetAllActive() {
    intro.classList.remove('active')
    showRoom.classList.remove('active')
    document.body.style.backdropFilter = 'blur(0)'
    showRoom.style.background = 'transparent'
    document.getElementById('search-input').value = ''

}