import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className=" bg-gray-100 min-h-screen ">
      <div className="p-5 max-w-xl mx-auto flex flex-col gap-2">
        <TaskCard title={"Listing App"} to={"/listing-component"} />
        <TaskCard title={"User Crud"} to={"/user-crud"} />
        <TaskCard title={"Multi Step Form"} to={"/multi-step-form"} />
      </div>
    </div>
  );
};

const TaskCard = ({ title, to }) => {
  return (
    <div className="bg-gray-200  p-5 rounded-md flex items-center justify-between gap-5">
      <h2 className="text-sm font-bold">{title}</h2>
      <Button asChild size="sm">
        <Link to={to}>Start</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
