import Image from "next/image"

import ManImg from "@/Image/man.jpg"

export default function Make() {
    return (
        <>
            <div className="make-section">
                <div className="box-all">
                    <div className="item-img">
                        <Image src={ManImg} alt="Man" />
                    </div>
                    <div className="item-text">
                        <h3>Making it all make sense.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.</p>
                        {/* < */}
                    </div>
                </div>
            </div>
        </>
    )
}