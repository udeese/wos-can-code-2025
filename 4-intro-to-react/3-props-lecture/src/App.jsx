import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="container pt-3">
      <ProfileCard
        title="Sir Pounce-Alot"
        description="First cat on the moon"
        url="https://placecats.com/400/400"
        age={3}
      />
      <ProfileCard
        title="Patches the Great"
        description="Calico Cat super cute"
        url="https://placecats.com/400/300"
        age={5}
      />
    </div>
  );
}

export default App;
