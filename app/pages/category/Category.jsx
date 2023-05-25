import React, { useState, useEffect } from "react";
import db from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const categoryCollection = collection(db, "category");
    const categorySnapshot = await getDocs(categoryCollection);
    const categoryList = categorySnapshot.docs.map((doc) => doc.data());
    setCategories(categoryList);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-14">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {category.name}
                </th>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
             ))}


            
          </tbody>
        </table>
      </div>
            </div>    
        </div>
      
    </div>
  );
};

export default Category;
