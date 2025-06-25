import { DocumentWork, SummaryWork } from "../lib/data";
import { Card } from "./Workcard";

import { IoDocumentTextOutline } from "react-icons/io5";
import { RiWechatPayFill } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr";

import { FiUploadCloud } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";

const iconMap = {
  IoDocumentTextOutline: IoDocumentTextOutline,
  RiWechatPayFill: RiWechatPayFill,
  GrDocumentVerified: GrDocumentVerified,
};

const iconMap1 = {
  FiUploadCloud: FiUploadCloud,
  MdOutlineDashboardCustomize: MdOutlineDashboardCustomize,
  HiOutlineShare: HiOutlineShare,
};

export const Work = () => {
  return (
    <section className="py-12">
      <div>
        <h2 className="text-gray-400 font-bold text-xl md:text-2xl text-center">
          How it works
        </h2>
        <p className="text-center font-bold text-2xl md:text-4xl">
          Transform any PDF into an easy-to-digest summary in three simple steps
        </p>
      </div>
      <Card work={SummaryWork} iconMap={iconMap} />
      <p className="text-center font-bold text-2xl md:text-4xl mt-20">
        Upload, manage, and share your documents effortlessly in three simple
        steps
      </p>
      <Card work={DocumentWork} iconMap={iconMap1} />
    </section>
  );
};
