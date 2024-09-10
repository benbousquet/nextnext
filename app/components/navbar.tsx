export default function Navbar() {
  return (
    <div className="lg:max-w-7xl max-w-fit mx-auto navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">NextNext</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Watch</a>
          </li>
          <li>
            <details>
              <summary>Contribute</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Submit Content</a>
                </li>
                <li>
                  <a>Github</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Profile</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Preferences</a>
                </li>
                <li>
                  <a>Stats</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
