import Image from "next/image"

import Story1 from "@/Image/news2.jpg"

export default function Story() {
    return (
        <>
            <div className="story-box">
                <div className="title">
                    <h2>Our Story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.
                    </p>
                </div>
                <div className="container-fluid">
                    <div className="box-item">
                        <div className="item">
                            <div className="img-box">
                                <Image src={Story1} alt="story" />
                            </div>
                            <div className="text-1">
                                <h3>Spiciatis unde omnis iste</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque laudantium, totam rem aperiam per spiciatis unde omnis iste natus.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-box">
                                <Image src={Story1} alt="story" />
                            </div>
                            <div className="text-1">
                                <h3>Spiciatis unde omnis iste</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque laudantium, totam rem aperiam per spiciatis unde omnis iste natus.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-box">
                                <Image src={Story1} alt="story" />
                            </div>
                            <div className="text-1">
                                <h3>Spiciatis unde omnis iste</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptaac cusantium doloremque laudantium, totam rem aperiam per spiciatis unde omnis iste natus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}