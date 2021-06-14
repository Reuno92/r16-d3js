import './App.css';
import * as d3 from "d3";
function App() {

  const width = "1000"
  const height = "800"
  const centerX = +width / 2;
  const centerY = +height / 2;
  const strokeWidth = 15;

  const mouthArc = d3.arc()
      .innerRadius(90)
      .outerRadius(100)
      .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 3 / 2);

  return (
    <div className="App">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
            <circle
                cx={centerX / 50 }
                cy={centerY / 60 }
                r="245"
                fill="yellow"
                stroke="black"
                strokeWidth={strokeWidth}
            />
            <circle
                cx={centerX / 50 - 100}
                cy={centerY / 60 - 100}
                r="50"
            />
            <circle
                cx={centerX / 50 + 100}
                cy={centerX / 50 - 100 }
                r="50"
            />

          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
}

export default App;
