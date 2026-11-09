"use client";
import { getDataPath } from "@/utils/image";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Selected Projects</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {workData?.map((value: any, index: any) => (
                <div key={index} className="bg-white rounded-lg p-6 xl:p-8 flex flex-col gap-3">
                  <p className="text-primary text-sm">{value?.tag}</p>
                  <h5>{value?.title}</h5>
                  <p>{value?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
