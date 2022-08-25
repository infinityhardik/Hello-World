import React from 'react';

let studentsInfo = [
    {
        roll: 1,
        name: 'Alex',
        scores: {
            mathematics: 90,
            english: 80,
            science: 95
        }
    },
    {
        roll: 2,
        name: 'Ben',
        scores: {
            mathematics: 85,
            english: 60,
            science: 70
        }
    },
    {
        roll: 3,
        name: 'Cathy',
        scores: {
            mathematics: 86,
            english: 75,
            science: 98
        }
    },
    {
        roll: 4,
        name: 'Daisy',
        scores: {
            mathematics: 71,
            english: 67,
            science: 64
        }
    },
    {
        roll: 5,
        name: 'Ema',
        scores: {
            mathematics: 94,
            english: 73,
            science: 70
        }
    },
    {
        roll: 6,
        name: 'Flora',
        scores: {
            mathematics: 97,
            english: 85,
            science: 93
        }
    }
];

function displayAllScoreCards() {

    // TODO 1: Remove the hard-coded card template and use it as a reference only to render individual score cards into the DOM
    
    return studentsInfo.map(element => {
    return <div className="scorecard" key={element.roll}>
        <div className="card">
            <article>
                <h1>{element.name}</h1>
                <span>Mathematics: {element.scores.mathematics}</span><br />
                <span>English: {element.scores.english}</span><br />
                <span>Science: {element.scores.science}</span>
            </article>
        </div>
    </div>
    });

    // TODO 2: Use map method to iterate over studentsInfo array defined above to render all six score cards dynamically

}

const App = function () {
    return (
        <div className="main-container">
            <div className="heading-container">
                <h2>Score Cards</h2>
            </div>

            <div className="scorecards-container">
                {displayAllScoreCards()}
            </div>
        </div>
    )
}

export { App, displayAllScoreCards };