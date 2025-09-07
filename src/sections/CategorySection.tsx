import { Car } from "lucide-react";

function CategorySection() {
  return (
    <div>
      <div className="p-8 md:p-12">
        <div className="flex items-center justify-between">
          <h1 className="md:text-2xl text-md  font-semibold">
            {" "}
            Browse tenders by category{" "}
          </h1>
          <a href="" className="text-blue-500 text-sm">
            {" "}
            see more
          </a>
        </div>

        <div className="max-w-7xl mx-auto p-4">
          <div className="md:grid md:grid-cols-4 gap-4">
            <div className="md:contents overflow-x-auto pb-4 md:pb-0 flex md:flex-wrap md:gap-0 scrollbar-hide">
              {[
                { name: "Category 1", tenders: 10, icon: <Car /> },
                { name: "Category 2", tenders: 5 },
                { name: "Category 3", tenders: 8 },
                { name: "Category 4", tenders: 12 },
                { name: "Category 5", tenders: 7 },
                { name: "Category 6", tenders: 3 },
                { name: "Category 7", tenders: 9 },
                { name: "Category 8", tenders: 4 },
                { name: "Category 9", tenders: 6 },
                { name: "Category 10", tenders: 11 },
                { name: "Category 11", tenders: 2 },
                { name: "Category 12", tenders: 14 },
                { name: "Category 13", tenders: 1 },
                { name: "Category 14", tenders: 15 },
                { name: "Category 15", tenders: 13 },
                { name: "Category 16", tenders: 8 },
                { name: "Category 17", tenders: 10 },
                { name: "Category 18", tenders: 5 },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-md flex-shrink-0 w-48 md:w-full md:flex-shrink md:flex-auto"
                >
                  <div className="flex gap-4 items-center justify-center md:flex-row flex-col">
                    {category.icon && category.icon}
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">
                        {category.name}
                      </span>
                      <span>{category.tenders} Tenders</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
