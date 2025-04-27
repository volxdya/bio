import {useEffect, useState} from 'react';
import {ISidebar, itemsSidebar} from '../../other/items-sidebar';
import './MainPage.css';
import dayjs from 'dayjs';

export default function MainPage() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [experience, setExperience] = useState("");

    const handleMouseMove = (e: any) => {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();

        const x = e.clientX - (cardRect.left + cardRect.width / 2);
        const y = e.clientY - (cardRect.top + cardRect.height / 2);

        const rotateX = (-y / 15).toFixed(2);
        const rotateY = (x / 15).toFixed(2);

        setRotateX(Number(rotateX));
        setRotateY(Number(rotateY));
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    useEffect(() => {
        const currentDate: number[] = dayjs().format('YYYY-MM').split('-').map((item: string) => Number(item));
        const startDate: number[] = [2023, 8];
        const years: number = currentDate[0] - startDate[0];
        const months: number = (currentDate[1] - startDate[1]) / 12;

        setExperience((years + months).toFixed(1));
    }, []);

    return (
        <div className='d-flex align-items-center justify-content-center main-card w-100'>
            <div className='container-card py-5'
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}
                 style={{transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}>
                <div className='d-flex justify-content-center'>
                    <img src="https://i.pinimg.com/564x/1d/aa/fd/1daafdd0db187067f59279b6f2bbb373.jpg"
                         className='img-card'/>
                </div>

                <div className='d-flex justify-content-center'>

                    <div>
                        <p className='text-center pt-3 text-card'>volxdya</p>

                        <div className='d-flex activity mt-3 gap-3'>
                            <div className='activity-badge'>NodeJS Developer</div>
                            <div className='activity-badge'>Some UX/UI Designer</div>
                        </div>

                        <div className='mt-4 other-text text-center pt-3'>
                            <p>{experience} years of experience in development</p>
                            <p>He / Him</p>
                        </div>

                        <div className='d-flex justify-content-center links mt-4 gap-2'>
                            {itemsSidebar.map((item: ISidebar) => (
                                <a
                                    href={item.link}
                                    target={'_blank'}
                                    data-bs-toggle="tooltip"
                                    title={item.preTitle}
                                >
                                    {item.component}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

