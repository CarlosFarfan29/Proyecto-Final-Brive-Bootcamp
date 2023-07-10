import {useNavigate} from 'react-router-dom';

export function Footer(){
    const navigate = useNavigate();

    return(
    
    <div className='clearfix '>
        <footer>
        <img onClick={() => navigate("/home")} src="/img/logo.png" alt='Logo' className='Logo'/>
        <p>Terms + Conditions</p>
        <p>Karla Mariela Rios Díaz</p>

        <img src="/img/facebook.png" alt='facebook' className='Logo-footer'/>
        <img src="/img/twitter.png" alt='twitter' className='Logo-footer'/>
        <img src="/img/linkedin.png" alt='linkedin' className='Logo-footer'/>
        <img src="/img/instagram.png" alt='instagram' className='Logo-footer'/>
        <img src="/img/tik-tok.png" alt='tik-tok' className='Logo-footer'/>


        </footer>
      </div>
      )
}