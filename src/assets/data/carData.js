// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Ford",
    available: true,
    rating: 112,
    carName: "Ford Range F150",
    imgUrl: img01,
    model: "2023  Orange",
    price: 500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Our Ford Ranger and F-150 rentals offer powerful, versatile trucks for any adventure. With nimble handling, fuel efficiency, and impressive towing capacity, these trucks are equipped with the latest technology and safety features for a reliable drive. ",
  },

  {
    id: 2,
    brand: "Toyota",
    available: true,
    rating: 102,
    carName: "Toyota Yaris GR",
    imgUrl: img02,
    model: "Model-2022",
    price: 450,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Yaris GR is a high-performance, compact hatchback that offers an exhilarating driving experience. It combines sporty design with advanced technology, featuring a turbocharged engine, all-wheel drive, and precise handling. Ideal for enthusiasts seeking a fun and agile ride, the Yaris GR delivers impressive acceleration and a dynamic driving experience, making it a standout choice in the compact sports car segment.",
  },

  {
    id: 3,
    brand: "BMW",
    available: true,
    rating: 132,
    carName: "BMW M5 CS",
    imgUrl: img03,
    model: "2022  Red",
    price: 1350,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the ultimate driving experience with our BMW M5 CS rental, featuring a powerful V8 engine, sophisticated interior, and advanced technology. Elevate your driving adventure with this luxurious sedan, perfect for both racetrack and highway use.  ",
  },

  {
    id: 4,
    brand: "Ford",
    rating: 102,
    carName: "Ford Ranger",
    imgUrl: img04,
    model: "Model-2022",
    price: 700,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Ford Ranger is a versatile midsize pickup truck known for its rugged performance and practicality. It features a robust build, advanced safety technology, and a range of powerful engine options, including turbocharged variants. With a spacious interior, ample cargo capacity, and off-road capabilities, the Ranger is well-suited for both work and recreational activities. Its balanced ride and handling, combined with modern tech features and comfort, make it a popular choice for those needing a reliable and capable truck.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyota Yaris",
    imgUrl: img05,
    model: "Model-2022",
    price: 350,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Yaris is a compact car known for its reliability, fuel efficiency, and practicality. It features a sleek, modern design and offers a comfortable ride with nimble handling. The Yaris is equipped with user-friendly technology, including a responsive infotainment system, and comes with various safety features such as advanced driver-assistance systems. Ideal for city driving and commuting, it provides a balance of affordability and performance, making it a popular choice for those seeking a dependable and economical vehicle.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz",
    imgUrl: img06,
    model: "Model-2022",
    price: 850,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Mercedes-Benz is a luxury automotive brand renowned for its high-quality craftsmanship, sophisticated design, and advanced technology. The brand offers a diverse lineup, from stylish sedans and sporty coupes to powerful SUVs and high-performance vehicles. Mercedes-Benz vehicles are known for their luxurious interiors, cutting-edge features, and smooth driving experience. With a focus on innovation, safety, and comfort, Mercedes-Benz combines elegance with performance, making it a prestigious choice in the luxury car market.",
  },

  {
    id: 7,
    brand: "Toyota",
    rating: 82,
    carName: "Toyota Camry",
    imgUrl: img07,
    model: "Model 3",
    price: 950,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Camry is a reliable midsize sedan known for its comfort, efficiency, and advanced safety features. With a sleek design and smooth ride, it offers a range of engine options, including a fuel-efficient hybrid, making it a practical and popular choice for everyday driving.",
  },

  {
    id: 8,
    brand: "Mercedes ",
    rating: 52,
    carName: "Mercedes Benz luxury",
    imgUrl: img08,
    model: "Model 3",
    price: 1250,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Mercedes-Benz luxury vehicles are renowned for their exceptional quality, elegant design, and advanced technology. Offering a blend of sophisticated interiors, cutting-edge features, and smooth performance, they deliver a premium driving experience. The brand is known for its attention to detail, comfort, and innovative safety technologies.",
  },
];

export default carData;
