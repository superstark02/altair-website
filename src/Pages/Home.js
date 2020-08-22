import React, { Component } from 'react'
import '../CSS/Pages/Home.css'
import { projects } from '../Database/Constants/Projects'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-bg wrap" >
                    <div style={{ width: '70%' }} >
                        DTU ALTAIR
                    </div>
                </div>

                <div className="wrap" >
                    <div className="page-wrap" >
                        <h1>Content</h1>
                        <div className="projects" >
                            {
                                projects.map(item => {
                                    return (
                                        <div className="projects-card" >
                                            <div>
                                                <img width="100px" src={item.image} />
                                            </div>
                                            <div>
                                                <h2>{item.name}</h2>
                                            </div>
                                            <div>
                                                {item.des}
                                            </div>
                                            <div>
                                                {item.date}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div style={{height:"50vh"}} ></div>

            </div>
        )
    }
}

export default Home
