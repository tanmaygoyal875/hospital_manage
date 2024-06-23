import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllReports } from '../../../Redux/Datas/action'
import Sidebar from '../Common/Sidebar'

const Reports = () => {
    const dispatch = useDispatch();
  const [Report, setReport] = useState();
  useEffect(() => {
    dispatch(GetAllReports()).then((res) => {
      setReport(res);
    });
  }, []);   
    return (
        <>
            <div className="flex bg-[rgb(245,245,245)]">
                <Sidebar />
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold border py-3 px-12 text-3xl rounded-xl bg-[rgb(0,21,41)] text-white'>Health Care</h1>
                    </div>
                    <div className="w-inherit  mx-10 mt-3">
                        <table className="w-full shadow-2xl">
                            <thead className="bg-[rgb(0,21,41)] text-white font-bold">
                                <tr>
                                    <th className="py-3">Patient Name</th>
                                    <th className="py-3">Department</th>
                                    <th className="py-3">Doctor Name</th>
                                    <th className="py-3">Patient Mobile</th>
                                    <th className="py-3">Patient Age</th>
                                    <th className="py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-center">
                                {Report?.map((ele) => {
                                    return (
                                        <tr>
                                            <td className="py-3">{ele.patientName}</td>
                                            <td>{ele.docDepartment}</td>
                                            <td>{ele.docName}</td>
                                            <td>{ele.patientMobile}</td>
                                            <td>{ele.patientAge}</td>
                                            <td>{ele.date}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* <Table columns={columns} dataSource={data} className="w-full " /> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Reports
