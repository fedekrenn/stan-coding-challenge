import './mediaContainer.css'
// React
import { useState, useEffect } from 'react';
// Components
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
// Utils
import { getMedia } from '../../utils/getMedia';

export default function MediaContainer({ type }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMedia(type)
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, [type]);

  if (error) return <Error />;

  return (
    <>
      <h2 className='separator'>Popular {type}</h2>
      <section className="card-container separator">
        {data.length > 0 ? (
          data
            .filter((media) => media.releaseYear >= 2010)
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 21)
            .map((media) => (
              <Card
                key={media.title}
                title={media.title}
                thumbnail={media.images['Poster Art'].url}
                titleDefault={false}
              />
            ))
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
