// import { Bell, Calendar, Info } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { supabase, Update } from '@/lib/supabase';
// import { format } from 'date-fns';

// export const metadata = {
//   title: 'Latest Updates | Nashik Kumbh Guide',
//   description: 'Stay informed with official announcements and updates about Nashik-Trimbakeshwar Kumbh Mela.',
// };

// export const revalidate = 1800;

// async function getUpdates() {
//   //const { data, error } = await supabase
//     .from('updates')
//     .select('*')
//     .order('published_at', { ascending: false });

//   if (error) {
//     console.error('Error fetching updates:', error);
//     return [];
//   }

//   return data as Update[];
// }

// export default async function UpdatesPage() {
//   const updates = await getUpdates();

//   return (
//     <div className="relative">
//       <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
//               <Bell className="h-8 w-8 text-red-600" />
//             </div>
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//               Latest Updates
//             </h1>
//             <p className="mt-4 text-xl text-gray-600">
//               Official announcements and information
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//           <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
//             <div className="flex items-start">
//               <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-900 mb-1">
//                   Information Source
//                 </h3>
//                 <p className="text-sm text-gray-700">
//                   All updates on this page are based on official announcements
//                   from Maharashtra Government, Nashik District Administration, and
//                   authorized sources. For the most current information, please
//                   also refer to official government websites.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             {updates.length === 0 ? (
//               <Card>
//                 <CardContent className="p-12 text-center">
//                   <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                   <p className="text-gray-600">
//                     No updates available at the moment. Please check back later.
//                   </p>
//                 </CardContent>
//               </Card>
//             ) : (
//               updates.map((update) => (
//                 <Card
//                   key={update.id}
//                   className="transition-all hover:shadow-lg duration-300"
//                 >
//                   <CardContent className="p-8">
//                     <div className="flex items-start justify-between mb-4">
//                       <h2 className="text-2xl font-bold text-gray-900 flex-1">
//                         {update.title}
//                       </h2>
//                       <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 ml-4">
//                         <Calendar className="h-3 w-3 mr-1" />
//                         {format(new Date(update.published_at), 'MMM dd, yyyy')}
//                       </span>
//                     </div>

//                     <div className="prose prose-gray max-w-none">
//                       <p className="text-gray-600 leading-relaxed whitespace-pre-line">
//                         {update.content}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             )}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//           <Card>
//             <CardContent className="p-8">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 Stay Connected
//               </h3>
//               <div className="space-y-4 text-gray-600">
//                 <p className="leading-relaxed">
//                   For real-time updates during Kumbh Mela, visitors are advised to:
//                 </p>
//                 <ul className="space-y-2 ml-4">
//                   <li className="flex items-start">
//                     <span className="text-orange-600 mr-2">•</span>
//                     <span>
//                       Follow official Maharashtra Tourism social media channels
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-orange-600 mr-2">•</span>
//                     <span>
//                       Check Nashik District Administration website regularly
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-orange-600 mr-2">•</span>
//                     <span>
//                       Listen to local announcements at ghats and major gathering
//                       points
//                     </span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-orange-600 mr-2">•</span>
//                     <span>
//                       Contact local help desks for immediate assistance
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </CardContent>
//           </Card>

//           <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-3">
//               Verified Information Only
//             </h3>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               This website only publishes information from verified official
//               sources. We do not speculate on dates or make predictions. All dates
//               and arrangements are announced only after official confirmation from
//               competent authorities.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function UpdatesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Live Updates Coming Soon
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          Real-time announcements, crowd updates, and important information
          for Nashik Kumbh will be available here soon.
        </p>

        
      </div>
    </div>
  );
}

