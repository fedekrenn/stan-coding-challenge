import placeholder from '../../assets/placeholder.png';
import './card.css';

export default function Card({ title, titleDefault, thumbnail = placeholder }) {
  return (
    <article className="card">
      <div>
        {titleDefault && <h3>{title}</h3>}
        <img src={thumbnail} alt="Fondo placeholder para card" />
      </div>
      {titleDefault ? <h4>Popular {title}</h4> : <h4>{title.substring(0, 25)}{title.length > 25 && '...'} </h4>}
    </article>
  );
}
