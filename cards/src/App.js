import './App.css';
import Card from './components/Card';
import Button from './styled/Button';
import CardImg from './styled/CardImg';

function App() {
  const cards = [
    {
      img: 'card with img',
      title: 'Card title',
      text: 'Lorem kotoriy ipsumom pogonyaiut'
    },
    {
      title: 'Other title',
      text: 'A text another'
    }
  ]
  return (
    <div className="App">
      {cards.map((card) => (
        <Card>
          {card.img && <CardImg src={card.img} alt='' />}
          <div className="cardContent">
            <div className="cardTitle">{card.title}</div>
            <div className="cardText">{card.text}</div>
            <Button primary>Go somewhere</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default App;
