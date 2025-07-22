import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Certificate() {
  const containerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  const certificates = [
    {
      title: 'Excel Course Certified by JPMorgan Chase & Co.',
      img: '/c3.png',
      link:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20%26%20Co./XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20%26%20Co._7HJQS9hnrMDTMyPAP_1686558247938_completion_certificate.pdf',
    },
    {
      title: 'Accenture North America - Data Analytics and Visualization Job Simulation',
      img: '/accenture.png',
      link:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_7HJQS9hnrMDTMyPAP_1726500393884_completion_certificate.pdf',
    },
    {
      title: 'Certificate of Participation in TATA Crucible Campus Quiz 2024',
      img: '/c4.png',
      link: 'https://unstop.com/certificate-preview/e74d8854-6dec-4ec2-85ec-111d95eb96bb',
    },
    {
      title: 'Flipkart GRID 6.0 - Software Development Track Participant',
      img: '/c2.png',
      link: 'https://unstop.com/certificate-preview/9a90fe6c-100c-4b42-a1d5-0afd77755851',
    },
  ]

  return (
    <div
      ref={containerRef}
      className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-4 sm:px-6 md:px-12 font-sans"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="/certificate.jpg"
          alt="Certificate Icon"
          className="w-10 h-10 mb-3 rounded-full border border-gray-300"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center">
          Certi<span className="text-gray-600">fi</span>cates
        </h1>
        <p className="text-gray-500 mt-2 text-sm text-center max-w-lg">
          A few of my certifications that reflect my hands-on learning and achievements.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-contain mb-4 rounded-md bg-white"
              />
              <h2 className="text-md font-medium text-gray-700 text-center px-2">{cert.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Certificate
