const LimitedAccess = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="text-gray-700 max-w-xl mb-6">
        You declined our Terms and Conditions. Full access is restricted.
      </p>
      <a
        href="/"
        className="mt-6 inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default LimitedAccess;