import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="row d-flex mx-0">
                <div className="col-4 text-right">
                    logo
                </div>
                <div className="col-2">
                    <div>
                        0141 332 5533 <br></br>
                        info@grassgo.co.uk
                    </div>

                    <div>
                        social
                    </div>
                </div>
                <div className="col-2">
                    Hillington Business Centre <br></br>
                    15-17 Nasmyth Road South,<br></br>
                    G52 4RE, Glasgow<br></br>
                </div>
                <div className="col-4">
                    <div>
                        View on Google Maps
                    </div>
                    <div>
                        logo
                    </div>
                </div>

                <div className="col-12 text-center">
                    © 2021 Grassgo gardeners
                </div>
            </footer>
        )
    }
}
