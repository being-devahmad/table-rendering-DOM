// allRecord
let allRecord = [2, 1, 4, 3, 5, 6, 8, 7];
let tabRow = document.getElementById("tableRow");
//   renderTable
let renderTable = () => {
  tabRow.innerHTML = " ";
  allRecord.map((item, index) => {
    tabRow.innerHTML += `<td onclick="selectedFunct(event)" id='${index}'>${item}</td>`;
  });
};
renderTable();
// selectTableData
let selectedIndex = null;
let selectedData = null;
let selectedFunct = (e) => {
  console.log("Selectedfun----->", e);
  selectedIndex = e.target.id;
  selectedData = e.target.innerHTML;
  let selectedVal = document.getElementById("selectedValue");
  selectedVal.innerText = `${selectedData} is selected and its index is ${selectedIndex}`;
};
//   Addvalue
let addVal = () => {
  let addValue = +prompt("Enter the new value");
  if (isNaN(addValue)) {
    alert("Invalid input ! Please enter again");
  } else {
    allRecord.push(addValue);
    renderTable();
  }
};
//   DeleteVal
let delVal = () => {
  if (allRecord.length > 0) {
    if (selectedIndex != " ") {
      allRecord.splice(selectedIndex, 1);
      renderTable();
    } else {
      alert("Please select any number");
    }
  }
};
// Ascending - sortArray
let ascSorting = () => {
  allRecord.sort((a, b) => {
    return a - b;
  });
  renderTable();
};
//   Descending - sortArray
let dscSorting = () => {
  allRecord.sort((a, b) => {
    return b - a;
  });
  renderTable();
};
//  change background color of Even numbers
let colorEven = () => {
  allRecord.map((item, index) => {
    if (item % 2 == 0) {
      document.getElementById(index).style.backgroundColor = "green";
    }
  });
};
//    change background color of Odd numbers
let colorOdd = () => {
  allRecord.map((item, index) => {
    if (item % 2 != 0) {
      document.getElementById(index).style.backgroundColor = "red";
    }
  });
};
// swap to left number
let swapToLeft = () => {
  if (selectedData == null || selectedData === "") {
    alert("Please select any number");
  } else {
    if (selectedData === allRecord[0]) {
      alert("You can't swap anymore");
    } else {
      let previousValue = allRecord[selectedIndex - 1];
      allRecord[selectedIndex - 1] = selectedData;
      allRecord[selectedIndex] = previousValue;
      selectedIndex = selectedIndex - 1;
    }
  }
  renderTable();
};
// swap to right
const swapToRight = () => {
  if (selectedData === null || selectedData === "") {
    alert("Please select the value from given an array first!");
  } else {
    if (selectedIndex === allRecord.length - 1) {
      alert("You can't swap anymore");
    } else {
      let nextValue = allRecord[parseInt(selectedIndex) + 1];
      allRecord[parseInt(selectedIndex) + 1] = selectedData;
      allRecord[parseInt(selectedIndex)] = nextValue;
      selectedIndex = parseInt(selectedIndex) + 1;
    }
    renderTable();
  }
};
