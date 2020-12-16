import React from "react";
import { fetch_UsersData } from "../actions/index";
import { connect } from "react-redux";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Gender",
          field: "gender",
          checkboxSelection: true,
          sortable: true,
          filter: true,
        },
        {
          headerName: "Name",
          field: "name.first",
          sortable: true,
          filter: true,
        },
        {
          headerName: "City",
          field: "location.city",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Email",
          field: "email",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Phone",
          field: "phone",
          sortable: true,
          filter: true,
        },
      ],
    };
  }
  componentDidMount() {
    this.props.fetch_UsersData();
  }
  render() {
    return (
      <div className="ag-theme-alpine" style={{ height: 550, width: 1000 }}>
        <h1>Dashboard</h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.props.usersdata}
          rowSelection="multiple"
        ></AgGridReact>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    usersdata: state.users.usersData.flat(),
  };
};
export default connect(mapStateToProps, { fetch_UsersData })(Dashboard);
