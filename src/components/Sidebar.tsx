
const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>History</li>
        <li>Playlists</li>
      </ul>

      <h1 className="pt-5 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Games</li>
      </ul>

      <h1 className="pt-5 font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Courses</li>
        <li>Games</li>
      </ul>
    </div>
  )
}

export default Sidebar
