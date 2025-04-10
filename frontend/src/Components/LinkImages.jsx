import React, { useState } from 'react';
import { Carousel, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function LinkImages({items}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="my-4">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
                {items.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <Link to={item.link}>
                            <img
                                className="d-block w-100"
                                src={item.image}
                                alt={item.title}
                                style={{ height: '400px', objectFit: 'cover' }}
                            />
                            <Carousel.Caption className="bg-dark bg-opacity-50 rounded">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>


        </Container>
    )
}

export default LinkImages;