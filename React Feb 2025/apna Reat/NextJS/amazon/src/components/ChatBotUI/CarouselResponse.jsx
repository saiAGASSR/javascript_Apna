// import React from 'react';
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from 'framer-motion';

// export default function CarouselResponse({ data }) {
//   if (!data || !data.carousel_results) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="p-4"
//     >
//       <h3 className="text-lg font-semibold mb-3">{data.carousel_name}</h3>
//       <ScrollArea className="w-full whitespace-nowrap">
//         <div className="flex gap-4">
//           {data.carousel_results.map((item, idx) => (
//             <Card key={idx} className="min-w-[220px] max-w-[240px]">
//               <CardContent className="p-2">
//                 <img
//                   src={item.img_url}
//                   alt={item.content_name}
//                   className="w-full h-[120px] object-cover rounded-md mb-2"
//                 />
//                 <p className="text-sm font-medium text-gray-700 truncate">
//                   {item.content_name}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         <ScrollBar orientation="horizontal" />
//       </ScrollArea>
//     </motion.div>
//   );
// }
