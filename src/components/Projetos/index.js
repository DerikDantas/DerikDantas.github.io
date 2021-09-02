import React from 'react';

import { Container } from './styles';
import Separator from '../../assets/Icons/separator.png'
import logoCBS from '../../assets/Images/logo-cbs.png'

function Projetos() {
    return (
        <Container id="projetos">
            <div className="box-titulo" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                <h1>PROJETOS</h1>
            </div>
            <p>Tenho orgulho de ter colaborado com algumas empresas incríveis:</p>

            <img src={Separator} alt="..." className="separator " />

            <div className="row my-5">
                <div className="col-md-6" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img className="logo-1" alt="CBS Energia" src={logoCBS} />
                </div>
                <div className="col-md-6" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                    <img className="logo-2" alt="Lework" src="https://i0.wp.com/lwk.com.br/wp-content/uploads/2020/08/logo-lwk.png" />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                    <img className="w-25" alt="Marry Perry Paris" src="https://www.marryperryparis.com.br/assets/wp-content/uploads/2020/04/logo-vertical.png" />
                </div>
                <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                    <img className="w-25" alt="T10 Bank" src="https://t10bankprodstorage.blob.core.windows.net/t10home/ART_T10Bank_Coral.png" />
                </div>
            </div>

            <p className="text" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">Projetos com linguagens HTML, CSS, JavaScript, PHP e Dart.<br />
                Além de plataformas e bibliotecas Bootstrap, PrestaShop e WordPress.</p>
            <a href="https://github.com/DerikDantas?tab=repositories" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" >Confira meu repositório de projetos</a>
        </Container>
    )
}

export default Projetos;