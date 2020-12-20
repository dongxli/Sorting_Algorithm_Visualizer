import React from "react";
import "../css/visualizer.css";
import getBubbleSortAnimations from "./algorithms/bubbleSort.js";
import getInsertionSortAnimations from "./algorithms/insertionSort.js";
import getMergeSortAnimations from "./algorithms/mergeSort.js";
import getQuickSortAnimations from "./algorithms/quickSort.js";
import getSelectionSortAnimations from "./algorithms/selectionSort.js";
import getHeapSortAnimations from "./algorithms/heapSort.js";

const ANIMATION_SPEED = 1;
const PRIMARY_COLOR = "	#1E90FF";
const SECONDARY_COLOR = "rgba(255,215,0,0.80)";

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rand_nums: [],
    };
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    const RAND_NUMS = [];
    for (let i = 0; i < 80; i++) {
      RAND_NUMS.push(randIntInterval(5, 600));
    }
    this.setState({
      rand_nums: RAND_NUMS,
    });
    const arrayBars = document.getElementsByClassName("number-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = `rgba(255, 255, 255, 0.85)`;
    }
  }

  bubbleSort() {
    let animations = getBubbleSortAnimations(this.state.rand_nums);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number-bar");
      const isColorChange = i % 4 !== 2 && i % 4 !== 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdex] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdex].style;

        const color = i % 4 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, ANIMATION_SPEED * i);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, ANIMATION_SPEED * i);
      }
    }
  }

  insertionSort() {
    let animations = getInsertionSortAnimations(this.state.rand_nums);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number-bar");
      const action = animations[i][0];
      const isColorChange = action == "c1" || action == "c2";
      if (isColorChange) {
        const [x, barOneIdx, barTwoIdex] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdex].style;

        const color = action === "c1" ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, ANIMATION_SPEED * i);
      } else {
        setTimeout(() => {
          const [x, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, ANIMATION_SPEED * i);
      }
    }
  }

  selectionSort() {
    let animations = getSelectionSortAnimations(this.state.rand_nums);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number-bar");
      const action = animations[i][0];
      const isColorChange = action == "c1" || action == "c2";
      if (isColorChange) {
        const [x, barOneIdx, barTwoIdex] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdex].style;

        const color = action === "c1" ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, ANIMATION_SPEED * i);
      } else {
        setTimeout(() => {
          const [x, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, ANIMATION_SPEED * i);
      }
    }
  }

  heapSort() {
    let animations = getHeapSortAnimations(this.state.rand_nums);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number-bar");
      const action = animations[i][0];
      const isColorChange = action == "c1" || action == "c2";
      if (isColorChange) {
        const [x, barOneIdx, barTwoIdex] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdex].style;

        const color = action === "c1" ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, ANIMATION_SPEED * i);
      } else {
        setTimeout(() => {
          const [x, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, ANIMATION_SPEED * i);
      }
    }
  }

  mergeSort() {
    let animations = getMergeSortAnimations(this.state.rand_nums);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number-bar");
      const action = animations[i][0];
      const isColorChange = action == "c1" || action == "c2";
      if (isColorChange) {
        const [x, barOneIdx, barTwoIdex] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdex].style;

        const color = action === "c1" ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, ANIMATION_SPEED * i);
      } else {
        setTimeout(() => {
          const [x, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, ANIMATION_SPEED * i);
      }
    }
  }

  quickSort() {
    let animations = getQuickSortAnimations(this.state.rand_nums);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("number-bar");
      const isColorChange = i % 4 !== 2 && i % 4 !== 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdex] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdex].style;

        const color = i % 4 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, ANIMATION_SPEED * i);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, ANIMATION_SPEED * i);
      }
    }
  }

  render() {
    const nums = this.state.rand_nums;
    const elements = [];

    for (let i = 0; i < nums.length; i++) {
      elements.push(
        <div
          className="number-bar"
          key={i}
          style={{
            height: `${nums[i]}px`,
          }}
        >
          {" "}
        </div>
      );
    }
    return (
      <React.Fragment>
        <nav
          class="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "black", paddingLeft: "5%" }}
        >
          <a class="navbar-brand" style={{ color: "white" }}>
            Sorting Visualizer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  style={{ cursor: "pointer" }}
                >
                  Algorithms
                </a>
                <div class="dropdown-menu" style={{ background: "black" }}>
                  <a
                    class="dropdown-item selection-bar"
                    onClick={() => this.bubbleSort()}
                  >
                    Bubble Sort
                  </a>
                  <a
                    class="dropdown-item selection-bar"
                    onClick={() => this.insertionSort()}
                  >
                    Insertion Sort
                  </a>
                  <a
                    class="dropdown-item selection-bar"
                    onClick={() => this.selectionSort()}
                  >
                    Selection Sort
                  </a>
                  <a
                    class="dropdown-item selection-bar"
                    onClick={() => this.heapSort()}
                  >
                    Heap Sort
                  </a>
                  <a
                    class="dropdown-item selection-bar"
                    onClick={() => this.mergeSort()}
                  >
                    Merge Sort
                  </a>
                  <a
                    class="dropdown-item selection-bar"
                    onClick={() => this.quickSort()}
                  >
                    Quick Sort
                  </a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto" style={{ paddingRight: "5%" }}>
              <li
                class="nav-item"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => this.reset()}
              >
                Generate New Array
              </li>
            </ul>
          </div>
        </nav>
        <div className="bars-container"> {elements} </div>
      </React.Fragment>
    );
  }
}

function randIntInterval(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}
