import { useState } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Classic Cappuccino', price: 'Rs. 220', category: 'Coffee', desc: 'Rich espresso, steamed milk and a silky foam finish.' },
  { name: 'Caramel Latte', price: 'Rs. 250', category: 'Coffee', desc: 'Smooth espresso and milk with a gentle caramel sweetness.' },
  { name: 'Iced Mocha', price: 'Rs. 280', category: 'Cold Drinks', desc: 'Chilled coffee, chocolate and creamy milk over ice.' },
  { name: 'Chocolate Croissant', price: 'Rs. 180', category: 'Bakery', desc: 'Buttery flaky pastry filled with rich chocolate.' },
  { name: 'Blueberry Muffin', price: 'Rs. 160', category: 'Bakery', desc: 'Soft homemade muffin packed with blueberries.' },
  { name: 'Avocado Toast', price: 'Rs. 320', category: 'Food', desc: 'Toasted sourdough, avocado, herbs and fresh vegetables.' }
]

const posts = [
  { title: '5 Reasons to Start Your Morning With Coffee', date: 'June 10, 2026', text: 'A simple guide to building a relaxing morning coffee routine.' },
  { title: 'How to Choose the Right Café for Studying', date: 'June 16, 2026', text: 'Look for comfort, Wi-Fi, lighting, noise level and good refreshments.' },
  { title: 'Coffee and Community: Why Local Cafés Matter', date: 'June 22, 2026', text: 'Local cafés can become welcoming spaces for students, creators and neighbors.' }
]

function Header() {
  const location = useLocation()
  return (
    <header className="site-header">
      <Link className="logo" to="/">
        <span className="logo-mark">☕</span>
        <span>Bloom <b>&</b> Brew</span>
      </Link>
      <nav>
        {[
          ['/', 'Home'],
          ['/menu', 'Menu'],
          ['/blog', 'Blog'],
          ['/contact', 'Contact']
        ].map(([path, label]) => (
          <Link key={path} className={location.pathname === path ? 'active' : ''} to={path}>{label}</Link>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>Bloom & Brew Café</strong>
        <p>A fictional café brand created for an academic Digital Marketing project.</p>
      </div>
      <div>
        <strong>Quick Links</strong>
        <p><Link to="/">Home</Link> · <Link to="/menu">Menu</Link> · <Link to="/blog">Blog</Link></p>
      </div>
      <div>
        <strong>Contact</strong>
        <p>Kathmandu, Nepal<br />hello@bloomandbrew.example</p>
      </div>
    </footer>
  )
}

function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">COFFEE • COMMUNITY • COMFORT</p>
          <h1>Your Cozy Kathmandu Café for Coffee & Connection</h1>
          <p className="lead">
            Enjoy freshly brewed coffee, homemade bakery treats and a cozy space
            in Kathmandu to study, work, meet friends or simply slow down.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/menu">Explore Our Menu</Link>
            <Link className="btn secondary" to="/contact">Visit / Contact</Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="cup">☕</div>
          <h3>Freshly brewed daily</h3>
          <p>Small-batch coffee • Homemade bakery • Cozy atmosphere</p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHY BLOOM & BREW?</p>
        <h2>Made for slow mornings and productive afternoons.</h2>
        <div className="feature-grid">
          <article><span>☕</span><h3>Quality Coffee</h3><p>Carefully prepared espresso and specialty drinks for every coffee mood.</p></article>
          <article><span>🥐</span><h3>Fresh Bakery</h3><p>Simple, comforting pastries and snacks made to pair with your drink.</p></article>
          <article><span>🌿</span><h3>Cozy Space</h3><p>A welcoming environment for conversations, study sessions and creative work.</p></article>
        </div>
      </section>

      <section className="section tinted">
        <div className="split">
          <div>
            <p className="eyebrow">ABOUT THE PROJECT</p>
            <h2>Digital marketing in action.</h2>
            <p>This website is part of an academic Digital Marketing internship project. It demonstrates SEO-friendly website structure, content marketing, social media planning and basic conversion-focused design.</p>
            <Link className="text-link" to="/blog">Read our content →</Link>
          </div>
          <div className="stats">
            <div><b>SEO</b><span>On-page optimization</span></div>
            <div><b>CONTENT</b><span>Blog strategy</span></div>
            <div><b>SOCIAL</b><span>Campaign planning</span></div>
            <div><b>DATA</b><span>Analytics tracking plan</span></div>
          </div>
        </div>
      </section>
    </>
  )
}

function Menu() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(menuItems.map(x => x.category))]
  const filtered = filter === 'All' ? menuItems : menuItems.filter(x => x.category === filter)
  return (
    <section className="page section">
      <p className="eyebrow">OUR MENU</p>
      <h1>Fresh Coffee, Bakery & Food Menu in Kathmandu</h1>
      <p className="lead">
        Explore our selection of freshly brewed coffee, homemade bakery treats
        and comforting café food.
     </p>
      <div className="filters">{categories.map(c => <button key={c} className={filter === c ? 'selected' : ''} onClick={() => setFilter(c)}>{c}</button>)}</div>
      <div className="menu-grid">
        {filtered.map(item => <article className="menu-item" key={item.name}><div><span>{item.category}</span><h3>{item.name}</h3><p>{item.desc}</p></div><strong>{item.price}</strong></article>)}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="page section">
      <p className="eyebrow">BLOG & CONTENT</p>
      <h1>Café, Coffee & Lifestyle Tips</h1>
      <p className="lead">
       Discover coffee tips, café lifestyle ideas and helpful content from
       Bloom & Brew Café.
      </p>
      <div className="blog-grid">
        {posts.map(post => <article className="post" key={post.title}><div className="post-image">☕</div><div className="post-body"><small>{post.date}</small><h2>{post.title}</h2><p>{post.text}</p><span className="text-link">Read article →</span></div></article>)}
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  function submit(e) {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section className="page section">
      <div className="contact-grid">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Let's brew something good.</h1>
          <p className="lead">
            Contact Bloom & Brew Café in Kathmandu for questions, collaborations,
            feedback or café-related inquiries.
          </p>
          <div className="contact-info"><p><b>📍 Location</b><br />Kathmandu, Nepal</p><p><b>✉️ Email</b><br />hello@bloomandbrew.example</p><p><b>🕒 Hours</b><br />Sun–Fri, 8:00 AM–8:00 PM</p></div>
        </div>
        <form onSubmit={submit} className="contact-form">
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required name="message" rows="5" placeholder="Write your message..." /></label>
          <button className="btn primary" type="submit">Send Message</button>
          {sent && <p className="success">Thanks! This demo form has been submitted successfully.</p>}
        </form>
      </div>
    </section>
  )
}

function NotFound() {
  return <section className="section page"><h1>Page not found</h1><Link className="text-link" to="/">Return home →</Link></section>
}

export default function App() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/blog" element={<Blog />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Layout>
}