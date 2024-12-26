function List() {
    return (
      <div>
        <h2 align="left">Nested List</h2>
        <ol type="I">
          <li>Background Skills
            <ol type="A">
              <li>Unix Commands</li>
              <li>Vim Test Editors</li>
            </ol>
          </li>
          <li>HTML
            <ol type="A">
              <li>Minimal Page</li>
              <li>Headings</li>
              <li>Elements</li>
              <li>Lists
                <ol type="i">
                  <li>Unordered</li>
                  <li>Ordered</li>
                  <li>Definition</li>
                  <li>Nested</li>
                </ol>
              </li>
              <li>Links
                <ol type="i">
                  <li>Absolute</li>
                  <li>Relative</li>
                </ol>
              </li>
              <li>Images</li>
            </ol>
          </li>
          <li>CSS
            <ol>
              <li>Anatomy</li>
              <li>Basic Selectors
                <ol type="i">
                  <li>Elements</li>
                  <li>Class</li>
                  <li>ID</li>
                  <li>Group</li>
                </ol>
              </li>
              <li>The DOM</li>
              <li>Advanced Selectors</li>
              <li>Box Model</li>
            </ol>
          </li>
          <li>Programming
            <ol type="A">
              <li>Python</li>
              <li>JavaScript</li>
            </ol>
          </li>
          <li>Database
            <ol type="A">
              <li>Flat File</li>
              <li>Relational</li>
            </ol>
          </li>
        </ol>
      </div>
    );
  }
  
  export default List;
