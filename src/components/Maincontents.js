import React from "react";

function Maincontents() {
  return (
    <div>
      <section id="about" className="max-w-[1280px] mx-auto px-[4%] md:px-0">
        <h2 className="text-center text-6xl mt-10 mb-10">About</h2>
        <div className="flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center">
          <div className="md:w-[50%]">
            <img src="./img/29742378_s.jpg" alt="" />
          </div>
          <div className="md:w-[50%] text-center pl-[20px]">
            <h3 className="md:text-3xl md:mb-6">自己紹介・経歴</h3>
            <ul className="md:text-2xl">
              <li>年齢: 30歳</li>
              <li>居住地: 四国地方</li>
              <li>プログラミング学習歴: 1年</li>
            </ul>
            <p className="text-left">
              2015年地元の大学を中退後、地元の企業に事務員として勤務。事務職が自分に合わないと感じ
              <br />
              退職後に運送業をフリーランスとして開業。2024年現在まで続けているが、ガソリン価格の高騰や、
              <br />
              将来仕事がAiに取って代わられる可能性に危機感を持ちWebエンジニアとして生きていくことを決意。
              <br />
              2023年より侍テラコヤにてプログラミング学習を開始する。
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="max-w-[1280px] mx-auto px-[4%] md:px-0">
        <h2 className="text-center text-6xl mt-8 mb-8">Skills</h2>
        <div className="grid  grid-cols-2 sm:grid-cols-3 text-center">
          <div className="bg-blue-300">
            <div>
              <img src="./img/29542950_s.jpg" alt="" />
              <h3>Webデザイン</h3>
              <p>
                シンプルで見やすいデザインを制作できます。高度なデザインはまだ作れませんが日々学習とアウトプットを繰り返しています。
              </p>
            </div>
          </div>
          <div className="bg-red-300">
            <div>
              <img src="./img/wordpress2.png" alt="" />
              <h3>Wordpress</h3>
              <p>Wordpressのオリジナルテーマを作れます。</p>
            </div>
          </div>
          <div className="bg-yellow-400">
            <div>
              <img src="./img/php02.png" alt="" />
              <h3>PHP</h3>
              <p>
                簡単なWebアプリの開発ができます。フレームワークはLaravelを現在学習しています。
              </p>
            </div>
          </div>
          <div className="bg-orange-400">
            <div>
              <img src="./img/react02.png" alt="" />
              <h3>Javascript</h3>
              <p>
                Reactでサイト作成や簡単なアプリを構築できます。このサイトもReactで作っています。
              </p>
            </div>
          </div>
          <div className="bg-green-400">
            <img src="./img/meta02.png" alt="" />
            <h3>webマーケティング</h3>
            <p>個人で広告運用経験あり。googleリスティング広告も可能です。</p>
          </div>
          <div className="bg-purple-400">
            <img src="./img/edit01.png" alt="" />
            <h3>動画編集</h3>
            <p>
              powerDirectorを使って動画編集ができます。サムネ作成もお任せください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Maincontents;
