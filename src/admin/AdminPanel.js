import React from "react";
// import Navbar from "./Navbar";
import "../admin/style/style.css";

//import React, { Component } from 'react';
//import './style.css'; // Import your CSS file

class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = () => {
    this.setState({ menuActive: !this.state.menuActive });
  };

  render() {
    const { menuActive } = this.state;

    return (
      <div>
        <section id="menu" className={menuActive ? 'active' : ''}>
          <div className="logo">
            <img src="logo.jpg" alt="" />
            <h2>BoQ Master</h2>
          </div>
          <div className="items">
            
            <ul>
              <li>
                <i className="fas fa-pen"></i> <a href="#">Dashboard</a>
              </li>
              <li>
                <i className="fas fa-bell"></i>
                <a href="#">Notification</a>
              </li>
              <li>
                <i className="fas fa-lock"></i> <a href="#">Security</a>
              </li>
              <li>
                <i className="fas fa-gear"></i> <a href="#">Appearance</a>
              </li>
              <li>
                <i className="fas fa-circle-question"></i><a href="#">Help</a>
              </li>
            </ul>
          </div>
        </section>

        <section id="interface">
          <div className="navigation">
            <div className="n1">
              <div>
                <i className="fas fa-bars" onClick={this.toggleMenu}></i>
              </div>
              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="profile">
              <i className="far fa-bell"></i>
              <img src="p1.jpg" alt="" />
            </div>
          </div>

          <h3 className="i-name">Dashboard</h3>

          <div className="values">
            <div className="val-box">
              <i className="fas fa-users"></i>
              <div>
                <h3>267</h3>
                <span>New Users</span>
              </div>
            </div>

            <div className="val-box">
              <i className="fas fa-user-tie"></i>
              <div>
                <h3>156</h3>
                <span>Professionals</span>
              </div>
            </div>

            <div className="val-box">
              <i className="fa-brands fa-facebook-f"></i>
              <div>
                <h3>200,521</h3>
                <span>Total Likes</span>
              </div>
            </div>

            <div className="val-box">
              <i className="fa-brands fa-twitter"></i>
              <div>
                <h3>18,267</h3>
                <span>Total Likes</span>
              </div>
            </div>
          </div>

          <div className="board">
            <table width="100%">
              <thead>
                <tr>
                  <td>
                    <h3>Professionals</h3>
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Title</td>
                  <td>Status</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="people">
                    <img src="p2.jpg" alt="p2"></img>
                    <div className="people-de">
                      <h5>Anne Wendy</h5>
                      <p>wen@gmail.com</p>
                    </div>
                  </td>

                  <td className="people-des">
                    <h5>Architect</h5>
                    <p>Designing</p>
                  </td>

                  <td className="active">
                    <p>Active</p>
                  </td>

                  <td className="accept"><a href="#">Accept</a></td>

                  <td className="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p3.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Johnson Doe</h5>
                      <p>johnson@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>QA</h5>
                    <p>Testing</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p4.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Roita Bell</h5>
                      <p>roi@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>Civil Engineer</h5>
                    <p>Planning</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p5.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Henry Shawn</h5>
                      <p>henry@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>Architect</h5>
                    <p>Designing</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p6.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Miranda Croos</h5>
                      <p>mi@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>Architect</h5>
                    <p>Designing</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p7.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Kristine Jane</h5>
                      <p>kris@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>Civil Engineer</h5>
                    <p>Planning</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p8.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>John Park</h5>
                      <p>john@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>QA</h5>
                    <p>Testing</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p9.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>David Roger</h5>
                      <p>dav@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>Architect</h5>
                    <p>Designing</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p10.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Ken Drake</h5>
                      <p>kdrake@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>Civil Engineer</h5>
                    <p>Planning</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                <tr>
                  <td class="people">
                    <img src="p11.jpg" alt=""></img>
                    <div class="people-de">
                      <h5>Kelly Joe</h5>
                      <p>joe@gmail.com</p>
                    </div>
                  </td>

                  <td class="people-des">
                    <h5>QA</h5>
                    <p>Testing</p>
                  </td>

                  <td class="active">
                    <p>Active</p>
                  </td>

                  <td class="accept"><a href="#">Accept</a></td>


                  <td class="reject"><a href="#">Reject</a></td>
                </tr>

                
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default AdminPanel;



/*const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
export default function Results() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  

  
  
  export default function Professional() {

    return (
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    )
  }
  

  */
