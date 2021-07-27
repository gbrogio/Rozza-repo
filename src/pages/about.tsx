import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/About.module.css'
import Rellax from 'rellax'
import { Footer } from '../components/Footer'

const classNames = require('classnames');

export default function About() {
  if (typeof window !== "undefined") {
    const rellax = new Rellax('#parallax');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Rozza-App</title>
        <meta name="description" content="Has create by Guilherme Brogio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <div className={styles.aboutRozza}>
          <h1 id="About">Sobre a empresa..</h1>
          <p id="AboutS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit perferendis sint inventore, nemo, vero officiis autem quae hic consequatur laudantium ad veniam laboriosam! Vel, debitis atque repellendus provident voluptas officiis.
          Aperiam vero nostrum asperiores eum amet quas provident ullam ipsam odio assumenda, labore odit voluptates fugit esse quidem quia sint accusantium, nisi aliquam reiciendis corporis nam. Nesciunt itaque dignissimos consequatur.
          Dolor debitis illum praesentium quo incidunt laboriosam distinctio magni, minima quibusdam voluptate harum possimus placeat provident ipsam nobis earum tempora tenetur sint amet ab nostrum sed. Enim tenetur atque laborum.
          Nesciunt veritatis ea maxime, neque illum ex hic, deleniti perspiciatis distinctio iure obcaecati aperiam nostrum sunt suscipit ullam non voluptate, atque dolor? Ut a delectus est eos aperiam. Magnam, distinctio.
          Assumenda nihil quis numquam consequatur repudiandae saepe fugiat! Labore error eaque doloribus quod vero aspernatur consequatur tenetur id dolore esse quisquam dignissimos, aliquam nam ut minus iste vel dolorum numquam.
          Minus perferendis ipsum aliquam laudantium? Possimus, ipsam, accusantium fugiat, obcaecati magni adipisci quas praesentium quaerat vel corporis tenetur dolorem officia quia ipsa aliquam earum? Vitae optio suscipit laudantium provident voluptates.
          Atque modi, suscipit odio provident illum laborum labore explicabo iusto consectetur corporis accusantium optio quo laboriosam nihil asperiores similique perspiciatis consequatur expedita quam ratione tempore inventore porro! Modi, quas eveniet?
          Distinctio inventore praesentium culpa doloremque veritatiserferendis nam saepe sapiente minima temporibus fuga deleniti, totam et mollitia accusantium eaque dicta! Fugiat magnam vitae qui cumque eum corrupti!
          Unde odio totam, dolorem quasi omnis aut illo mollitia vel, suscipit molestias maiores, veritatis explicabo impedit odit ratione voluptate facere modi maxime minus expedita delectus consequuntur dolores provident. Nesciunt, amet!
          Quae, ratione fugit obcaecati nemo magnam, possimus ea quas quod ut corrupti vero at quisquam non, tempore in consectetur! Veniam sequi consectetur impedit ab possimus nemo hic unde totam. Accusantium!
          Laborum veritatis, tempora cum quas distinctio vel beatae doloremque libero corrupti incidunt nesciunt similique officia magni harum iusto vero, accusantium animi sint aspernatur praesentium eos nostrum quisquam numquam blanditiis. Cumque?
          Illo facere ab placeat quos quaerat, fugiat praesentium nisi voluptas itaque cupiditate earum, labore provident corrupti impedit sequi odit iure, ratione magnam debitis? Accusamus fugit, distinctio nesciunt quaerat quisquam ipsam!
          Voluptas, odit. In incidunt repudiandae, suscipit accusantium natus amet totam ipsam quo eaque pariatur! Eius nostrum autem alias! Eaque consequuntur dolor architecto eos ab sed officiis laboriosam perspiciatis impedit suscipit.
          Facilis magnam ad quibusdam recusandae alias corrupti praesentium excepturi ut veniam porro exercitationem adipisci reiciendis eaque quae, ipsa assumenda consequuntur libero. Est, error cumque repellendus sit tenetur voluptates alias minima?
          Non similique error assumenda enim, veritatis officiis, ullam, illo molestias dignissimos voluptatum totam animi? Assumenda perspiciatis, officia ducimus, rem tempora reiciendis vel minus cumque veniam, alias magni dicta harum ab?</p>

          <h1 id="Team">Sobre a equipe de Chefs..</h1>
          <p id="TeamS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit perferendis sint inventore, nemo, vero officiis autem quae hic consequatur laudantium ad veniam laboriosam! Vel, debitis atque repellendus provident voluptas officiis.
          Aperiam vero nostrum asperiores eum amet quas provident ullam ipsam odio assumenda, labore odit voluptates fugit esse quidem quia sint accusantium, nisi aliquam reiciendis corporis nam. Nesciunt itaque dignissimos consequatur.
          Dolor debitis illum praesentio vel beatae doloremque libero corrupti incidunt nesciunt similique officia magni harum iusto vero, accusantium animi sint aspernatur praesentium eos nostrum quisquam numquam blanditiis. Cumque?
          Illo facere ab placeat quos quaerat, fugiat praesentium nisi voluptas itaque cupiditate earum, labore provident corrupti impedit sequi odit iure, ratione magnam debitis? Accusamus fugit, distinctio nesciunt quaerat quisquam ipsam!
          Voluptas, odit. In incidunt repudiandae, suscipit accusantium natus amet totam ipsam quo eaque pariatur! Eius nostrum autem alias! Eaque consequuntur dolor architecto eos ab sed officiis laboriosam perspiciatis impedit suscipit.
          Facilis magnam ad quibusdam recusandae alias corrupti praesentium excepturi ut veniam porro exercitationem adipisci reiciendis eaque quae, ipsa assumenda consequuntur libero. Est, error cumque repellendus sit tenetur voluptates alias minima?
          Non similique error assumenda enim, veritatis officiis, ullam, illo molestias dignissimos voluptatum totam animi? Assumenda perspiciatis, officia ducimus, rem tempora reiciendis vel minus cumque veniam, alias magni dicta harum ab?</p>

          <h1 id="Privacy">Politica de Privacidade..</h1>
          <p id="PrivacyS">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit perferendis sint inventore, nemo, vero officiis autem quae hic consequatur laudantium ad veniam laboriosam! Vel, debitis atque repellendus provident voluptas officiis.
          Aperiam vero nostrum asperiores eum amet quas provident ullam ipsam odio assumenda, labore odit voluptates fugit esse quidem quia sint accusantium, nisi aliquam reiciendis corporis nam. Nesciunt itaque dignissimos consequatur.
          Dolor debitis illum praesentio vel beatae doloremque libero corrupti incidunt nesciunt similique officia magni harum iusto vero, accusantium animi sint aspernatur praesentium eos nostrum quisquam numquam blanditiis. Cumque?
          Illo facere ab placeat quos quaerat, fugiat praesentium nisi voluptas itaque cupiditate earum, labore provident corrupti impedit sequi odit iure, ratione magnam debitis? Accusamus fugit, distinctio nesciunt quaerat quisquam ipsam!
          Voluptas, odit. In incidunt repudiandae, suscipit accusantium natus amet totam ipsam quo eaque pariatur! Eius nostrum autem alias! Eaque consequuntur dolor architecto eos ab sed officiis laboriosam perspiciatis impedit suscipit.
          Facilis magnam ad quibusdam recusandae alias corrupti praesentium excepturi ut veniam porro exercitationem adipisci reiciendis eaque quae, ipsa assumenda consequuntur libero. Est, error cumque repellendus sit tenetur voluptates alias minima?
          Non similique error assumenda enim, veritatis officiis, ullam, illo molestias dignissimos voluptatum totam animi? Assumenda perspiciatis, officia ducimus, rem tempora reiciendis vel minus cumque aliquam reiciendis corporis nam. Nesciunt itaque dignissimos consequatur.
          Dolor debitis illum praesentio vel beatae doloremque libero corrupti incidunt nesciunt similique officia magni harum iusto vero, accusantium animi sint aspernatur praesentium eos nostrum quisquam numquam blanditiis. Cumque?
          Illo facere ab placeat quos quaerat, fugiat praesentium nisi voluptas itaque cupiditate earum, labore provident corrupti impedit sequi odit iure, ratione magnam debitis? Accusamus fugit, distinctio nesciunt quaerat quisquam ipsam!
          Voluptas, odit. In incidunt repudiandae, suscipit accusantium natus amet totam ipsam quo eaque pariatur! Eius nostrum autem alias! Eaque consequuntur dolor architecto eos ab sed officiis laboriosam perspiciatis impedit suscipit.
          Facilis magnam ad quibusdam recusandae alias corrupti praesentium excepturi ut veniam porro exercitationem adipisci reiciendis eaque quae, ipsa assumenda consequuntur libero. Est, error cumque repellendus sit tenetur voluptates alias minima?
          Non similique error assumenda enim, veritatis officiis, ullam, illo molestias dignissimos voluptatum totam animi? Assumenda perspiciatis, officia ducimus, rem tempora reiciendis vel minus cumquealiquam reiciendis corporis nam. Nesciunt itaque dignissimos consequatur.
          Dolor debitis illum praesentio vel beatae doloremque libero corrupti incidunt nesciunt similique officia magni harum iusto vero, accusantium animi sint aspernatur praesentium eos nostrum quisquam numquam blanditiis. Cumque?
          Illo facere ab placeat quos quaerat, fugiat praesentium nisi voluptas itaque cupiditate earum, labore provident corrupti impedit sequi odit iure, ratione magnam debitis? Accusamus fugit, distinctio nesciunt quaerat quisquam ipsam!
          Voluptas, odit. In incidunt repudiandae, suscipit accusantium natus amet totam ipsam quo eaque pariatur! Eius nostrum autem alias! Eaque consequuntur dolor architecto eos ab sed officiis laboriosam perspiciatis impedit suscipit.
          Facilis magnam ad quibusdam recusandae alias corrupti praesentium excepturi ut veniam porro exercitationem adipisci reiciendis eaque quae, ipsa assumenda consequuntur libero. Est, error cumque repellendus sit tenetur voluptates alias minima?
          Non similique error assumenda enim, veritatis officiis, ullam, illo molestias dignissimos voluptatum totam animi? Assumenda perspiciatis, officia ducimus, rem tempora reiciendis vel minus cumque veniam, alias magni dicta harum ab?</p>
        </div>
        <section className={styles.BannerToBg}><img src="/img/bannerToBg.png" alt=""/><div className={styles.background}></div></section>
        <section className={styles.mainBanner}><img src="/img/group-of-chefs-working.jpg" id="parallax" data-rellax-speed="-9" alt=""/></section>
      </main>

      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  )
}