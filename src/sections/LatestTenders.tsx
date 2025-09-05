import { Search } from "lucide-react";

function LatestTenders() {

  interface Tender {
    id: string;
    image: string;
    title: string;
    category: string;
    closingDate: Date;
    postingDate: Date;
  }

  const tenders: Tender[] = [
    {
      id: "#0000230",
      image: "https://picsum.photos/800/400?random=4",
      title: "Stay updated with the latest tenders in your area.",
      category: "Electronic home / Products",
       closingDate: new Date("2063-12-23"),
    postingDate: new Date("2055-04-05"),
    },
    {
      id: "#0000231",
      image: "https://picsum.photos/800/400?random=5",
      title: "Find the best opportunities for your business.",
      category: "Construction / Services",
      closingDate: new Date("2063-12-23"),
      postingDate: new Date("2055-04-05"),
    },
  ];

  return (
    <div>
      <div className="p-8 md:p-12">
        <h1 className="md:text-2xl text-md font-semibold">Latest Tenders</h1>

        {tenders.map((tender, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-md md:mx-20 mt-4"
          >
            <div className="flex flex-col">
              <h1 className="text-blue-500">{tender.id}</h1>

              <div className="flex gap-4 md:items-center mt-2 flex-col md:flex-row items-start">
          <div className="flex gap-4 md:items-center flex-1 flex-col md:flex-row items-start">
            <div>
              <img
                src={tender.image}
                alt="Tender"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold">{tender.title}</h1>
              <p className="text-sm text-primary">{tender.category}</p>
            </div>
          </div>

          <button className="bg-primary rounded-md text-primary font-semibold px-4 h-10 hover:bg-gray-200 flex gap-2 items-center">
            <Search /> <span>View</span>
          </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <p className="text-red-600">Closing on {tender.closingDate.toLocaleDateString()}</p>
              <p>Post on {tender.postingDate.toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestTenders;
