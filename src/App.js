import React from "react";
import "./App.css";
import Dropdown from "react-dropdown-overflow";
import Card from "./Card";

function DropdownContent() {
  return (
    <div className="dropdown-content">
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
      <div>item 4</div>
      <div>item 5</div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>react-dropdown-overflow</h1>
      <Card
        code={[
          `<Dropdown mode="hover" dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Hover</h2>
        <div className="code-wrapper">
          <div className="code">mode='hover'</div>
        </div>
        <div className="dropdown-container">
          <Dropdown dropdown={<DropdownContent />}>
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>

      <Card
        code={[
          `<Dropdown mode="click" dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Click</h2>
        <div className="code-wrapper">
          <div className="code">mode='click'</div>
        </div>
        <div className="dropdown-container">
          <Dropdown mode="click" dropdown={<DropdownContent />}>
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>

      <Card
        code={[
          `<Dropdown mode="hover" positioning="left" dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Positioning (left)</h2>
        <div className="code-wrapper">
          <div className="code">positioning='left'</div>
        </div>
        <div className="dropdown-container">
          <Dropdown positioning="left" dropdown={<DropdownContent />}>
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>

      <Card
        code={[
          `<Dropdown mode="hover" positioning="center" dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Positioning (center)</h2>
        <div className="code-wrapper">
          <div className="code">positioning='center'</div>
        </div>
        <div className="dropdown-container">
          <Dropdown positioning="center" dropdown={<DropdownContent />}>
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>

      <Card
        code={[
          `<Dropdown mode="hover" positioning="right" dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Positioning (right)</h2>
        <div className="code-wrapper">
          <div className="code">positioning='right'</div>
        </div>
        <div className="dropdown-container">
          <Dropdown positioning="right" dropdown={<DropdownContent />}>
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>

      <Card
        code={[
          `<Dropdown mode="click" hasClickOutsideListener dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Outside click listener</h2>
        <div className="code-wrapper">
          <div className="code">hasClickOutsideListener</div>
        </div>
        <div className="dropdown-container">
          <Dropdown
            mode="click"
            hasClickOutsideListener
            dropdown={<DropdownContent />}
          >
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>

      <Card>
        <h2>Overflow example</h2>
        <div className="code-wrapper">
          <div className="code">{`mode='hover'`}</div>
        </div>
        <div className="overflow-wrapper">
          <div className="dropdown-container">
            <Dropdown dropdown={<DropdownContent />}>
              <button className="button-toggle">Toggle</button>
            </Dropdown>
          </div>
          <div className="dropdown-container">
            <Dropdown dropdown={<DropdownContent />}>
              <button className="button-toggle">Toggle</button>
            </Dropdown>
          </div>
          <div className="dropdown-container">
            <Dropdown dropdown={<DropdownContent />}>
              <button className="button-toggle">Toggle</button>
            </Dropdown>
          </div>
          <div className="dropdown-container">
            <Dropdown dropdown={<DropdownContent />}>
              <button className="button-toggle">Toggle</button>
            </Dropdown>
          </div>
        </div>
      </Card>

      <Card
        code={[
          `<Dropdown mode="click" isOpen dropdown={<DropdownContent />}>`,
          `  <button className="button-toggle">Toggle</button>`,
          `</Dropdown>`
        ]}
      >
        <h2>Controlled component</h2>
        <div className="code-wrapper">
          <div className="code">{`isOpen={true}`}</div>
        </div>
        <div className="dropdown-container">
          <Dropdown isOpen dropdown={<DropdownContent />}>
            <button className="button-toggle">Toggle</button>
          </Dropdown>
        </div>
      </Card>
    </div>
  );
}

export default App;
