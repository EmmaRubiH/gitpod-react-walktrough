import './App.css';
import NestingComponents from './components/NestingComponents';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import EventBinding from './components/EventBinding';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <NestingComponents />
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/> */}
    {/* <EventBinding /> */}
      {/* // <EventsClass />
      // <EventsFunctional /> */}
      {/* /* <StatefulGreetingWithPrevState />
      <StatefulGreetingWithCallback />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike" />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age="32" /> */ }
    </div>
  );
}

export default App;
