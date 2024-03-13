import Image from "next/image";
import Link from "next/link";
import TrainCard from "./components/TrainCard";
import HeroTitle from "./components/HeroTitle";
interface trainTime {
  _id: string;
  tripName: string;
  startPoint: string;
  endPoint: string;
  timeLeave: string;
  day:[];
}

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/traintable", {
    next: { revalidate: 10 },
  });
  const datas: trainTime[] = await res.json();

  return (
    <main>
      <div className="flex flex-col items-center">
        <br></br>
        <div className="grid grid-cols-1 gap-4">
          {datas.map((data: any) => (
            <div key={data.__id}>
              <TrainCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
