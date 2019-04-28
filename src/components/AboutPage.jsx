import React from 'react';

const About = () => (
  <div className="about">
    <h1 className="mainTitle">このアプリについて</h1>
    <p className="mainLead">
      このアプリは、現在地を入力し検索することで<br />
      『近くにあるホテル』を表示することができるアプリケーションです。
      <span className="mainLead__caution">※ 楽天トラベル施設検索APIを使用</span>
    </p>
  </div>
);

export default About;
