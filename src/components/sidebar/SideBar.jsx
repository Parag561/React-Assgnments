import './sidebar.css';

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebaritem">
                <span className="sidebartitle">ABOUT ME</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique rem quae quasi nemo repellat deleniti ipsum commodi sed quam?</p>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">Categories</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">Life</li>
                    <li className="sidebarlistitem">Music</li>
                    <li className="sidebarlistitem">Style</li>
                    <li className="sidebarlistitem">Sport</li>
                    <li className="sidebarlistitem">Tech</li>
                    <li className="sidebarlistitem">Cinema</li>

                </ul>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">Follow Us</span>
                <div className="sidebarsocial">
                    <i className="sidebaricon fa-brands fa-linkedin"></i>
                    <i className="sidebaricon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}