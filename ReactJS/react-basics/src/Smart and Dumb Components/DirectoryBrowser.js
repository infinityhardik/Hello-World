import React from 'react';

import DirectoryRow from './DirectoryRow.js';
import CreateDirectory from './CreateDirectory.js';

class DirectoryBrowser extends React.Component {

    constructor() {
        super();
        this.state = {
            directoriesList: window.state.directories
        }
    }

    // DONE 1: Cut 'calculateGUID' method from 'CreateDirectory' component class and pasted it inside 'DirectoryBrowser' component class
    calculateGUID = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    // DONE 2: Removed 'createDirectoryHandler', which was defined below

    // DONE 3: Cut 'createDirectoryHandler' method from 'CreateDirectory' component class and pasted it inside 'DirectoryBrowser' component class
    createDirectoryHandler = () => {
        if (document.getElementById("directoryNameTextbox").value === "") {
            alert("Cannot create directory with no name");
            return;
        }
        let newDirectory = {
            id: this.calculateGUID(),
            name: document.getElementById("directoryNameTextbox").value,
            files: []
        }
        let updatedDirectories = this.state.directoriesList;
        updatedDirectories.push(newDirectory);
        /* DONE 4: Uncommented the line given below. 
        This line will set the state the DirectoryBrowser component, after this function has been moved to 'DirectoryBrowser' component in DONE 3.
        */
        this.setState({ directoriesList: updatedDirectories });

        /* DONE 5: Removed the line given below, which is used to call the 'createDirectoryHandler()' method passed down via props.
        'createDirectoryHandler' method has moved to the 'DirectoryBrowser' component in DONE 3, and this is why this line is not needed here for the solution.
        */
    }

    render() {
        return (
            <div className="main-directory-container">
                <div className="heading-container">
                    <h2>Directory Browser</h2>
                </div>
                <CreateDirectory
                    createDirectoryHandler={this.createDirectoryHandler}
                />
                <div className="directory-component-list-container">
                    <div>
                        <h3>List of Directories</h3>
                        {
                            this.state.directoriesList.map(directory => {
                                return <div className="directoryComponent" key={directory.id}>
                                    <DirectoryRow
                                        directory={directory}
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DirectoryBrowser;