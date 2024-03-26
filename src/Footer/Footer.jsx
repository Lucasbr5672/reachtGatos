import './Footer.css'
import dogIcon from '/img-01.png'
import gato02 from '/img-02 (1).png'
import gato03 from '/img-03.png'
import gato04 from '/img-04.png'
import gato05 from '/img-05.png'
import gato06 from '/img-06.png'
import gato07 from '/img-07.png'
import gato08 from '/img-08.png'
import gato09 from '/img-09.png'
import gato10 from '/img-10.png'
import gato11 from '/img-11.png'
import gato12 from '/img-12.png'


const Footer = () => {
    return (
        <footer className='meuFooter'>
            <img src={dogIcon} alt="" />
            <img src={gato02}  alt="" />
            <img src={gato03} alt="" />
            <img src={gato04} alt="" />
            <img src={gato05} alt="" />
            <img src={gato06} alt="" />
            <img src={gato07} alt="" />
            <img src={gato08} alt="" />
            <img src={gato09} alt="" />
            <img src={gato10} alt="" />
            <img src={gato11} alt="" />
            <img src={gato12} alt="" />
            <header className='meuHeader'>

            <p>&copy; Todos os direitos reservados</p>
            </header>
        </footer>
    )
}

export default Footer