import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} className="logo" alt="Logo" />
        <h1>ShopEasy</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <section className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h2>Product 1</h2>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h2>Product 2</h2>
            <p>$29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h2>Product 3</h2>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 4" />
            <h2>Product 4</h2>
            <p>$49.99</p>
            <button>Add to Cart</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        &copy; 2024 ShopEasy. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
