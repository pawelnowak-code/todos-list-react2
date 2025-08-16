import "./style.css";
import React from "react";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="buttons__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttons__button"
                    disabled={tasks.every(({ done }) => done)} >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
    );

export default Buttons;