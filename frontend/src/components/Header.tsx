import { Carousel } from "antd";
import { Input } from "antd";
import { Select } from "antd";
import { Search } from "lucide-react";

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
};

function Header() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Carousel autoplay autoplaySpeed={5000} dots={false}>
        <div>
          <img
            style={imgStyle}
            src="https://picsum.photos/800/400?random=1"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            style={imgStyle}
            src="https://picsum.photos/800/400?random=2"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            style={imgStyle}
            src="https://picsum.photos/800/400?random=3"
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            style={imgStyle}
            src="https://picsum.photos/800/400?random=4"
            alt="Slide 4"
          />
        </div>
      </Carousel>

      <div className="md:p-8 bg-primary items-center p-5">
        <div className="items-center justify-center flex gap-4 max-w-4xl m-auto">
          <Input placeholder="Search Tenders" className=" h-12 " />
          <Select
            className="border-none "
            defaultValue="lucy"
            style={{ width: 200, height: 48 }}
            onChange={handleChange}
            options={[
              {
                label: <span>manager</span>,
                title: "manager",
                options: [
                  { label: <span>Jack</span>, value: "Jack" },
                  { label: <span>Lucy</span>, value: "Lucy" },
                ],
              },
              {
                label: <span>engineer</span>,
                title: "engineer",
                options: [
                  { label: <span>Chloe</span>, value: "Chloe" },
                  { label: <span>Lucas</span>, value: "Lucas" },
                ],
              },
            ]}
          />
            <button className="bg-gray-400 rounded-md text-primary font-semibold px-4  h-12 hover:bg-gray-200">
                <Search />
            </button>

          


        </div>
      </div>
    </div>
  );
}

export default Header;
