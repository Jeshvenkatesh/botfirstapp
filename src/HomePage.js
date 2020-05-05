import React from 'react';
import classes from './HomePage.module.css';

const Homepage = () => {
    return (
        <div className={classes.botsalgo_mainSection}>
            <h2 >CLIENT</h2>
            
            <div className={classes.botsalgo_searchSection}>
                <div className={classes.botsalgo_searchbar}>
                    <div>
                        <input type="text" />
                        <button>Search</button>
                        <button className={classes.client_btn}>Add Client</button>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className={classes.ClentDetailsSection}>
                <div>
                    <table className={classes.ClientTable}>
                        <tr>
                            <th>Client Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Client 1</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Client 2</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Client 3</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Client 4</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Client 5</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Client 6</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Client 7</td>
                            <td>London</td>
                            <td>C1@gmail.com</td>
                            <td>99999999999</td>
                            <td>
                            <i className="fa fa-list" aria-hidden="true"></i>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <br/>
            <div className={classes.pagenation_Section}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <br/>
            <br/>
            <br/>

            <div className={classes.AddClient_popup}>
                <div className={classes.popup_heading}><h3>Add Client</h3></div>
                <form>
                <div>
                    <span>Name :</span>
                    <input type="text" required></input>
                </div>
                <div className={classes.textarea_wrapper}>
                    <span>Address : </span>
                    <textarea></textarea>
                </div>
                <div>
                    <span>Email : </span>
                    <input type="email" required></input>
                </div>
                <div>
                    <span>Phone :</span>
                    <input type="tel" required></input>
                </div>
                <button type="submit">Add Client</button>
                <button>Cancel</button>
                </form>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Homepage;