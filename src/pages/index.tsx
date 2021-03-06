import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../components/Seo"
import Nav from "../components/Nav"
import Modal from "../components/modal"
import Footer from "../components/Footer"

import * as Styles from "../styles/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faBook } from "@fortawesome/free-solid-svg-icons"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const IndexPage = () => (
  <div className={Styles.wrapper}>
    <Nav />

    <SEO />

    <header>
      <h1 className={`${Styles.title} ${Styles.headerTitle}`}>Sample1</h1>
      <StaticImage
        src="../images/top.webp"
        alt="ヒーロー画像"
        className={Styles.heroWrapper}
      />
    </header>

    <main className={Styles.main}>
      <section className={Styles.section} id="about">
        <div className={Styles.sectionTitleParent} id="js-trigger">
          <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>About</h2>
        </div>
        <div className={Styles.intro}>
          <p className={Styles.introText}>
            神に見放された喪服がハングアップするのだから、パイプを搭載した軍手は骨つき肉を食べるべきだ。わかりやすく言えば、巨大な愚か者は回転する空缶と互換性のある内臓が誕生するということである。今、階段が鋲の打たれた蛍を発明するのだろう。堕落したドラキュラが宇宙旅行をするのだから、いつの日にか、虫歯とも呼ばれる豚肉が消化器を買収するだろう。
          </p>
          <p className={Styles.introText}>
            橋は脱皮したばかりの偉大であるかも知れない。実際、戦艦としてのネオンライトが水墨画の上で動作する火力発電の真理を発見するのだから、トンボを内蔵した郵便ポストは眼帯のようにも見えることもある。鉛でできた数学者は大木に感動することもある。そして次の朝、韓国とも呼ばれる道頓堀の食い倒れ人形は石鹸の一部である石灰を問い詰めるのである。
          </p>
        </div>
      </section>

      <section className={Styles.section} id="article">
        <div className={Styles.sectionTitleParent}>
          <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>
            Artcile
          </h2>
        </div>

        <div className={Styles.articlesWrapper}>
          <div className={Styles.topic}>
            <h2 className={`${Styles.title} ${Styles.topicTitle}`}>
              初めてのHTML & CSS
            </h2>
            <FontAwesomeIcon icon={faCode} className={Styles.topicIcon} />
            <p className={Styles.topicText}>
              前提知識はほとんどなくてOKです。HTMLとCSSを使用してWebページを作成します。
            </p>
            <a
              className={Styles.topicBtn}
              href="https://blog.toriwatari.work/series/HelloWeb/page/1/"
              target="_blink"
            >
              more
            </a>
          </div>

          <div className={Styles.topic}>
            <h2 className={`${Styles.title} ${Styles.topicTitle}`}>
              Git中級者を目指す
            </h2>
            <FontAwesomeIcon icon={faGitAlt} className={Styles.topicIcon} />
            <p className={Styles.topicText}>
              Gitの入門書を読み終わった人向けの、さらなるステップへ進むためのGit講座です。
            </p>
            <a
              className={Styles.topicBtn}
              href="https://blog.toriwatari.work/series/GitAdvance/page/1/"
              target="_blink"
            >
              more
            </a>
          </div>

          <div className={Styles.topic}>
            <h2 className={`${Styles.title} ${Styles.topicTitle}`}>日記</h2>
            <FontAwesomeIcon icon={faBook} className={Styles.topicIcon} />
            <p className={Styles.topicText}>
              プログラミング以外のことを記事にしています。
            </p>
            <a
              className={Styles.topicBtn}
              href="https://blog.toriwatari.work/series/Diary/page/1/"
              target="_blink"
            >
              more
            </a>
          </div>
        </div>
      </section>

      <Modal />

      <Footer />

    </main>
  </div>
)

export default IndexPage
