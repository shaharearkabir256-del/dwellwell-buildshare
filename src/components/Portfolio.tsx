import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import constructionImage from '@/assets/construction-1.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Family Estate',
      location: 'Redmond, WA',
      completedDate: 'December 2023',
      image: constructionImage,
      description: 'A stunning 4,000 sq ft contemporary home featuring open floor plans, floor-to-ceiling windows, and sustainable building materials.',
      features: ['4 Bedrooms', '3.5 Bathrooms', 'Smart Home Technology', 'Solar Panels'],
      type: 'Custom Build'
    },
    {
      id: 2,
      title: 'Urban Townhouse Complex',
      location: 'Capitol Hill, Seattle',
      completedDate: 'August 2023',
      image: constructionImage,
      description: 'A modern townhouse development with 8 units, featuring contemporary design and energy-efficient systems.',
      features: ['8 Units', 'LEED Certified', 'Rooftop Gardens', 'Underground Parking'],
      type: 'Development'
    },
    {
      id: 3,
      title: 'Luxury Penthouse Renovation',
      location: 'Downtown Bellevue',
      completedDate: 'October 2023',
      image: constructionImage,
      description: 'Complete renovation of a 3,500 sq ft penthouse with premium finishes and panoramic city views.',
      features: ['Panoramic Views', 'Italian Marble', 'Wine Cellar', 'Private Elevator'],
      type: 'Renovation'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construction{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our award-winning construction projects. From custom homes to large-scale 
            developments, we bring architectural visions to life with precision and craftsmanship.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Completed {project.completedDate}</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90">
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="px-6">
                    3D Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center glass-card p-12 rounded-3xl animate-fade-up">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream Home?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert team turn your vision into reality. From initial design 
            to final construction, we handle every detail with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium px-8">
              Start Your Project
            </Button>
            <Button variant="outline" className="px-8">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;