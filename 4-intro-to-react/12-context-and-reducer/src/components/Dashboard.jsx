import Content from './Content';
import Profile from './Profile';

function Dashboard() {
  return (
    <section>
      <h1 className="display-1">Dashboard</h1>
      <div className="row">
        <div className="col-9">
          <Content />
        </div>
        <div className="col-3">
          <Profile />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
