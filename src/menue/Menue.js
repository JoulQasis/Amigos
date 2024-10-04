import React from 'react';
import MenueCss from './Menue.module.css';

// Reusable Image Component
const MenuItem = ({ imageSrc, burgerName }) => (
    <div className={MenueCss.column}>
        <p className={MenueCss.burgerName}>{burgerName}</p>
        <img className={MenueCss.img} src={imageSrc} alt="Menu Item" />
    </div>
);

function Menue() {
    const menuItemsRow1 = [
        { src: require("./classic.jpg"), name: "Classic Burger" },
        { src: require("./chicken.jpg"), name: "Chicken Burger" },
        { src: require("./mini.jpg"), name: "Mini Burger" },
        { src: require("./special.jpg"), name: "Special Burger" },
    ];
    const menuItemsRow2 = [
        { src: require("./onionrings.jpg"), name: "Onion Rings" },
        { src: require("./fries.avif"), name: "French fries" },
        { src: require("./mini.jpg"), name: "Mini Burger" },
        { src: require("./special.jpg"), name: "Special Burger" },
    ];

    return (
        <div className={MenueCss.container}>
            <div className={MenueCss.headingContainer}>
                <h2 className={MenueCss.heading}>Burgers</h2>
            </div>
            <div className={MenueCss.row}>
                {menuItemsRow1.map((item, index) => (
                    <MenuItem
                        key={index}
                        imageSrc={item.src}
                        burgerName={item.name}
                    />
                ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className={MenueCss.headingContainer}>
                <h2 className={MenueCss.heading}>Side dishes</h2>
            </div>
            <div className={MenueCss.row}>
                {menuItemsRow2.map((item, index) => (
                    <MenuItem
                        key={index}
                        imageSrc={item.src}
                        burgerName={item.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menue;
