import { Car } from "lucide-react";

function CategorySection() {
   

  return (
    <div>
      <div className="p-12">
        <h1 className="text-2xl font-semibold"> Browse tenders by category </h1>

        <div className="max-w-7xl m-auto p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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




            ].map((category, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md">
                <div className="flex gap-4 items-center justify-center object-cover">
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
  );
}

export default CategorySection;
