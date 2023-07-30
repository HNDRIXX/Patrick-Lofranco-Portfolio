import anime from 'animejs';
import './style.css';

const GRID_WIDTH = 15;
const GRID_HEIGHT = 15;

function WaterDropGrid() {
  return (
    <div className='relative grid h-screen place-content-center'>
      <DotGrid />
    </div>
  );
}

const DotGrid = () => {
  const handleDotClick = (e) => {
    const target = e.target;
    const dataIndex = target.dataset.index;
    if (dataIndex) {
      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.35, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -15, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: 0.5, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: parseInt(dataIndex, 10),
        }),
      });
    }
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-900"
          data-index={index}
          key={`${i}-${j}`}
          onClick={handleDotClick}
        >
          <div
            className="dot-point h-4 w-4 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-10 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }} className='grid w-fit'>
      {dots.map((dot) => dot)}
    </div>
  );
};

export default WaterDropGrid;
