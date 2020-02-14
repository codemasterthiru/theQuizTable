import React from "react";
import "./styles.scss";

class Tables extends React.Component {
  state = {
    sites: [
      {
        id: "",
        uid: "",
        url: "",
        name: "",
        icon: "",
        promptId: "",
        webPushID: "",
        auto_prompt: "",
        createdAt: "",
        active: ""
      }
    ]
  };
  onClick = () => {
    fetch("https://aimtell.com/files/sites.json")
      .then(res => res.json())
      .then(result => {
        this.setState({
          sites: result.sites
        });
      });
  };
  render() {
    const renderTableBody = props => {
      return props.map(props => {
        return (
          <tr>
            <td>
              <img src={props.icon} />
            </td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.url}</td>
          </tr>
        );
      });
    };
    return (
      <>
        <div className="button-container">
          <button onClick={this.onClick}>Load Data</button>
        </div>
        <table striped bordered hover>
          <thead>
            <tr>
              <th />
              <th>id</th>
              <th>name</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>{renderTableBody(this.state.sites)}</tbody>
        </table>
      </>
    );
  }
}

export { Tables };
export default { Tables };
