import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Survey from '../components/survey'






export default function More_Info() {
    return (
        <main>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                 <Survey />
            </div>
            <Footer />
        </main>
    )
}