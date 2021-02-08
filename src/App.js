import React, { Component } from 'react';
import Greetings from './greetings';
import Random from './random';
import BoxColor from './BoxColor';
import CreditCard from './creditcard';
import DriverCard from './drivercard';
import Rating from './rating';
import IdCard from './idcard';
import Dice from './dice';
import ClickablePicture from './clickpic';
import Carousel from './carousel';
import NumbersTable from './numberstable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
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
          birth={new Date('1993-05-11')}
          picture="https://randomuser.me/api/portraits/women/8.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="es">Santiago</Greetings>
        <Greetings lang="en">Santiago</Greetings>
        <Greetings lang="fr">Santiago</Greetings>

        <h1>Random</h1>
        <Random min={68} max={500} />
        <Random min={4789} max={10097} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>CreditCard</h1>

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard
          name="Darth Vader"
          rating={4.2}
          img="https://2.bp.blogspot.com/-9OmtwM7DcSA/T_yjSyqeW7I/AAAAAAAADYs/OcZHtuz7BNI/s1600/darth.jpg"
          car={{
            model: 'TIE Bomber',
            droid: 'PTX0',
          }}
        />

        <DriverCard
          name="Luke Skywalker"
          rating={4.9}
          img="https://jedibusiness.com/images/actionFigures/The-Vintage-Collection/Luke-Skywalker-X-Wing-Pilot_Big_6.jpg"
          car={{
            model: 'X-Wing',
            droid: 'R2-D2',
          }}
        />

        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />

        <h1>Dice</h1>
        <Dice />

        <h1>Carousel</h1>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />

        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />
      </div>
    );
  }
}

export default App;
