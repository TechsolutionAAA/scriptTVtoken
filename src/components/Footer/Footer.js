import './footer.css';
import img from '../../assets/logo-light.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_main'>
                <div className='footer_top'>
                    <div className='f_content'>
                        <div className='f_content_title'>
                            products
                        </div>
                        <ul>
                            <li>Script TV</li>
                            <li>Script Glass</li>
                            <li>Marketplace</li>
                            <li>dStorage</li>
                            <li>Script Blockchain</li>
                            <li>sADs</li>
                        </ul>
                    </div>
                    <div className='f_content'>
                        <div className='f_content_title'>
                            how it works
                        </div>
                        <ul>
                            <li>ScriptGLASS explained</li>
                            <li>ScriptTV - how to earn</li>
                        </ul>
                    </div>
                    <div className='f_content'>
                        <div className='f_content_title'>
                            community
                        </div>
                        <ul>
                            <li>Discord</li>
                            <li>Telegram</li>
                            <li>Twitter</li>
                            <li>Blog</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className='f_content'>
                        <div className='f_content_title'>
                            about script.tv
                        </div>
                        <ul>
                            <li>Script TV</li>
                            <li>Script Glass</li>
                            <li>Marketplace</li>
                            <li>dStorage</li>
                            <li>Script Blockchain</li>
                            <li>sADs</li>
                        </ul>
                    </div>
                    <div className='f_content'>
                        <div className='f_content_title'>
                            privacy
                        </div>
                        <ul>
                            <li>Trams of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookies Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer_end'>
                <div className='f_left'>
                    <img src={img} alt="" />
                    <p>contact@script.tv</p>
                </div>
                <div className='f_right'>
                    Copyright © 2022 scripttv
                </div>
            </div>
        </div>
    )
}