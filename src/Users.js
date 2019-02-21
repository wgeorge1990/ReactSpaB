import React from "react";
class Users extends React.Component {
  state = {
    allUser: [],
    name: "",
    age: 0,
    birthday: "",
    allUsers: [
      { name: "Billy Bob" },
      { name: "Whitney Huston" },
      { name: "Kwam" },
      { name: "Andy" },
      { name: "William" }
    ]
  };

  componentDidMount() {}

  fetchUsers = () => {
    const ApiEndPoint = "http://localhost:3000/Users";
    fetch(ApiEndPoint)
      .then(response => response.json())
      .then(data =>
        this.setState({
          allUsers: data
        })
      );
  };

  handleFormInputs = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    fetch("http://localhost:3000/Users", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        birthday: this.state.birthday
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <div className="Users">
        <h1>Create User</h1>
        <label>Create User Form</label>
        <form onSubmit={e => this.submitForm(e)}>
          <input
            placeholder="name"
            type="text"
            name="name"
            onChange={e => this.handleFormInputs(e)}
          />
          <input
            placeholder="age"
            type="number"
            name="age"
            onChange={e => this.handleFormInputs(e)}
          />
          <input
            placeholder="birthday"
            type="text"
            name="birthday"
            onChange={e => this.handleFormInputs(e)}
          />

          <input placeholder="submit" type="submit" />
        </form>
        <div className="User List">
          <ul>
            {this.state.allUsers.map(user => (
              <li>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Users;
