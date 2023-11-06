import React, { useEffect, useState } from 'react';
import { builder } from '@builder.io/sdk';

builder.init('72928a40f8bd4348b16f9b265fa75060');

const BuilderHeroComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    builder
    .get('Home_Hero')
    .promise()
    .then(({ data }) => {
        console.log(data)
        setData(data); // Update the state with the fetched data
      })
      .catch(error => {
        // Handle the error, e.g., set an error state or display an error message.
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div>
      {data ? (
          <section id="index-hero-section" style={{ backgroundImage: `url(${data.backgroundImage})` }}>
            <div className="site-container-1340">
                <div className="row">
                    <div className="col-12 col-md-5 t-c-l">
                        <h1>{data.title}</h1>
                        <h6 className="d-none d-lg-block">{data.subtitle}</h6>
                        <div className="py-4">
                            <a href={data.buttonLink} className="btn-primary btn-primary-alt btn-size-lg">{data.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};



export default BuilderHeroComponent;

