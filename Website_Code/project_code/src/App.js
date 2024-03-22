import './style.css';
// import './script.js';

function App() {
  return (
<div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
      <h1 id="WebTitle">Meal Tracking Application</h1>
      <div class="Account">
        <h3> Account Info </h3>
      </div>

    <div class="AccountProg">
      <h1> Account Progress Section</h1>
      <div class="Progress-Bar">
      <label for="Weekly Progress">Weekly Progress</label>
      <progress value="3" name="Weekly Progress" max="7">2</progress>
      </div>
    </div>

    <div class="DailyProg">
      <h1> Daily Meal/Calorie progress tracker</h1>
      <div class="Progress-Bar">
        <label for="Calories">Calories</label>
        <progress value="3" name="Calories" max="100"></progress>
      </div>
      <div class="Progress-Bar">
        <label for="Calories-From-Fat">Calories-From-Fat</label>
        <progress value="20" name="Calories-From-Fat" max="25"></progress>
      </div>
      <div class="Progress-Bar">
        <label for="Sugars">Sugars</label>
        <progress value="100" name="Sugars" max="1000"></progress>
      </div>
    </div>

  {/* <div className="wrapper">
      <header>
        <p className="current-date">{months[currMonth]} {currYear}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded" onClick={() => handleIconClick(true)}>chevron_left</span>
          <span id="next" className="material-symbols-rounded" onClick={() => handleIconClick(false)}>chevron_right</span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {renderCalendar()}
        </ul>
      </div>
    </div> */}
  </div>
  );
};
export default App;
