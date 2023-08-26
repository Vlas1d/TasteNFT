import React, { useState, useEffect } from 'react';

import s from './creatingArtwork.module.scss';

import Button from '../../common/Button';
import b from '../../common/button.module.scss';

import close from '../../../images/svg/close.svg';
import imageIcon from '../../../images/svg/image.svg';
import sticker from '../../../images/svg/sticker.svg';
import blur from '../../../images/svg/blur.svg';

interface CreatingArtworkProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreatingArtwork = (props: CreatingArtworkProps) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        art: '',
        name: '',
        description: '',
        type: 'Auction',
        copies: 1,
        sum: 1
    });
    let openModal = props.isOpen;
    useEffect(() => {
        openModal = props.isOpen;
        if (openModal) setModalOpen(openModal);
    });

    //-------BUTTON-----------------------
    const closeModal = (): void => {
        props.onClose();
    }
    const nextStep = (): void => {
        setStep(step + 1);
    }
    const plusCopies = (): void => {
        setFormData({ ...formData, copies: formData.copies + 1 });
    }
    const minusCopies = (): void => {
        if (formData.copies > 1) { setFormData({ ...formData, copies: formData.copies - 1 }); }
    }


    //-------------------------------------
    const setStepStyle = (index: number) => {
        const stepStyle = {
            background: step > index ? 'linear-gradient(270deg, #8743FF 0%, #4136F1 100%)' : 'rgba(255, 255, 255, 0.20)'
        }
        return stepStyle;
    }

    let stepContent: JSX.Element | null = null;

    //-------HANDLE-----------------------
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    const imageData = e.target.result as string;
                    setFormData({ ...formData, art: imageData });
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    switch (step) {
        case 1:
            stepContent = <div className={s.step1}>
                <span>Upload the artwork you will be selling</span>
                <div className={s.step1__image}>
                    <input
                        type='file'
                        name='art'
                        onChange={handleImageChange}
                        style={formData.art ? { opacity: '0' } : {}}
                    />
                    {formData.art ? (<img src={formData.art} alt='art' />) : null}
                </div>
                <div className={s.step1__error}>Error</div>
                <button className={b.button} onClick={nextStep}>Next step</button>
            </div>
            break;
        case 2:
            stepContent = <div className={s.step2}>
                <span>Censor the public version of artwork, if it contains 18+ content</span>
                <div className={s.step2__image}>
                    <img src={formData.art} alt='art' />
                </div>
                <div className={s.step2__panel}>
                    <img src={imageIcon} alt='image' />
                    <img src={sticker} alt='sticker' />
                    <img src={blur} alt='blur' />
                </div>
                <button className={b.button} onClick={nextStep}>Next step</button>
            </div>
            break;
        case 3:
            stepContent = <div className={s.step3}>
                <div>
                    <label>Artwork name</label>
                    <input
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className={s.step3__type}>
                    <label>Type</label>
                    <div className={s.step3__radio}>
                        <span>
                            <div>
                                <input
                                    id='Auction'
                                    type='radio'
                                    name='type'
                                    value='Auction'
                                    onChange={handleChange}
                                    checked={formData.type === 'Auction'}
                                />
                            </div>
                            <label htmlFor='Auction'>Auction</label>
                        </span>
                        <span>
                            <div>
                                <input
                                    id='Sale'
                                    type='radio'
                                    name='type'
                                    value='Sale'
                                    onChange={handleChange}
                                    checked={formData.type === 'Sale'}
                                />
                            </div>
                            <label htmlFor='Sale'>Sale</label>
                        </span>
                    </div>
                    <div className={s.step3__data}>
                        <div>
                            <span>Copies</span>
                            <span className={s.step3__copies}>
                                <button
                                    style={formData.copies === 1 ? { color: 'rgba(255, 255, 255, 0.50)' } : {}}
                                    onClick={minusCopies}>
                                    -
                                </button>
                                <input
                                    type='number'
                                    name='copies'
                                    value={formData.copies}
                                    onChange={handleChange}
                                />
                                <button onClick={plusCopies}>+</button>
                            </span>
                        </div>
                        <div>
                            {formData.type === 'Auction' ? (<>
                                <span> Min.sum</span>
                                <span className={s.step3__sum}>
                                    <input
                                        type='number'
                                        name='sum'
                                        value={formData.sum}
                                        onChange={handleChange}
                                    /><span className={s.step3__taste}>TASTE</span><span>(1308.54$)</span>
                                </span>
                            </>) : <>
                                <span> Sum</span>
                                <span className={s.step3__sum}>
                                    <input
                                        type='number'
                                        name='sum'
                                        value={formData.sum}
                                        onChange={handleChange}
                                    /><span className={s.step3__taste}>TASTE</span><span>(1308.54$)</span>
                                </span>
                            </>
                            }
                        </div>
                    </div>
                    {formData.type === 'Auction' ? (<>
                        <span>Selling will end</span>
                        <div className={s.step3__time}>Set timer</div>
                    </>) : <></>}
                </div>
                <button className={b.button} onClick={closeModal}>Finish creating</button>
            </div >
            break;
    }

    return (
        props.isOpen ?
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