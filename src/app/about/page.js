import NavBar from "@/Components/NavBar";
import  Story from "@/Components/About/Story";
import Make from "@/Components/About/Make";

export default function About() {
    return (
        <>
            <div className="about-us">
                <div className="container-fulid">
                    
                </div>
                <NavBar />

                <div className="about-us-content">
                    <div className="text">
                        <h1>About Us</h1>
                        <p>
                            <span className="home">Home /</span>
                            <span className="about">About Us</span>
                        </p>
                    </div>
                </div>
                <Story />
                <Make />
            </div>
        </>
    )
}