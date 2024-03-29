import React from "react";
import { paginationData } from "../utils/filtered";
import moment from "moment";
import Image from "next/image";
function VisitTimePrint({ guest, activePage }) {
  return (
    <div className="flex flex-col w-full p-5 items-center my-2 ">
      <div className="flex bb-2">
        <Image src="/onlylogo.png" alt="BPS" width={70} height={70} />
        <div className="text-center">
          <p className="text-xl">BADAN PUSAT STATISTIK KOTA BANJARMASIN</p>
          <p className="text-sm">
            Jalan Gatot Subroto No. 5 Banjarmasin 70235, Telpon (0511) 6773031,
            6773932
          </p>
        </div>
      </div>
      <hr className="mb-4 md:min-w-full b-2 text-red-600 bg-red-500" />

      <header className="text-sm">
        DATA WAKTU KUNJUNGAN PADA BADAN PUSAT STATISTIK KOTA BANJARMASIN
      </header>

      <div className="w-full lg:w-6/6">
        <div className="bg-white shadow-md rounded my-6 ">
          <table className="min-w-full  table-auto border">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nama</th>
                <th className="py-3 px-6 text-left">Jam</th>
                <th className="py-3 px-6 text-left">Hari</th>
                <th className="py-3 px-6 text-center">Waktu Kunjungan</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {!guest && <p>Loading . . . </p>}
              {guest &&
                paginationData(guest.guest, activePage, 10).map(
                  (guest, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{guest.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <span>{moment(guest.date2).format("LT")}</span>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <span>{moment(guest.date2).format("dddd")}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span>{moment(guest.date2).format("LL")}</span>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VisitTimePrint;
