import yash from "../photos/profile/photo-masthead-375-b8ae1548 (1).webp"
import '../css/general.css';
import '../css/action.css';
import '../css/home.css';

export default function Home() {
    return(
        <div className="homeBackground">
            <div className="row">
                <div className="column">
                    <div className="title-box">
                        <h1>Hello, My Name is Yash Patel!</h1>
                        <h3>A 2nd Year Undergraduate Student @ The University of Waterloo</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="title-picture">
                        <img className="profile-pic" src={yash} alt="yash" />
                    </div>
                </div>
            </div>

        </div>

    )
    
   
  }