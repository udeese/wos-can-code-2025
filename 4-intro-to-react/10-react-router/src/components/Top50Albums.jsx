import { Outlet } from 'react-router';

function Top50Albums() {
  return (
    <section className="container flex-grow-1">
      <div className="py-5">
        <h1 className="display-1">Top 50 Albums</h1>
        <Outlet />
      </div>
    </section>
  );
}
export default Top50Albums;
