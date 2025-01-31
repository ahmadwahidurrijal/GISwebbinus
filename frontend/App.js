import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/request" element={<Request />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
