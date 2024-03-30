import React from 'react';
import CssImg from "../../assets/img/tech/css.png";
import Github from "../../assets/img/tech/github.png";
import HtmlImg from "../../assets/img/tech/html.png";
import JavaImg from "../../assets/img/tech/java.png";
import JavascriptImg from "../../assets/img/tech/js.png";
import LinuxImg from "../../assets/img/tech/linux.png";
import NodejsImg from "../../assets/img/tech/nodejs.png";
import RaspberryPiImg from "../../assets/img/tech/raspberry.png";
import ReactImg from "../../assets/img/tech/react.png";
import ReactNativeImg from "../../assets/img/tech/reactnative.png";
import PhpImg from "../../assets/img/tech/php.png";

function ExperienceSection() {
  return (
    <section id="experience">
    <div className="section_container">
      <p className="section_title">EXPERIENCE</p>
      <p  className="section_subtitle">some technology I've worked with :</p>
      <table>
<tr>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={HtmlImg} alt="HTML"/><p>HTML 5</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={CssImg} alt="CSS"/><p>Css 3</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={Github} alt="GitHub"/><p>GitHub</p></td>
</tr>
<tr>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={JavaImg} alt="JAVA"/><p>Java 8</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={JavascriptImg} alt="Javascript"/><p>Javascript</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={LinuxImg} alt="Linux"/><p>Linux</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={RaspberryPiImg} alt="Raspberry"/><p>Raspberry Pi 4</p></td>
</tr>
<tr>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={ReactNativeImg} alt="React Native"/><p>React Native</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={ReactImg} alt="React"/><p>React</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={PhpImg} alt="Php"/><p>Php</p></td>
<td style={{textAlign:'center', padding: '10px'}}><img style={{height:"60px"}} src={NodejsImg} alt="Node"/><p>Node.js</p></td>
</tr>
</table>
    </div>
  </section>
  );
}

export default ExperienceSection;