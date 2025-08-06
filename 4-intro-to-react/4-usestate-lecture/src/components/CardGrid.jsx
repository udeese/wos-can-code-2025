import CatCard from './CatCard';

function CardGrid({ cats }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      }}>
      {cats.map((cat) => {
        return <CatCard title={cat.title} age={cat.age} url={cat.url} />;
      })}
    </div>
  );
}

export default CardGrid;
