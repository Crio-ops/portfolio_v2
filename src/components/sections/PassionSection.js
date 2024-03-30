import React from "react";
import "./PassionSectionStyle.css";
import DownArrow from '../../assets/img/down_arrow.png';
import Ui_img from "../../assets/img/ui.png";
import Ux_img from "../../assets/img/ux.png";
import Break_img from "../../assets/img/break.png";

function PassionSection() {
  return (
    <section id="passion">
      <div className="section_title_container">
        <p className="section_title">WHAT I DO</p>
      </div>
      <div className="subsection_container">
        <div className="row_container">
        <div className="row">
          <img src={Ui_img} alt="" style={{ height: "9em", width: "auto", marginBottom : '2vh'  }} />
          <p className="section_title">User Interface</p>
          <p className="row_text">
            Design goes beyond mere appearances; it encapsulates both the
            external aesthetics and the internal functionality of a product,
            along with the holistic user experience. My goal is to craft
            interfaces and experiences that resonate with users across all
            digital platforms.
          </p>
          </div>
        </div>
        <div className="row_container">
          <div className="row">
            <img
              src={Ux_img}
              alt=""
              style={{ height: "15vh", width: "auto", marginBottom : '2vh' }}
            />
            <p className="section_title">User Experience</p>

            <p className="row_text">
              I'm passionate about design and development, and interested in
              mobile app development. As I grow as a developer, I hope to write
              clean, readable code that can be used by others and leveraged to
              create beautiful software.
            </p>
          </div>
        </div>
      </div>
      <div className="col_container">
        <div className="column">
        <img src={Break_img} alt=""  style={{ height: "15vh", width: "auto", marginRight : '5vh' }} />
        <div className="text_column">
        <p className="section_title">Away from keyboard</p>
       <p className="row_text">
        When I'm not on my computer, I also enjoy cooking, exploring different corners of Belgium with my dog, and have a particular affinity for tasting fine wines (yes... I used to be a sommelier!).
        </p> 
        </div>
        </div>
      </div>
      <div className="moveto">
            <a href="#experience">
            <img className="arrow" src={DownArrow} alt="" />
          </a>
      </div>
    </section>
  );
}

export default PassionSection;
