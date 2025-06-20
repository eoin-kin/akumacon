import React from "react";
import Navigation from "../Components/Navigation";
import { Container, Tabs, Tab } from "react-bootstrap";
import Bottom from "../Components/Bottom.jsx";

const Gallery = () => {
  const years = ["2018", "2019", "2020", "2023", "2024", "2025"];

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section className="py-5 bg-highlight text-center">
        <Container>
          <h1 className="text-primary-custom text-shadow">Gallery</h1>
          <p className="lead text-dark">Browse our event highlights by year</p>
        </Container>
      </section>

      {/* Gallery Tabs Section */}
      <Container className="info-page py-5">
        <h1 className="text-center mb-5">Yearly Highlights</h1>

        <Tabs
          defaultActiveKey="2025"
          id="gallery-tabs"
          className="mb-5 info-tabs"
          fill
        >
          {years.map((year) => (
            <Tab eventKey={year} title={year} key={year}>
              <div className="">
                <div className="row">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                      <div className="card shadow-sm">
                        <img
                          src={`https://via.placeholder.com/300x200?text=${year}+Image+${
                            idx + 1
                          }`}
                          className="card-img-top"
                          alt={`Placeholder ${year}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </Container>
      <Bottom />
    </div>
  );
};

export default Gallery;
