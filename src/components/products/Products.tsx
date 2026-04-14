import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Products.css';

const variants = [
  { num: '01', tag: 'For Plot Developers', title: 'BrickBytes Township', desc: 'Digitize entire townships with interactive 3D plot maps. Buyers explore, compare, and book plots without setting foot on site. Complete with live availability, broker tools, and AI assistance.', link: 'https://brickbytes360-bd9c.vercel.app/' },
  { num: '02', tag: 'For Flat Developers', title: 'BrickBytes Flats',    desc: 'Built for residential apartment projects. Showcase floor plans, 360° interiors, and unit-by-unit availability in a stunning digital experience buyers access from anywhere.',                 link: 'https://brickbytes360-bd9c.vercel.app/' },
];

export function Products() {
  return (
    <section className="products section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Our Products</p>
          <h2 className="section-title">One platform, two versions</h2>
          <p className="section-subtitle">
            Fully customized for your project type — whether you're selling plots in a township or flats in a high-rise.
          </p>
        </motion.div>

        <div className="products-grid">
          {variants.map((v, i) => (
            <motion.a
              key={v.title}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'var(--bg-tertiary)', y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98, y: 0 }}
            >
              <div className="product-card-top">
                <span className="product-tag">{v.tag}</span>
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowUpRight size={16} className="product-arrow" />
                </motion.div>
              </div>
              <span className="product-num">{v.num}</span>
              <h3 className="product-title">{v.title}</h3>
              <p className="product-desc">{v.desc}</p>
              <span className="product-cta">
                View Demo <ArrowUpRight size={13} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
