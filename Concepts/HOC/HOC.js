import ClickCounter from "./ClickCounter";
import OnHover from "./OnHover";
import "./styles.css";

const CounterHOC = (OldComponent) => {
  return (EnhancedComponet = (props) => {
    const [count, setCount] = useState(0);
    console.log("count");
    return (
      <OldComponent
        {...props}
        count={count}
        incement={() => setCount(count + 1)}
        withName="Lomas"
      />
    );
  });
};

const OnHover = CounterHOC(({ count, incement, withName }) => {
  return (
    <div>
      <p>Click : {count}</p>
      <button onMouseOver={incement}>Click ME</button>
      <p>{withName}</p>
    </div>
  );
});

const ClickCounter = CounterHOC(({ count, incement, withName }) => {
  console.log("clikc");
  return (
    <div>
      <p>Click : {count}</p>
      <button onClick={incement}>Click ME</button>
      <p>{withName}</p>
    </div>
  );
});

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ClickCounter />
      <OnHover  />
    </div>
  );
}
