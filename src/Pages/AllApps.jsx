import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";
import Loading from "./Loading";
import ErrorMassage from "./ErrorMassage";





const AllApps = () => {
  const appsData = useLoaderData() ; 
  const [search, setSearch] = useState("");
  const [loading,setLoading] =useState(true);
   const [filteredApps, setFilteredApps] = useState([]);

  // const filteredApps = appsData.filter(app =>
  //   app.title?.toLowerCase().includes(search.toLowerCase())
  // );
    useEffect(() => {
    if (appsData) {
      const filtered = appsData.filter(app =>
        app.title?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }
  }, [appsData, search]);
   if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">All Apps</h1>
      <p className="text-center text-gray-500 text-sm">Explore All Apps on the Market developed by us .we code for Millions.</p>

      <div className="flex justify-between items-center my-6">
        <p className="font-bold">({filteredApps.length}) Apps Found </p>
        <input
          type="text"
          placeholder="search Apps"
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded"
        />
      </div>

      {filteredApps.length === 0 ? (

       <p  className='text-center text-gray-500'> No Apps  Found </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;