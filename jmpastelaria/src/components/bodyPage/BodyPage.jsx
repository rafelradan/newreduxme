
import './style.scss'

import WhatsAppIcon from '../../assets/WhatsApp.png'
import PizzaTopPage from '../../assets/Foto.svg'

function BodyPage() {
  return (
    <div className="body">

        <header>
            <div className='titles'>
                <h4>BOAS-VINDAS A DOCTORCARE</h4>
                <h1>Assistência médica simplificada para todos</h1>
                <p>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
            </div>

            <div className='midle'>
                <button>
                    <img src={WhatsAppIcon} alt='Icon WhatsApp' />
                    AGENDE SUA CONSULTA
                </button>

                <img className='img-pizza' src={PizzaTopPage} alt='Piza hot' />
            </div>

            <div className='nubersInformations'>
                <div className='information'>
                    <h3>+3.500</h3>
                    <p>Clientes atedidos</p>
                </div>

                <div className='information'>
                    <h3>+15</h3>
                    <p>Especialistas disponíveis</p>
                </div>

                <div className='information'>
                    <h3>+100</h3>
                    <p>Anos no mercado</p>
                </div>
            </div>

        </header>

      
    </div>
  );
}

export default BodyPage;
