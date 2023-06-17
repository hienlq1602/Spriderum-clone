import React from 'react';
import './partners.scss';
import oneMount from '../../../../common/assets/aboutImg/partners/oneMount.svg';
import britishCouncil from '../../../../common/assets/aboutImg/partners/britishCouncil.svg';
import tekexperts from '../../../../common/assets/aboutImg/partners/tekexperts.svg';
import viettlot from '../../../../common/assets/aboutImg/partners/vietlott.svg';
import infina from '../../../../common/assets/aboutImg/partners/infina.svg';
import aecc from '../../../../common/assets/aboutImg/partners/aecc.svg';
import appota from '../../../../common/assets/aboutImg/partners/appota.svg';
import thschool from '../../../../common/assets/aboutImg/partners/thschool.svg';
import rmit from '../../../../common/assets/aboutImg/partners/rmit.svg';
import ows from '../../../../common/assets/aboutImg/partners/ows.svg';
import topcv from '../../../../common/assets/aboutImg/partners/topcv.svg';
import voizfm from '../../../../common/assets/aboutImg/partners/voicefm.svg';
import vibeji from '../../../../common/assets/aboutImg/partners/vibeji.svg';
import fonos from '../../../../common/assets/aboutImg/partners/fonos.svg';
import yan from '../../../../common/assets/aboutImg/partners/yan.svg';
import vng from '../../../../common/assets/aboutImg/partners/vng.svg';
import vietretreat from '../../../../common/assets/aboutImg/partners/vietretreat.svg';
import spite from '../../../../common/assets/aboutImg/partners/sprite.svg';
import sgptourismboard from '../../../../common/assets/aboutImg/partners/sgptourismboard.svg';

const partners = () => {

    const imgArr = [oneMount, britishCouncil, tekexperts, viettlot, infina, aecc, appota, 
                thschool, rmit, ows, topcv, voizfm, vibeji, fonos, yan, vng, vietretreat, spite, sgptourismboard];

    return (
        <div id="partners" className='about__partners'>
            <h1 className="partners__title">
                Các đối tác
            </h1>
            <div className='partners__img'>
                {imgArr.map((img, index) => {
                    return <img key={index} src={img} alt='partners image' />
                })}
            </div>
        </div>
    );
};

export default partners;