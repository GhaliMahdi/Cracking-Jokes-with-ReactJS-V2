import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeElem = jokesData.map((joke) => (
    <Joke setup=<p>{joke.setup}</p> punchline=<p>{joke.punchline}</p> />
  ));

  return <div>{jokeElem}</div>;
}

export default App;
