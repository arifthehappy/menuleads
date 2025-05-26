import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  const testimonials = [
    {
      quote: "MenuLeads has transformed our dining experience. Our customers love the interactive menus, and we've seen a 20% increase in average check size since implementation.",
      name: "Sarah Johnson",
      role: "Owner",
      company: "The Urban Table",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The gamified ad platform has created a new revenue stream for our restaurant while actually enhancing our customers' experience. It's been a win-win.",
      name: "Michael Chen",
      role: "General Manager",
      company: "Fusion Kitchen",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a brand partner, we've seen incredible engagement rates with MenuLeads. The contextual placement of our ads within the dining experience delivers amazing results.",
      name: "Jessica Williams",
      role: "Marketing Director",
      company: "Beverage Brands Inc.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const partners = [
    "Restaurant Group A",
    "Food Chain B",
    "Beverage Company C",
    "Dining Network D",
    "Hospitality Group E",
    "Tech Partner F"
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle mx-auto">
            Hear from restaurants and brands who have experienced the MenuLeads difference.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto">
            <img 
              src="https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="MenuLeads demo video" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/50 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white text-primary-900 flex items-center justify-center shadow-lg hover:bg-primary-50 transition-colors">
                <Play size={36} fill="currentColor" className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Navigation]}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card h-full flex flex-col">
                  <div className="mb-6">
                    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.4193 0H8.70968L0 15.4839V32H16.5161V15.4839H8.70968L17.4193 0ZM40 0H31.2903L22.5806 15.4839V32H39.0968V15.4839H31.2903L40 0Z" fill="#1E3A8A" fillOpacity="0.2"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-bold text-primary-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-8 gap-4">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-primary-900 flex items-center justify-center text-primary-900 hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-primary-900 flex items-center justify-center text-primary-900 hover:bg-primary-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Trusted by leading restaurants and brands</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white py-3 px-6 rounded-lg shadow-sm"
              >
                <p className="font-inter font-medium text-gray-400">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;