import React, { useState } from 'react';

import s from './creatingArtwork.module.scss';

import Button from '../../common/Button';
import b from '../../common/button.module.scss';

import close from '../../../images/svg/close.svg';

interface CreatingArtworkProps {
    isOpen: boolean;
}

const CreatingArtwork = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [step, setStep] = useState(1);

    const closeModal = () => {
        setModalOpen(false);
    }
    const setStepStyle = (index: number) => {
        const stepStyle = {
            background: step > index ? 'linear-gradient(270deg, #8743FF 0%, #4136F1 100%)' : 'rgba(255, 255, 255, 0.20)'
        }
        return stepStyle;
    }

    let stepContent: JSX.Element | null = null;

    switch (step) {
        case 1:
            stepContent = <div className={s.step1}>
                <span>Upload the artwork you will be selling</span>
                <input
                    type='file'
                >
                </input>
                <Button name='Next step' style={b.button} />
            </div>
            break;
        case 2:
            stepContent = <div className={s.step2}>

            </div>
            break;
    }

    return (
        modalOpen ?
            <div className={s.wrapper}>
                <div className={s.creatingArtwork}>
                    <button className={s.creatingArtwork__close} onClick={closeModal}></button>
                    <h2>Creating artwork</h2>
                    <div className={s.creatingArtwork__steps}>
                        <div>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <span style={setStepStyle(index)}></span>
                            ))}
                        </div>
                        <span>Step {step} from 3</span>
                    </div>
                    {stepContent}
                </div>
            </div>
            : null
    );
}

export default CreatingArtwork;