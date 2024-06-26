export default function ProfilePage() {
  const logout = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-whit font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
