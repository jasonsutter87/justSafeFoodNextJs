import React from 'react';
import builder, { BuilderComponent } from '@builder.io/react';

// Define the Builder.io component name for your Hero section
const HERO_COMPONENT_NAME = 'hero';

// Function to fetch Builder.io content
const fetchHeroContent = async () => {
  try {
    const content = await builder.get('page', { name: HERO_COMPONENT_NAME });
    return content.data; // You may need to adapt this based on your data structure
  } catch (error) {
    console.error('Error fetching content from Builder.io', error);
    return null;
  }
};

const HeroSection = () => {
  const [heroContent, setHeroContent] = React.useState(null);

  React.useEffect(() => {
    fetchHeroContent().then((data) => {
      setHeroContent(data);
    });
  }, []);

  return (
    <section id="inner-full-size-hero">
      <div className="site-container-1340">
        <div className="row">
          <div className="col-12 col-lg-6 content">
            {heroContent ? (
              <>
                <h1>{heroContent.title}</h1>
                <h6>{heroContent.subtitle}</h6>
                <div className="py-4">
                  <a href={heroContent.buttonLink} className="btn-primary btn-size-lg">
                    {heroContent.buttonText}
                  </a>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <div className="inner-hero-photo">
        {heroContent && (
          <img src={heroContent.imageSrc} alt={heroContent.imageAlt} />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
