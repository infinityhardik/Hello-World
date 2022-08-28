import React from 'react';

/* NOTE: 
You need to make 'DirectoryBrowser' as the SMART component and 'CreateDirectory' as the DUMB component. 
At present, the logic of creating new directories is in CreateDirectory component. You need to move out the logic from the CreateDirectory (dumb) component to DirectoryBrowser (smart) component.
*/

// DONE 6: Converted 'CreateDirectory' from a class component to a functional component
const CreateDirectory = function (props) {

	// DONE 1: Cut 'calculateGUID' method from here and pasted it inside 'DirectoryBrowser' component class
	// DONE 3: Cut 'createDirectoryHandler' method from here and pasted it inside 'DirectoryBrowser' component class
	
	return (
		<div className="create-directory-container">
            <span>Directory Name:</span><br/>
                <input id="directoryNameTextbox" className="input-box" type="text" />
			<input id="createDirectory" className="custom-btn" type="button" value="Create Directory" onClick={props.createDirectoryHandler} />
		</div>
	);
}

export default CreateDirectory;