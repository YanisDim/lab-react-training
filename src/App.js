import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard'
import data from './data/berlin.json';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <div id="card">
        <h1>Id Card</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div id="lang">
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div id="randomValue">
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div id="boxColor">
        <h1>BoxColor</h1>
        <BoxColor r={127} g={12} b={255} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div id="DriverCard">
      <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }} />
      </div>
    </div>
  );
}

export default App;
