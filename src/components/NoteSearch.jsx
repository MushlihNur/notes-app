import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    const keyword = event.target.value;
    this.setState({ search: keyword });
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          onChange={this.onSearchEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
