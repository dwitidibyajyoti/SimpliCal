import React, {useEffect, useState} from 'react';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';


import { Link } from 'react-router-dom';
const Calender = ({cartImages,setCartImages}) => {
  const [date, setDate] = useState(new Date());
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [isOpen, setIsOpen] = useState(true);
  const [popupLocation, setPopupLocation] = useState(0);
  const [positionTop, setPositionTop] = useState(0);
  const [eventName, setEventName] = useState("");
  const [images, setImages] = useState([]);
  
  
 
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22, 23, 24, 25, 26, 27, 28, 29, 30,];
  const events = {
    1: {
      events: [
        {
          event: "Odish foundation date",
          color: "bg-[#f20091]",
          images: [
            "https://st1.latestly.com/wp-content/uploads/2023/03/Odisha-Day-2023-380x214.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzQ4TOvxV4RpcEu-wwuSuupMLiwl-PTYhvxCb1sW2WPUwaB0bbkglMz6gS5IGlBiWdAs&usqp=CAU",
            "https://pbs.twimg.com/media/FPMj5VuVgAA9btm.jpg",
            "https://news24online.com/wp-content/uploads/2023/04/image-5-7.jpg",
          ],
        },
      ],
    },

    2: {
      events: [
        {
          event: "Palam saturday",
          color: "bg-[#6d00a6]",
          images: [
            "https://media.istockphoto.com/id/1295930276/photo/silhouette-jesus-christ-riding-donkey-on-meadow-sunset.jpg?s=612x612&w=0&k=20&c=xWpLcidwuzNfzQR1feriw7znQ0xF4C5ndCy2c2Ptmzw=",
            "https://media.istockphoto.com/id/467975236/vector/jerusalem-paint-of-palm-sunday.jpg?s=612x612&w=0&k=20&c=cmrJCCdx0drtFDfiEuFhtyPcKP1P7FGE4jFdAOxfXXE=",
            "https://media.istockphoto.com/id/1074998034/photo/the-fresco-of-entry-of-jesus-in-jerusalem-in-duomo-by-lattanzio-gambara.jpg?s=612x612&w=0&k=20&c=3Piu8_PclgCJ-73QSvP90AB4E9c3D4BZ2WDlnQfYlto=",
          ],
        },
      ],
    },

    4: {
      events: [
        {
          event: "maharshi jayanti",
          color: "bg-[#f20091]",
          images: [
            "https://i.pinimg.com/736x/9c/e7/f2/9ce7f249e15f962e6f6c077b625c20ab.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzsMc1X3tdsix-22A6bJWEvk27KY870Xx3e6KGFbefKDKmVIJ3BlPFhz290kSyKGkJ-g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zFZT0ADINA9s_aIrESsNlSgF6gfbZ2iY0On13Y47SaRqoZewlJtZjab1TNf_bp2h7Tw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zFZT0ADINA9s_aIrESsNlSgF6gfbZ2iY0On13Y47SaRqoZewlJtZjab1TNf_bp2h7Tw&usqp=CAU",
          ],
        },
      ],
    },

    6: {
      events: [
        {
          event: "hanuman jayanti",
          color: "bg-[#f20091]",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeK2XRfPk50DOc8S5NcLVytFow8LTMl_urUIeI9yiiDfUCIUwMzlcfsJJ52vw66o-t-c&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LuKVND-udX3RcQSApNKbD1YVJqlPDveJ7uHgmttNyYHCZyfhyTZ1x8LGmDHSh0LGlAg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUOqKkmRG-xcH9SBPVsjl9i37Cm0gcFPIJVDA1mV2MLzfl0nez9Tu4NMiK2hWjCeThz4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T8gTvaWyD7UWNlvg2qV0yHjNh3weQEGxSL3Ougi7cR9p-3xchgjldcpWp3ryafSET3A&usqp=CAU",
          ],
        },
      ],
    },

    7: {
      events: [
        {
          event: "World health day",
          color: "bg-[#6d00a6]",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FnVNsUy39UBxtGzTnvG3yuIS2tvHroq_OavwNk8UKZ_PUGvrpjLjZDWcHBVn28121d8&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRM26_Fuz7o5IlKmdLbgGB3Pj9ix_qaBSndV93lREz1ifa_G9MYgSZbojyMf4QkkQ9J_k&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMTk_PSy74D5k_NmzKIX0wRzkmGMZFMJfDSIwJdRN3AdQp9fveh4O8KjhPuRmQVy6thc&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cL1J3Kc6V72U9e_--7XwulOEebnPXHp0VIl2eKLmbkPn1W__9QjknVb10M4hjh897Ew&usqp=CAU",
          ],
        },
      ],
    },

    8: {
      events: [
        {
          event: "Good friday",
          color: "bg-[#4c00ef]",
          images: [
            "https://images.hindustantimes.com/img/2022/04/13/original/GF3_1649868783999.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaaIpNMvuJfjsyCpVfFe8lRUS4CJrl5kV5dGGVKqrebXWquWArfPuTOj2lUq6j6cGmx8&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSZ73mhcDT0MPvtbBmNDsDtGx8wxEjb7b9Sflyqp11a7NsFaSSk9bZ08mmzMncCOd7g8&usqp=CAU",
          ],
        },
      ],
    },

    10: {
      events: [
        {
          event: "Ester date",
          color: "bg-[#4c00ef]",
          images: [
            "https://images.indianexpress.com/2020/04/easter-feature.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW059sX77RCDvvxiUrOYPl2RBYnOjPaB8TcRQET2q-DLgWQG4VnqyMH3njTq-MBUIsDY&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzv7LWRG2oqFCGWwXg_oqDk0QsBon5TwAJF7niovBEIWUG0HfS0gr1E9HDmzoH0Xy-S8&usqp=CAU",
          ],
        },
      ],
    },

    14: {
      events: [
        {
          event: "Ambedkar jayanti",
          color: "bg-[#f20091]",
          images: [
            "https://images.hindustantimes.com/tech/img/2023/04/13/960x540/We_1681403410283_1681403410520_1681403410520.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DOQYQdpaL48WFS9W98JitU15MC-L48N-1D9vEvvyLpgsJAewLVHi1LNVEL0aMCE8KVc&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2tLLCWi0M1HHdX4otJs-ViWMAXVN5emHM1vQAiaYng8z-xJRQw80i8SH_L1FzpUNoM0&usqp=CAU",
          ],
        },
        {
          event: "Vaisakhi",
          color: "bg-[#f20091]",
          images: [
            "https://images.thequint.com/thequint%2F2023-04%2Fae6ce81b-e847-4b26-a658-32825daf90ee%2FHappy_Baisakhi_Wishes_in_English.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzMBbjJR17lM6vIcY9QbBFGkZNhiNUKDE1OMeD1PFBa0wQZedbS7CATMd3BwlAqyMfxU&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsyvEEfKTjRo8GB_tf0Uw_5SCJNOYFupLGbpKFfZRcULWEsPbL8w-PGY8Bmnp_g6kAfQ&usqp=CAU",
          ],
        },
      ],
    },

    22: {
      events: [
        {
          event: "EID UL FITAR",
          color: "bg-[#4c00ef]",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9SZGaVy9Y4dzeuMmsGo7hK-m-4sWmvImBTrv01Sfm2eVv6TwpoiLO_1eJFe4aLqBlaQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDaTOmur035jOoGQNH4HrAgCyJJulfSkCf8TNY2BZaEKAT7Ii9xMhBs5p7aiOBqa3beY&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqSJ3XMPyWS2RYVx7uWweSr56L1VQpFbbHf1lr98SiSgN92-92traTi2vGbcwG5OdsiA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQau_AcvtigfkFQ6lVjtY7hkRh0PEgIihZHXC4KiqWfZKtzZeRE9_bIv_hHIQrGXRLFWK0&usqp=CAU",
          ],
        },
        { event: "Mesadi", color: "bg-[#f20091]", images: [] },
      ],
    },

    24: {
      events: [
        {
          event: "Jamat Ul-Vida",
          color: "bg-[#f20091]",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTi5ojmW6-7WaT7hKoxG_STZeW4UxCY823JVrsyLQiSxyjZig0twW-NQabu4gl3eLh2A&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUGyLFPdT-2gbeAdEV9foZiHx3IU3hWUePrqi4Rg_YAKk2MQVMQdNEPWO-cptfD8lZVg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKPChRYQBm2AL4f12SuFmaT4QXvJzAO2YA4o7mbW_KLd89bRljaFX8DBQ349GauSZyO4&usqp=CAU",
          ],
        },
        {
          event: "Sachin`s birthday",
          color: "bg-[#6d00a6]",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTux4EeSQR5m0xKYR2JPl79XmkjogqFYxnBFsZ2lspc&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWkzoaYzZCIbqgLdKiqyAu8tJiUdk_db-Mfe8dvowA3SFHWDYF5ay1q1oLtaiisjnrKc&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXPYu41crZ9fnROqN_v6cltEntyN-33bRL_3n_DdMhu9Gw85FrmKhCfxsi_1gVAeYZ0M&usqp=CAU",
          ],
        },
      ],
    },
  };

  const prevMonthDays = [27, 28, 29, 30, 31];
  const handleClick = (event, day, eventName, images) => {
    setPopupLocation(day);
    setEventName(eventName);
    setImages([...images]);
  };
  console.log(`cartImages`, cartImages);

  return (
    <div className="h-[97vh] w-screen mx-auto static">
      <div className="flex justify-around mb-4">
        <h2 className="text-xl font-bold">
         {"April"} {'2023'} 
        </h2>
        <Link to="/cart">cart</Link>
      </div>
      <div className="flex gradient w-full  justify-around h-[70px]">
        {weekdays.map((day) => (
          <div
            key={day}
            className="w-[10%] text-center font-bold text-wi-600 flex justify-center items-center text-[#f0ecec]"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap  h-[90%]">
        {prevMonthDays.map((day, index) => (
          <div
            key={`prev-${index}`}
            className="w-[14.28%] text-gray-400 border-2 "
          >
            <span className="block p-4">{day}</span>
            {events[day] &&
              events[day].events.map((item, id) => {
                return (
                  <div
                    key={id}
                    className={`${item.color} font-sans pl-4 p-1 m-2 rounded text-[#f0ecec] cursor-pointer`}
                  >
                    {item.event}
                  </div>
                );
              })}
          </div>
        ))}
        {days.map((day) => (
          <div key={day} className="w-[14.28%] font-bold border-2 ">
            <span className="block p-4">{day}</span>
            {events[day] &&
              events[day].events.map((item, id) => {
                return (
                  <div
                    key={id}
                    className={`${item.color} font-sans pl-4 p-1 m-2 rounded text-[#f0ecec] cursor-pointer`}
                    onClick={(e) =>
                      handleClick(e, day, item.event, item.images)
                    }
                  >
                    {item.event}
                  </div>
                );
              })}
            {popupLocation == day && (
              <div
                className={`inline-block bg-red-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full absolute  origin-top-left `}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
                style={{ top: `36%`, left: `30%` }}
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {eventName}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {images.map((images) => {
                      return (
                        <>
                          <img
                            src={images}
                            alt={eventName}
                            className="h-[90px] w-[90px]"
                          />
                          <TbShoppingCartPlus
                            className="cursor-pointer"
                            onClick={() =>
                              setCartImages([...cartImages, images])
                            }
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setPopupLocation(0)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
