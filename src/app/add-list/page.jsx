"use client";

import addListAction from "@/action/addListAction";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  let [isSubmit, setIsSubmit] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const files = document.querySelector("input").files;

    const fileNames = [];
    let counter = 1;
    for (const file of files) {
      fileNames.push({
        filename: file.name.split(".").slice(0, -1).join(" "),
        nomor: counter,
      });
      counter++;
    }
    // console.log(fileNames);
    addListAction(fileNames).then((msg) => {
      setIsSubmit(false);
      msg === "success" ? router.push("/") : window.alert(msg);
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-96">
        <div className="card-body">
          <h3 className="card-title">Masukkan data</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              multiple
              required
              className="file-input file-input-bordered file-input-neutral w-full max-w-xs"
            />
            <button className="btn btn-neutral w-full mt-3">
              {isSubmit ? (
                <>
                  <span className="loading loading-spinner"></span> MOHON TUNGGU
                </>
              ) : (
                "INPUT DATA"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
