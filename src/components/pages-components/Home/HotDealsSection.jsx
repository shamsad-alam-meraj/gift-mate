import SectionHeader from "@/components/shared-components/SectionHeader";

const HotDealsSection = () => {
    const hotDeals = [
      { id: 1, image: "/images/deal1.jpg", title: "Smartphone", price: "$499" },
      { id: 2, image: "/images/deal2.jpg", title: "Laptop", price: "$999" },
      { id: 3, image: "/images/deal3.jpg", title: "Headphones", price: "$199" },
    ];
  
    return (
      <div className="mt-10 px-4">
       <SectionHeader title="Hot Deals" />
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotDeals.map((deal) => (
            <div key={deal.id} className="border rounded-lg p-4 shadow-lg">
              <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-4">{deal.title}</h3>
              <p className="text-primary font-bold">{deal.price}</p>
              <button className="mt-2 px-4 py-2 bg-primary text-white rounded shadow">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HotDealsSection;
  