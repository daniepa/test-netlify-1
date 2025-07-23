import { useContext } from 'react';
import './Hero.css';
import { FaRegStar, FaStar } from "react-icons/fa6";
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router';

export default function Hero({ hero, toggleFavorite }) {

    const { isDarkMode } = useContext(ThemeContext);

    return (
        <>
            <div className={isDarkMode ? 'card-hero dark' : 'card-hero light'}>
                <h3>
                    <Link to={`/detail/${hero.id}`}>
                        {hero.name}
                    </Link>
                </h3>

                <span onClick={toggleFavorite}>
                    {hero.isFavorite ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )}
                </span>

            </div>
        </>
    );
}