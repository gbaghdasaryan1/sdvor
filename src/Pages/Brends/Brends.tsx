import "./Brends.css";
import MainLayout from "../../Layout/MainLayout";

import bonolit from "./brends/bonolit.png";
import bostik from "./brends/bostik.jpg";
import bugatti from "./brends/bugatti.jpg";
import ceresit from "./brends/ceresit.gif";
import cover from "./brends/cover.png";
import denzel from "./brends/denzel.jpg";
import dufa from "./brends/dufa.png";
import dulux from "./brends/dulux.png";
import energoflex from "./brends/energoflex.jpg";
import etalon from "./brends/etalon.png";
import eurotsement from "./brends/evrotsement.png";
import hammerite from "./brends/hammerite.png";
import holcim from "./brends/holcim.png";
import iek from "./brends/iek.gif";
import knauf from "./brends/knauf.jpg";
import lakra from "./brends/lakra.jpeg";
import legrand from "./brends/legrand.png";
import magma from "./brends/magma.png";
import master from "./brends/master.gif";
import mekkan from "./brends/mekkan.jpg";
import merkuri from "./brends/merkurii.jpg";
import moment from "./brends/moment.png";
import nexttool from "./brends/nexttool.png";
import parade from "./brends/parade.jpg";
import pufas from "./brends/pufas.jpg";
import rehau from "./brends/rehau.jpg";
import rockwool from "./brends/rockwool.jpg";
import rusean from "./brends/rusean.jpg";
import superOkraska from "./brends/super-okraska.png";
import tehnonikol from "./brends/tehnonikol.png";
import tekfor from "./brends/tekfor.jpg";
import unis from "./brends/unis.jpg";
import universal from "./brends/universal.jpg";
import weber from "./brends/weber.jpg";
import zdorovyiDom from "./brends/zdorovyi-dom.jpg";
import zelest from "./brends/zelest.jpg";
import BrendsItem from "./BrendsItem/BrendsItem";

const Brends = () => {
  return (
    <MainLayout>
      <div className='Brends'>
        <h2>Бренды</h2>

        <div className='Brends-items'>
          <BrendsItem name='Здоровый дом' img={zdorovyiDom} />
          <BrendsItem name="Super O'kraska" img={superOkraska} />
          <BrendsItem name='Зелест' img={zelest} />
          <BrendsItem name='Лакра' img={lakra} />
          <BrendsItem name='Parade' img={parade} />
          <BrendsItem name='Mekkan' img={mekkan} />
          <BrendsItem name='Pufas' img={pufas} />
          <BrendsItem name='Эталон' img={etalon} />
          <BrendsItem name='Rockwool' img={rockwool} />
          <BrendsItem name='Технониколь' img={tehnonikol} />
          <BrendsItem name='Cover' img={cover} />
          <BrendsItem name='Weber' img={weber} />
          <BrendsItem name='Holcim' img={holcim} />
          <BrendsItem name='Eurocement' img={eurotsement} />
          <BrendsItem name='Русеан' img={rusean} />
          <BrendsItem name='Master' img={master} />
          <BrendsItem name='Dufa' img={dufa} />
          <BrendsItem name='Dulux' img={dulux} />
          <BrendsItem name='Hammerite' img={hammerite} />
          <BrendsItem name='Ceresit' img={ceresit} />
          <BrendsItem name='Knauf' img={knauf} />
          <BrendsItem name='Момент' img={moment} />
          <BrendsItem name='Bostik' img={bostik} />
          <BrendsItem name='Unis' img={unis} />
          <BrendsItem name='IEK' img={iek} />
          <BrendsItem name='Меркурий' img={merkuri} />
          <BrendsItem name='TekFor' img={tekfor} />
          <BrendsItem name='UNIVersal' img={universal} />
          <BrendsItem name='Legrand' img={legrand} />
          <BrendsItem name='Bugatti' img={bugatti} />
          <BrendsItem name='Energoflex' img={energoflex} />
          <BrendsItem name='Rehau' img={rehau} />
          <BrendsItem name='Bonolit' img={bonolit} />
          <BrendsItem name='Магма' img={magma} />
          <BrendsItem name='Denzel' img={denzel} />
          <BrendsItem name='Nexttool' img={nexttool} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Brends;
