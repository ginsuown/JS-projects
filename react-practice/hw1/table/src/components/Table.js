import React, { Component } from "react";
import TableRow from "./TableRow";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <tbody>
          <TableRow cells={["", "Knocky", "Flor", "Ella", "Juan"]} />
          <TableRow
            cells={[
              "Breed",
              "Jack Russell",
              "Poodle",
              "Streetdog",
              "Cocker Spaniel"
            ]}
          />
          <TableRow cells={["Age", "16", "9", "10", "5"]} />
          <TableRow
            cells={["Owner", "Mother-in-law", "Me", "Me", "Sister-in-law"]}
          />
          <TableRow
            cells={[
              "Eating Habits",
              "Eats everyone's leftovers",
              "Nibbles at food",
              "Hearty eater",
              "Will eat till he explodes"
            ]}
          />
        </tbody>
      </table>
    );
  }
}
