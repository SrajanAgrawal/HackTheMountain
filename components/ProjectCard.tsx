// // import React from "react";
// // import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// // import Link from "next/link";

// // const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, price}) => {
// //   return (
// //     <div>
// //       <div
// //         className="h-52 md:h-72 rounded-t-xl relative group"
// //         style={{ background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
// //       >
// //         <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
// //           <Link
// //             href={gitUrl}
// //             className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
// //           >
// //             <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
// //           </Link>
// //           <Link
// //             href={previewUrl}
// //             className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
// //           >
// //             <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
// //           </Link>
// //         </div>
// //       </div>
// //       <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
// //         <h5 className="text-xl font-semibold mb-2">{title}</h5>
// //         <p className="text-[#ADB7BE] text-sm truncate-words-100 text-ellipsis overflow-hidden">{description}</p>
// //         <p className="text-[#ADB7BE] text-sm">{price}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectCard;


// import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// interface ProjectCardProps {
//   imgUrl: string;
//   title: string;
//   description: string;
//   gitUrl: string;
//   previewUrl: string;
//   price: number;
// }
// const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl, price}) => {
//   return (
//     <div>
//       <div
//         className="h-52 md:h-72 rounded-t-xl relative group"
//         style={{ background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
//       >
//         <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
//           <Link
//             href={gitUrl}
//             className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//           </Link>
//           <Link
//             href={previewUrl}
//             className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//           </Link>
//         </div>
//       </div>
//       <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
//         <h5 className="text-xl font-semibold mb-2">{title}</h5>
//         <p className="text-[#ADB7BE] text-sm truncate-words-100 text-ellipsis overflow-hidden">{description}</p>
//         <p className="text-[#ADB7BE] text-sm">{price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  price: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  price,
}) => {
  return (
    <div className="bg-black rounded-xl p-4 shadow-md">
      <div className="h-32 md:h-52 relative group">
        <div
          className="rounded-t-xl"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            paddingBottom: "75%",
            width: "70%",
            height: "70%"
          }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3  px-4 w-64">
        <h5 className="text-md font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm mb-2 truncate-words-100 text-ellipsis overflow-hidden">
          {description}
        </p>
        <p className="text-[#ADB7BE] text-sm">{price}</p>
      </div>
    </div>
  );
};

export default ProjectCard;