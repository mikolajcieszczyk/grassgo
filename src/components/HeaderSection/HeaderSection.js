import React, { Component } from 'react';
import Navigation from 'components/Navigation/Navigation';

export default class HeaderSection extends Component {
    render() {
        return (
            <header>
                <section>
                    <Navigation />
                    <div className="header__content">
                        {/* grassgo */}
                    </div>
                </section>
            </header>
        )
    }
}