import photo from './assets/image.png'

function Card() {
    return (
        <div>
            <div className="card">
                <img src={photo} width="150" height="150" />
                <h2>Томирис</h2>
                <h4>Про меня</h4>
            </div>

            <div className="about"> 
                <p>Привет! Меня зовут Томирис.</p>
                <p>Я учусь в колледже и изучаю IT.</p>
                <p>Люблю слушать музыку и гулять.</p>
            </div>
        </div>
    )
}

export default Card
