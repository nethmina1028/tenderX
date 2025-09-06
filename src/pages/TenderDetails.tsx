import { useParams } from "react-router-dom";
import { Save, Share } from "lucide-react";
function TenderDetails() {
  const { id } = useParams();

  return (
    <div>
      <div className="p-8 md:p-12">
        <div className="flex md:flex-row flex-col  md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4">Tender Title</h1>
            <p className="text-gray-600">
              Posted on: {new Date().toLocaleDateString()}, Homagama, Colombo
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="p-2  hover:text-blue-600 flex items-center gap-2 opacity-60">
              <Save className="w-5 h-5" /> Save
            </button>
            <button className="p-2  hover:text-blue-600 flex items-center gap-2 opacity-60">
              <Share className="w-5 h-5" /> Share
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            TenderID: {id}
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
            quis consectetur. Morbi neque ex, condimentum dapibus congue et,
            vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod
            elit et nisi ultrices, ut faucibus orci tincidunt. Duis euismod,
            nisl vel tincidunt luctus, nunc urna ullamcorper nunc, non pulvinar
            nisi lectus nec erat.
          </p>
          <p className="mb-4">
            Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
            Nulla fringilla, orci ac euismod semper, magna diam porttitor
            mauris,
          </p>
        </div>
      </div>
    </div>
  );
}

export default TenderDetails;
