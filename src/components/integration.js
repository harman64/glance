import React from 'react';

class Integration extends React.Component {

    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (<div>
        <form action="http://localhost:3001">
          <input type="file" id="myfile" name="myfile" multiple={false} />
          <input type="submit" />
        </form>
      </div>)
    }
  
  }
  

  export default Integration;