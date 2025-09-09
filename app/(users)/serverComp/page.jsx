const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL, { cache: "no-store" }); // prevents stale data
  const data = await res.json();

  return (
    <section className="p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Server Component
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((curElem) => (
          <li
            key={curElem.id}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {curElem.title}
            </h2>
            <p className="text-gray-600">{curElem.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServerComp;
